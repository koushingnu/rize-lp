import Image from "next/image";

const members = [
  "01東條ゆりあ_2505.jpg",
  "02咲真ゆか_2505.jpg",
  "03是枝優美_2505.jpg",
  "04夢実あすか_2505.jpg",
  "05濱田菜々_2505.jpg",
  "06広山楓_2505.jpg",
];

function extractName(filename: string) {
  // 01東條ゆりあ_2505.jpg → 東條ゆりあ
  const match = filename.match(/^\d+(.+?)_\d+\.jpg$/);
  return match ? match[1] : filename;
}

export default function Message() {
  return (
    <section
      className="w-full flex flex-col items-center py-24 bg-transparent"
      id="message"
    >
      {/* タイトル */}
      <div className="mb-16 w-full max-w-6xl px-4">
        <div className="relative inline-block">
          <h2
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 tracking-wider drop-shadow-lg text-left"
            style={{ letterSpacing: "0.08em", fontFamily: "serif" }}
          >
            Message
          </h2>
          <span
            className="block mt-2 h-1 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg, #4fc3f7 0%, #b0c4de 100%)",
            }}
          ></span>
        </div>
      </div>
      {/* メンバーグリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl w-full px-4">
        {members.map((filename) => (
          <div key={filename} className="flex flex-col items-center">
            {/* 画像＋シルバー縁＋下に青系シャドウ（角丸なし） */}
            <div
              className="relative w-full aspect-[3/4] overflow-hidden mb-6"
              style={{
                boxShadow:
                  "0 8px 0 0 #b0c4de, 0 16px 32px 0 rgba(79,195,247,0.15)",
                border: "2px solid #b0c4de",
              }}
            >
              <Image
                src={`/images/0725MDD豊洲LP/A写/個人/${filename}`}
                alt={extractName(filename)}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                style={{ borderRadius: 0 }}
              />
            </div>
            {/* 名前 */}
            <div
              className="text-center font-bold text-slate-800 text-lg tracking-wide mb-4"
              style={{ fontFamily: "serif" }}
            >
              {extractName(filename)}
            </div>
            {/* ボタン（角丸なし、直線的） */}
            <button
              className="px-8 py-2 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-300 text-white font-semibold text-base tracking-wide shadow-md hover:from-blue-700 hover:to-sky-500 transition-all duration-300 border-none"
              style={{ borderRadius: 0 }}
            >
              メッセージを読む
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
