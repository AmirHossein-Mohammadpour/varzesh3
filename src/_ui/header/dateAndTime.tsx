'use client'
import { useState, useEffect } from 'react';

const DateAndTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return <div className="datetime-placeholder">...</div>;
  }

  const persianDate = new Intl.DateTimeFormat('fa-IR', {
    calendar: 'persian',
    weekday: 'long',
    // year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit',
    hour12: false,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  }).format(currentTime).replace('ساعت', '-');

  return (
    <div>
      {persianDate}
    </div>
  );
}

export default DateAndTime;