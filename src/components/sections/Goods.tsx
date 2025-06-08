import Image from "next/image";

export default function Goods() {
  return (
    <section className="relative py-20 overflow-hidden" id="goods">
      {/* 格子状の背景 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(#EDD8DB 1px, transparent 1px),
          linear-gradient(90deg, #EDD8DB 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px",
          backgroundColor: "#FFFFFF",
        }}
      />

      <div className="container-custom relative z-10">
        <h2 className="text-center font-bold text-[28px] tracking-wider text-[#666666] mb-12">
          GOODS
        </h2>

        <div className="max-w-[800px] mx-auto">
          <div className="relative w-full">
            <Image
              src="/images/goods/goods.webp"
              alt="グッズ一覧"
              width={800}
              height={600}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
