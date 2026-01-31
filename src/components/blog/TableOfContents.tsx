import { useState, useEffect } from 'react';
import { List } from 'lucide-react';
import type { TableOfContentsItem } from '@/types/blog';

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="bg-white border-3 border-black p-6 shadow-[8px_8px_0px_0px_#FDE047]">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-black">
        <List className="w-5 h-5" />
        <h3 className="font-black uppercase text-sm tracking-wider">
          Sommaire
        </h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 2) * 16}px` }}
          >
            <button
              onClick={() => handleClick(item.id)}
              className={`text-left w-full text-sm py-1 px-2 transition-all border-l-3 ${
                activeId === item.id
                  ? 'border-[#3B82F6] bg-[#3B82F6]/10 font-bold text-[#3B82F6]'
                  : 'border-transparent hover:border-black hover:bg-gray-100'
              }`}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
