'use client';

import { useEffect, useState } from 'react';

export default function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/views', { method: 'POST' })
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
