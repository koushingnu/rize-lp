import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

const members = [
  { id: "01", name: "桜井 愛", role: "Vocal" },
  { id: "02", name: "藤原 結衣", role: "Dance" },
  { id: "03", name: "中村 美咲", role: "Vocal" },
  { id: "04", name: "佐藤 花", role: "Dance" },
  { id: "05", name: "山田 莉子", role: "Vocal" },
  { id: "06", name: "高橋 優", role: "Dance" },
];

export default function About() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#FFFBF2]" id="about">
      <div className="container-custom">
        <SectionTitle title="ABOUT" variant="about" />
        <div className="text-center text-gray-700 mb-20">
          <p className="text-[#666666] text-sm mb-1">ライブ概要</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 text-center leading-relaxed">
          <h3 className="text-xl font-bold">
            MyDearDarlin' 5th Anniversary LIVE
          </h3>

          <p className="text-[15px]">
            MyDearDarlin'は、2025年で5周年を迎えます。
          </p>

          <p className="text-[15px]">
            マイディアの"LIVE"は応援していただく皆様と共に作り上げてきて、この5年間ステージに立ち続けることが出来ました。
          </p>

          <p className="text-[15px] font-bold">
            《この先も一緒に、もっとたくさんの夢を叶えたい。》
          </p>

          <p className="text-[15px]">
            MyDearDarlin'を応援してくださっているファンの皆様に5年分の感謝の気持ちを込めて！
          </p>

          <p className="text-[15px]">
            これからもMyDearDarlin'を応援したいと、心から思えるような"LIVE"を全力で届けます。
          </p>
        </div>

        {/* メンバー紹介 */}
        <div className="mt-32" id="member">
          <SectionTitle title="MEMBER" variant="member" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {members.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative aspect-square mb-4">
                  <Image
                    src={`/images/member/${member.id}.webp`}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    quality={85}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
