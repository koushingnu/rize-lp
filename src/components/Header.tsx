import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "ABOUT", href: "#about" },
  { name: "MEMBER", href: "#member" },
  { name: "GOODS", href: "#goods" },
  { name: "MUSIC", href: "#music" },
  { name: "ATTENTION", href: "#attention" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[70px] bg-white z-50">
      <div className="max-w-[1400px] mx-auto px-6 h-full">
        <nav className="flex items-center justify-between h-full">
          <Link href="/" className="relative w-[140px] h-[26px]">
            <Image
              src="/images/header/header_logo.webp"
              alt="MY DEAR DARLIN'"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center">
            {/* 通常のナビゲーション */}
            <ul className="flex items-center">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="px-4 text-[13px] tracking-[0.1em] font-medium text-[#B87C8B] hover:text-[#D4A1AD] transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* チケットボタン */}
            <Link
              href="#ticket"
              className="ml-2 px-8 py-[14px] text-[13px] tracking-[0.1em] font-medium text-white bg-[#B87C8B] hover:opacity-90 transition-all duration-300"
            >
              TICKET
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
