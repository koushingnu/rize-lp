import Link from "next/link";
import SectionTitle from "../ui/SectionTitle";

export default function Ticket() {
  return (
    <section className="py-20 relative overflow-hidden" id="ticket">
      <div className="container-custom">
        <SectionTitle title="TICKET" variant="ticket" />

        {/* チケット情報 */}
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h3 className="font-bold text-xl">チケット料金</h3>
            <p className="text-lg">前売り：¥5,000（税込）</p>
            <p className="text-lg">当日：¥5,500（税込）</p>
            <p className="text-sm text-gray-600">※ドリンク代別途必要</p>
          </div>

          <div className="text-center space-y-4">
            <h3 className="font-bold text-xl">販売期間</h3>
            <p className="text-lg">
              2024年3月1日(金) 10:00 〜 5月4日(土) 23:59
            </p>
          </div>

          <div className="text-center space-y-4">
            <h3 className="font-bold text-xl">注意事項</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>※未就学児入場不可</li>
              <li>※営利目的の転売禁止</li>
              <li>※撮影・録音機材の持ち込み禁止</li>
              <li>※アルコール類の持ち込み禁止</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
