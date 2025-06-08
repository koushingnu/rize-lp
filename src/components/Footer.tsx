import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#B87C8B] py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* ロゴ */}
          <div className="relative w-[120px] h-[22px] mb-4">
            <Image
              src="/images/footer/footer_logo.webp"
              alt="MY DEAR DARLIN'"
              fill
              className="object-contain brightness-0 invert opacity-90"
            />
          </div>

          {/* コピーライト */}
          <p className="text-white text-[11px] tracking-[0.05em] opacity-70 font-light">
            Copyright © grabss Inc. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
