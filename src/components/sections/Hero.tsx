import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F5C5C5] pt-32 pb-0">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative aspect-[1200/1000]">
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
      </div>
    </section>
  );
}
