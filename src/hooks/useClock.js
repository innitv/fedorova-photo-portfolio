import { useEffect, useState } from 'react';

function formatNow() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('ru-RU');
  const timeStr = now.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const offsetHours = -now.getTimezoneOffset() / 60;
  const sign = offsetHours >= 0 ? '+' : '';
  return `${dateStr} ${timeStr} +GMT${sign}${offsetHours}`;
}

export function useClock() {
  const [clockText, setClockText] = useState(() => formatNow());

  useEffect(() => {
    const id = setInterval(() => setClockText(formatNow()), 1000);
    return () => clearInterval(id);
  }, []);

  return clockText;
}
