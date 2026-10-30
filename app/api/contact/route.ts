import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Redis } from '@upstash/redis';

const LIMITS = { name: 100, email: 254, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Max submissions per IP per hour.
const RATE_LIMIT = 5;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function isRateLimited(request: NextRequest): Promise<boolean> {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) return false;
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  try {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    const key = `contact_rate:${ip}`;
    const count = await redis.incr(key);
    if (count === 1) await redis.expire(key, 3600);
    return count > RATE_LIMIT;
  } catch {
    // Never block a real message because Redis is unavailable.
    return false;
  }
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;
  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const fields = { name: name.trim(), email: email.trim(), message: message.trim() };
  if (!fields.name || !fields.email || !fields.message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if (
    fields.name.length > LIMITS.name ||
    fields.email.length > LIMITS.email ||
    fields.message.length > LIMITS.message
  ) {
    return NextResponse.json({ error: 'Message too long' }, { status: 400 });
  }
  if (!EMAIL_RE.test(fields.email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  if (await isRateLimited(request)) {
    return NextResponse.json({ error: 'Too many messages, please try again later' }, { status: 429 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    // Resend reports failures in the result rather than throwing.
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'daudsaidabdi@gmail.com',
      replyTo: fields.email,
      subject: `New Portfolio Message from ${fields.name.replace(/[\r\n]+/g, ' ')}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap">${escapeHtml(fields.message)}</p>
      `,
    });
    if (error) {
      return NextResponse.json({ error: 'Failed to send message' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
