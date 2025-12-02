import { useEffect, useMemo, useState } from "react";
import { Clock } from "lucide-react";

function getTimeLeft(target: Date) {
  const now = Date.now();
  const diff = Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export const CountdownTimer = () => {
  // Countdown to 8 December 2025 23:59:59 local time
  const targetDate = useMemo(() => new Date(2025, 11, 8, 23, 59, 59), []);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-2 bg-white border-3 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#000000] font-black uppercase tracking-wider">
      <Clock className="w-4 h-4" />
      <span>
        {pad(timeLeft.days)}j:{pad(timeLeft.hours)}h:{pad(timeLeft.minutes)}m:{pad(timeLeft.seconds)}s
      </span>
    </div>
  );
};