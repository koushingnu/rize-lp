"use client";

import Image from "next/image";
import { useState } from "react";

const navigation = [
  // { name: "HERO", href: "#hero" },
  { name: "INTRODUCTION", href: "#introduction" },
  { name: "MEMBERS", href: "#message" },
  { name: "TICKET", href: "#ticket" },
  { name: "ACCESS", href: "#access" },
  // { name: "ABOUT", href: "#about" },
  // { name: "MOVIE", href: "#movie" }, // ムービーはまだない
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href: string) => {
    setIsOpen(false);
    // スムーズスクロールのための遅延を追加
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="fixed top-3 right-5 z-50 flex items-center justify-end">
      {/* ロゴ（メニュー開閉と連動） */}
      <div
        className={`absolute right-[72px] z-50 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible -translate-x-4"
            : "opacity-0 invisible translate-x-4"
        }`}
      >
        <button
          onClick={() => handleClick("#hero")}
          className="relative w-[220px] h-14 block bg-white/50 backdrop-blur-sm rounded-full px-4"
        >
          <Image
            src="/yukasakuma-grad0904/footer/footer_logo.webp"
            alt="Footer Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </button>
      </div>

      {/* ハンバーガーメニュー */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 w-14 h-14 flex flex-col justify-center items-center gap-[10px] rounded-full bg-white/50 backdrop-blur-sm shadow-lg hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="メニュー"
      >
        <span
          className={`w-8 h-[3px] bg-[#FFD54F] rounded-full transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-[13px]" : ""
          }`}
        />
        <span
          className={`w-8 h-[3px] bg-[#FFD54F] rounded-full transition-all duration-300 ${
            isOpen ? "opacity-0 scale-0" : "scale-100"
          }`}
        />
        <span
          className={`w-8 h-[3px] bg-[#FFD54F] rounded-full transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[13px]" : ""
          }`}
        />
      </button>

      {/* アコーディオンメニュー */}
      <div
        className={`fixed top-0 right-0 w-[360px] h-screen bg-white backdrop-blur-sm pt-24 px-16 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-4"
        }`}
      >
        <ul className="space-y-8 text-right min-w-[280px]">
          {navigation.map((item) => (
            <li
              key={item.name}
              className="transform transition-all duration-200 hover:translate-x-[-8px]"
            >
              <button
                onClick={() => handleClick(item.href)}
                style={{ fontFamily: "var(--font-shippori-mincho)" }}
                className="block text-2xl font-[700] tracking-widest text-[#FFD54F] hover:text-[#FFC107] transition-all duration-300"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
