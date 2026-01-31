import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { BlogPostMeta } from '@/types/blog';
import { formatDateShort } from '@/lib/blog';

interface RelatedArticlesProps {
  posts: BlogPostMeta[];
  title?: string;
}

export const RelatedArticles = ({
  posts,
  title = 'Articles similaires',
}: RelatedArticlesProps) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#FFFDF5] border-t-3 border-black py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-8 text-center">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white border-3 border-black p-6 shadow-[6px_6px_0px_0px_#3B82F6] hover:shadow-[8px_8px_0px_0px_#3B82F6] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              {post.image && (
                <div className="relative overflow-hidden border-2 border-black mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-32 object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#FFC4EB] border-2 border-black px-2 py-0.5 text-xs font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-black uppercase text-lg mb-2 group-hover:text-[#3B82F6] transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {formatDateShort(post.date)}
                </span>
                <span className="flex items-center gap-1 font-bold text-[#3B82F6] group-hover:gap-2 transition-all">
                  Lire <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
