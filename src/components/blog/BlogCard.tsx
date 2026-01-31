import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import type { BlogPostMeta } from '@/types/blog';
import { formatDateShort } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <article
      className={`group bg-white border-[3px] border-black transition-all duration-300 hover:translate-x-[-8px] hover:translate-y-[-8px] ${featured
          ? 'shadow-[16px_16px_0px_0px_#3B82F6] hover:shadow-[24px_24px_0px_0px_#3B82F6]'
          : 'shadow-[8px_8px_0px_0px_#000000] hover:shadow-[16px_16px_4px_0px_rgba(0,0,0,0.2)]'
        }`}
    >
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
        {post.image && (
          <div className="relative overflow-hidden border-b-[3px] border-black aspect-video lg:aspect-auto lg:h-64">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {featured && (
              <div className="absolute top-6 left-6 bg-[#FDE047] border-[3px] border-black px-4 py-2 font-black text-sm uppercase tracking-tighter shadow-[4px_4px_0px_0px_#000000]">
                À la une
              </div>
            )}
          </div>
        )}

        <div className="p-8">
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 bg-[#FFC4EB] border-2 border-black px-3 py-1 text-[10px] font-black uppercase tracking-widest hover:bg-[#3B82F6] hover:text-white transition-colors"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2
            className={`font-black uppercase tracking-tight leading-[1.1] mb-4 group-hover:text-[#3B82F6] transition-colors ${featured ? 'text-3xl lg:text-5xl' : 'text-2xl'
              }`}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 mb-8 line-clamp-3 text-lg leading-relaxed">{post.excerpt}</p>

          <div className="flex flex-wrap items-center justify-between gap-6 border-t-[3px] border-black pt-6">
            {/* Meta */}
            <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-black" />
                <time dateTime={post.date}>{formatDateShort(post.date)}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-black" />
                <span>{post.readingTime} min</span>
              </div>
            </div>

            {/* Read More Arrow */}
            <div className="w-12 h-12 bg-[#FDE047] border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000000] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_#000000] transition-all">
              <span className="text-2xl font-black">→</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
