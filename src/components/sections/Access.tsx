import React from "react";

export default function Access() {
  return (
    <section
      className="w-full flex justify-center py-24 bg-transparent"
      id="access"
    >
      <div
        className="w-full max-w-6xl p-12 flex flex-col items-start relative backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,247,250,0.95) 100%)",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <div className="relative inline-block mb-16">
          <h2
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 tracking-wider drop-shadow-lg text-left"
            style={{ letterSpacing: "0.08em", fontFamily: "serif" }}
          >
            Access
          </h2>
          <span
            className="block mt-2 h-1 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg, #4fc3f7 0%, #b0c4de 100%)",
            }}
          ></span>
        </div>

        <div className="w-full space-y-12">
          {/* 会場情報 */}
          <div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 mb-4">
              会場情報
            </div>
            <div className="text-xl font-bold text-blue-800 mb-2">豊洲PIT</div>
            <div className="text-base text-slate-700">
              〒135-0061 東京都江東区豊洲6-1-23
            </div>
          </div>

          {/* 地図 */}
          <div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 mb-4">
              地図
            </div>
            <div className="flex flex-col items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.646964274731!2d139.7494613152587!3d35.69400318019209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0b2c2e2e2d%3A0x7e8e6b2e2e2e2e2e!2z5pel5pys44CB5p2x5Lqs6YO95aSn5a2m!5e0!3m2!1sja!2sjp!4v1680000000000!5m2!1sja!2sjp"
                width="600"
                height="300"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  borderRadius: "8px",
                  width: "100%",
                  minHeight: "400px",
                  boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="豊洲PIT Google Map"
              />
            </div>
          </div>

          {/* アクセス情報 */}
          <div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 mb-4">
              アクセス
            </div>
            <ul className="list-none space-y-4 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <div>
                  <div className="font-bold text-blue-800 mb-1">
                    東京メトロ有楽町線「豊洲駅」
                  </div>
                  <div>7番出口より徒歩3分</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <div>
                  <div className="font-bold text-blue-800 mb-1">
                    ゆりかもめ「豊洲駅」
                  </div>
                  <div>徒歩3分</div>
                </div>
              </li>
            </ul>
          </div>

          {/* 注意事項 */}
          <div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 mb-4">
              ご注意事項
            </div>
            <ul className="list-none space-y-2 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                会場内は禁煙です
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                飲食物の持ち込みは禁止です
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                ロッカーの数に限りがございます。お手荷物は最小限でお願いいたします
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                会場周辺での待機列作りは禁止です
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
