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
  title:
    "MyDearDarlin’フルバンドセットワンマン LIVE『ALL IN the LIVE』@豊洲PIT",
  description:
    "MyDearDarlin’フルバンドセットワンマン LIVE『ALL IN the LIVE』@豊洲PIT",
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
      <body className="relative min-h-screen bg-transparent font-jp before:content-[''] before:fixed before:inset-0 before:-z-10 before:bg-[url('/images/0725エリアマップ背景.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:bg-fixed">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
