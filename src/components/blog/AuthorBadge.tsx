import { User, Bot } from 'lucide-react';

interface AuthorBadgeProps {
  author: string;
  date?: string;
  className?: string;
}

export const AuthorBadge = ({ author, date, className = '' }: AuthorBadgeProps) => {
  const isAsio = author.toLowerCase() === 'asio';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`w-10 h-10 border-2 border-black flex items-center justify-center ${
          isAsio ? 'bg-[#3B82F6]' : 'bg-[#58BC82]'
        }`}
      >
        {isAsio ? (
          <Bot className="w-5 h-5 text-white" />
        ) : (
          <User className="w-5 h-5 text-white" />
        )}
      </div>
      <div>
        <p className="font-bold text-sm">
          {isAsio ? 'ASIO AI' : author}
        </p>
        {isAsio && (
          <p className="text-xs text-gray-500">Généré par intelligence artificielle</p>
        )}
        {date && !isAsio && (
          <p className="text-xs text-gray-500">{date}</p>
        )}
      </div>
    </div>
  );
};
