import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-60px)] flex flex-col items-center justify-center">
      {/* メインビジュアル */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full max-w-[1200px] mx-auto">
          <Image
            src="/images/hero/hero.webp"
            alt="MY DEAR DARLIN' 5th ANNIVERSARY LIVE"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            quality={90}
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
      </div>

      {/* タイトルとコンテンツ */}
      <div className="container-custom relative z-10 text-center mt-auto pb-20">
        <h1 className="font-bold">
          <span className="block text-[40px] leading-tight tracking-wider">
            MY DEAR DARLIN'
          </span>
          <span className="block text-[32px] mt-2 tracking-wider">
            5th ANNIVERSARY LIVE
          </span>
        </h1>

        <div className="mt-6 space-y-2">
          <p className="text-[20px] tracking-wider">2024.5.5 (日)</p>
          <p className="text-[16px] tracking-wider">at 新宿BLAZE</p>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-[13px] tracking-[0.2em] mb-2">SCROLL</p>
        <div className="w-[1px] h-12 bg-black mx-auto animate-scroll-down" />
      </div>
    </section>
  );
}
