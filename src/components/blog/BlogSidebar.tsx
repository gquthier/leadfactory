import { Link, useSearchParams } from 'react-router-dom';
import { Tag, FolderOpen, TrendingUp } from 'lucide-react';
import type { BlogPostMeta } from '@/types/blog';
import { getAllTags, getAllCategories, formatDateShort } from '@/lib/blog';

interface BlogSidebarProps {
  posts: BlogPostMeta[];
  recentPosts?: BlogPostMeta[];
}

export const BlogSidebar = ({ posts, recentPosts }: BlogSidebarProps) => {
  const [searchParams] = useSearchParams();
  const currentTag = searchParams.get('tag');
  const currentCategory = searchParams.get('category');

  const tags = getAllTags(posts);
  const categories = getAllCategories(posts);
  const recent = recentPosts || posts.filter((p) => !p.draft).slice(0, 5);

  return (
    <aside className="space-y-8">
      {/* Recent Articles */}
      <div className="bg-white border-3 border-black p-6 shadow-[8px_8px_0px_0px_#58BC82]">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-black">
          <TrendingUp className="w-5 h-5" />
          <h3 className="font-black uppercase text-sm tracking-wider">
            Articles récents
          </h3>
        </div>
        <ul className="space-y-4">
          {recent.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block hover:bg-[#FDE047] p-2 -mx-2 transition-colors"
              >
                <h4 className="font-bold text-sm line-clamp-2 group-hover:text-[#3B82F6]">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-500 mt-1 block">
                  {formatDateShort(post.date)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="bg-white border-3 border-black p-6 shadow-[8px_8px_0px_0px_#FFC4EB]">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-black">
            <Tag className="w-5 h-5" />
            <h3 className="font-black uppercase text-sm tracking-wider">Tags</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 15).map(({ tag, count }) => (
              <Link
                key={tag}
                to={currentTag === tag ? '/blog' : `/blog?tag=${encodeURIComponent(tag)}`}
                className={`inline-flex items-center gap-1 border-2 border-black px-2 py-1 text-xs font-bold uppercase transition-all ${
                  currentTag === tag
                    ? 'bg-[#3B82F6] text-white shadow-[2px_2px_0px_0px_#000000]'
                    : 'bg-[#FFC4EB] hover:bg-[#3B82F6] hover:text-white'
                }`}
              >
                {tag}
                <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                  {count}
                </span>
              </Link>
            ))}
          </div>
          {currentTag && (
            <Link
              to="/blog"
              className="block mt-4 text-center text-sm font-bold text-[#3B82F6] hover:underline"
            >
              Voir tous les articles →
            </Link>
          )}
        </div>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <div className="bg-white border-3 border-black p-6 shadow-[8px_8px_0px_0px_#3B82F6]">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-black">
            <FolderOpen className="w-5 h-5" />
            <h3 className="font-black uppercase text-sm tracking-wider">
              Catégories
            </h3>
          </div>
          <ul className="space-y-2">
            {categories.map(({ category, count }) => (
              <li key={category}>
                <Link
                  to={
                    currentCategory === category
                      ? '/blog'
                      : `/blog?category=${encodeURIComponent(category)}`
                  }
                  className={`flex items-center justify-between p-2 -mx-2 transition-colors ${
                    currentCategory === category
                      ? 'bg-[#3B82F6] text-white'
                      : 'hover:bg-[#FDE047]'
                  }`}
                >
                  <span className="font-medium capitalize">{category}</span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 border-2 border-black ${
                      currentCategory === category ? 'bg-white text-black' : 'bg-gray-100'
                    }`}
                  >
                    {count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="bg-[#3B82F6] border-3 border-black p-6 shadow-[8px_8px_0px_0px_#000000]">
        <h3 className="font-black uppercase text-white text-lg mb-3">
          Besoin de leads qualifiés ?
        </h3>
        <p className="text-white/90 text-sm mb-4">
          Découvrez comment LeadFactory peut transformer votre acquisition client.
        </p>
        <a
          href="https://calendly.com/contact-leadfactory/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-[#FDE047] text-black border-3 border-black px-4 py-3 font-bold uppercase text-sm tracking-wider shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          Parler à un expert
        </a>
      </div>
    </aside>
  );
};
