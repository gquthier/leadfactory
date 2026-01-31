import { Clock } from 'lucide-react';

interface ReadingTimeProps {
  minutes: number;
  className?: string;
}

export const ReadingTime = ({ minutes, className = '' }: ReadingTimeProps) => {
  return (
    <div className={`inline-flex items-center gap-1 text-gray-600 ${className}`}>
      <Clock className="w-4 h-4" />
      <span className="text-sm font-medium">{minutes} min de lecture</span>
    </div>
  );
};
