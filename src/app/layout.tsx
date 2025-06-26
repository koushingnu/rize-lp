import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Noto_Sans_JP, Shippori_Mincho_B1 } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const shipporiMinchoB1 = Shippori_Mincho_B1({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shippori-mincho-b1",
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
  const basePath =
    process.env.NODE_ENV === "production" ? "/toyosupit-fullbandsetlive" : "";

  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMinchoB1.variable}`}
    >
      <body className="relative min-h-screen bg-transparent font-jp">
        <div className="fixed inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: `url('${basePath}/images/0725エリアマップ背景.jpg')`,
            }}
          />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
