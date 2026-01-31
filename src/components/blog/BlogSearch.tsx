import { useState, useEffect, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import Fuse from 'fuse.js';
import { Link } from 'react-router-dom';
import type { BlogPostMeta } from '@/types/blog';

interface BlogSearchProps {
  posts: BlogPostMeta[];
  onClose?: () => void;
}

export const BlogSearch = ({ posts, onClose }: BlogSearchProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<BlogPostMeta[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: [
          { name: 'title', weight: 0.4 },
          { name: 'excerpt', weight: 0.3 },
          { name: 'tags', weight: 0.2 },
          { name: 'categories', weight: 0.1 },
        ],
        threshold: 0.3,
        includeScore: true,
      }),
    [posts]
  );

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = fuse.search(query);
      setResults(searchResults.map((r) => r.item).slice(0, 5));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, fuse]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-12 py-4 bg-white border-3 border-black shadow-[4px_4px_0px_0px_#000000] font-medium focus:outline-none focus:shadow-[6px_6px_0px_0px_#3B82F6] transition-shadow"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border-3 border-black shadow-[8px_8px_0px_0px_#000000]">
          <ul>
            {results.map((post, index) => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  onClick={() => {
                    handleClear();
                    onClose?.();
                  }}
                  className={`block p-4 hover:bg-[#FDE047] transition-colors ${
                    index !== results.length - 1 ? 'border-b-2 border-black' : ''
                  }`}
                >
                  <h4 className="font-bold text-black line-clamp-1">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-1 mt-1">
                    {post.excerpt}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#FFC4EB] border border-black px-2 py-0.5 font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-3 border-t-2 border-black bg-gray-50">
            <p className="text-sm text-gray-500 text-center">
              {results.length} résultat{results.length > 1 ? 's' : ''} trouvé
              {results.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border-3 border-black shadow-[8px_8px_0px_0px_#000000] p-6 text-center">
          <p className="text-gray-600">Aucun résultat pour "{query}"</p>
          <p className="text-sm text-gray-400 mt-2">
            Essayez d'autres mots-clés
          </p>
        </div>
      )}
    </div>
  );
};
