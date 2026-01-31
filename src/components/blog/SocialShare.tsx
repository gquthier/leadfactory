import { Twitter, Linkedin, Facebook, Link2, Check } from 'lucide-react';
import { useState } from 'react';

interface SocialShareProps {
  url: string;
  title: string;
  excerpt?: string;
}

export const SocialShare = ({ url, title, excerpt }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedExcerpt = encodeURIComponent(excerpt || '');

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white border-3 border-black p-6 shadow-[8px_8px_0px_0px_#FFC4EB]">
      <h3 className="font-black uppercase text-sm tracking-wider mb-4 pb-3 border-b-2 border-black">
        Partager l'article
      </h3>
      <div className="flex flex-wrap gap-3">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-[#1DA1F2] border-3 border-black text-white shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          aria-label="Partager sur Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-[#0A66C2] border-3 border-black text-white shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          aria-label="Partager sur LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-[#1877F2] border-3 border-black text-white shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          aria-label="Partager sur Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <button
          onClick={copyToClipboard}
          className={`flex items-center justify-center w-12 h-12 border-3 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all ${
            copied ? 'bg-[#58BC82] text-white' : 'bg-[#FDE047]'
          }`}
          aria-label="Copier le lien"
        >
          {copied ? <Check className="w-5 h-5" /> : <Link2 className="w-5 h-5" />}
        </button>
      </div>
      {copied && (
        <p className="text-sm text-[#58BC82] font-bold mt-2">Lien copié !</p>
      )}
    </div>
  );
};
