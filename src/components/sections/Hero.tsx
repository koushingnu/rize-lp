import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-screen min-h-screen flex items-center justify-center overflow-x-hidden p-0 m-0 bg-transparent">
      <div className="w-screen flex justify-center items-center">
        <Image
          src="/images/hero/0725MDD_fullband_flyer_250604.jpg"
          alt="MY DEAR DARLIN' 5th ANNIVERSARY LIVE"
          width={1920}
          height={1080}
          priority
          className="w-screen h-auto"
        />
      </div>
      {/* 筆文字タイトル画像は無し */}
    </section>
  );
}
