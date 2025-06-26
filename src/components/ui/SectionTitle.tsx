import Image from "next/image";

interface SectionTitleProps {
  title: string;
  variant: "about" | "member" | "ticket" | "goods";
}

export default function SectionTitle({ title, variant }: SectionTitleProps) {
  const ribbonSrc = {
    about: "./images/about/about.webp",
    member: "./images/member/members.webp",
    ticket: "./images/tike/ticket.webp",
    goods: "./images/goods/goods.webp",
  }[variant];

  return (
    <div className="relative text-center mb-12">
      {/* リボン装飾 */}
      <div className="relative w-[280px] h-[100px] mx-auto">
        <Image
          src={ribbonSrc}
          alt={`${title} decoration`}
          fill
          sizes="280px"
          className="object-contain"
        />
      </div>
      {/* タイトル */}
      <h2 className="font-bold text-[28px] tracking-wider text-[#666666] -mt-8">
        {title}
      </h2>
    </div>
  );
}
