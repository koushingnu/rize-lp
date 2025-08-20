import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const shipporiMincho = Shippori_Mincho_B1({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-shippori-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  title: "咲真ゆか卒業ライブ@EX THEATER ROPPONGI",
  description: "9/4開催 MyDearDarlin'咲真ゆか卒業ライブ@EX THEATER ROPPONGI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable}`}
    >
      <body
        className={`${notoSansJP.variable} font-sans relative before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[url('/images_new/ticket/0725_area_map_bg.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:bg-fixed`}
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
