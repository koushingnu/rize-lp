"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      name: "X",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: "https://x.com/MyDear_official",
      color: "hover:text-[#000000]",
    },
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://www.instagram.com/mydeardarlin.official/",
      color: "hover:text-[#E4405F]",
    },
    {
      name: "TikTok",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      url: "https://www.tiktok.com/@mydeardarlin__official",
      color: "hover:text-[#000000]",
    },
  ];

  const navigationLinks = [
    { name: "INTRODUCTION", href: "#introduction" },
    { name: "MEMBERS", href: "#message" },
    { name: "TICKET", href: "#ticket" },
    { name: "ACCESS", href: "#access" },
    // { name: "MOVIE", href: "#movie" },
  ];

  const handleClick = (href: string) => {
    // スムーズスクロールのための遅延を追加
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-gradient-to-r from-blue-100 via-sky-50 to-blue-100 py-12 border-t border-sky-100">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 xl:px-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* 左側のコンテンツ */}
          <div className="md:pl-0 xl:pl-16">
            {/* ロゴ */}
            <button
              onClick={() => handleClick("#hero")}
              className="relative w-[240px] h-[44px] hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/images_new/footer/footer_logo.webp"
                alt="Footer Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </button>
          </div>

          {/* 右側のコンテンツ */}
          <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end xl:pr-16">
            {/* ナビゲーションリンク */}
            <nav className="mb-8 w-full md:w-auto">
              <ul className="flex flex-wrap gap-x-8 gap-y-4 justify-start md:justify-end">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleClick(link.href)}
                      className="text-slate-700 hover:text-slate-900 transition-colors duration-300 text-sm tracking-wider"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* SNSリンク */}
            <div className="flex space-x-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-700 transition-colors duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
