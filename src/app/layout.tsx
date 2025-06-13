import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MY DEAR DARLIN' 5th ANNIVERSARY LIVE",
  description: "MY DEAR DARLIN' 5周年記念ライブ特設サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="relative min-h-screen text-blue-900 bg-transparent font-jp before:content-[''] before:fixed before:inset-0 before:-z-10 before:bg-[url('/images/0725エリアマップ背景.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:bg-fixed">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
