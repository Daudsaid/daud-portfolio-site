'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio_last_view';

export default function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Count each browser at most once a day; otherwise just read the total.
    const today = new Date().toISOString().slice(0, 10);
    let counted = false;
    try {
      counted = localStorage.getItem(STORAGE_KEY) === today;
      if (!counted) localStorage.setItem(STORAGE_KEY, today);
    } catch {
      // Storage blocked (private mode etc.): fall back to counting the visit.
    }
    fetch('/api/views', { method: counted ? 'GET' : 'POST' })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => {});
  }, []);

  if (count === null) return null;

  return (
    <span className="text-xs text-slate-400">
      👁 {count.toLocaleString()} views
    </span>
  );
}
