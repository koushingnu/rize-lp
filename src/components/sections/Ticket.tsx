import React from "react";
import Image from "next/image";

export default function Ticket() {
  return (
    <section
      className="w-full flex justify-center py-24 bg-transparent"
      id="ticket"
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
            TICKET
          </h2>
          <span
            className="block mt-2 h-1 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg, #4fc3f7 0%, #b0c4de 100%)",
            }}
          ></span>
        </div>

        <div className="w-full space-y-12">
          {/* エリアマップ */}
          <div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 mb-4">
              エリアマップ
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/0725MDD豊洲LP/0725エリアマップ-入場順.jpg"
                alt="エリアマップ"
                width={800}
                height={600}
                className="w-full max-w-3xl rounded-lg shadow-lg"
                style={{
                  boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
                }}
              />
            </div>
          </div>

          {/* イベント基本情報 */}
          <div
            className="space-y-4 p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300">
              イベント情報
            </div>
            <div className="text-xl font-bold text-blue-800">
              MyDearDarlin'フルバンドセットワンマンLIVE『ALL IN the LIVE』
            </div>
            <div className="text-sm text-slate-600 mb-4">
              読み：マイディアダーリン フルバンドセットワンマン ライブ オール
              イン ザ ライブ
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-sm font-bold text-blue-600 mb-1">
                  公演日時
                </div>
                <div className="text-base text-slate-700">
                  2025年7月25日（金）
                </div>
                <div className="text-base text-slate-700">
                  開場：17:30　開演：18:30
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-blue-600 mb-1">会場</div>
                <div className="text-base text-slate-700">豊洲PIT</div>
              </div>
            </div>
          </div>

          {/* チケット料金 */}
          <div className="space-y-6">
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300">
              チケット料金
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* VIPチケット */}
              <div
                className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{ background: "rgba(255,255,255,0.5)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-sky-400 text-white text-sm font-bold px-4 py-2 rounded">
                    VIPシーティング
                  </div>
                  <span className="text-xl font-bold text-blue-800">
                    ¥15,000
                  </span>
                </div>
                <ul className="list-none space-y-2 text-[15px] text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    VIPシーティングエリア内自由席、整理番号
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    ドリンク代別途
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    特典付き（当日の終演後特典会優先案内・当日公演のBlu-ray・後日開催の「豊洲PITワンマン開催記念特典会イベント」参加権）
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    お一人様1枚まで
                  </li>
                </ul>
              </div>

              {/* VIPスタンディング */}
              <div
                className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{ background: "rgba(255,255,255,0.5)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-sky-400 text-white text-sm font-bold px-4 py-2 rounded">
                    VIPスタンディング
                  </div>
                  <span className="text-xl font-bold text-blue-800">
                    ¥15,000
                  </span>
                </div>
                <ul className="list-none space-y-2 text-[15px] text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    VIPエリア内自由、整理番号
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    ドリンク代別途
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    特典付き（内容はVIPシーティングと同様）
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    お一人様1枚まで
                  </li>
                </ul>
              </div>

              {/* A+チケット シーティング */}
              <div
                className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{ background: "rgba(255,255,255,0.5)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-sky-300 text-white text-sm font-bold px-4 py-2 rounded">
                    A+チケット シーティング
                  </div>
                  <span className="text-xl font-bold text-blue-800">
                    ¥7,500
                  </span>
                </div>
                <ul className="list-none space-y-2 text-[15px] text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Aチケットエリア内自由席、整理番号
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    ドリンク代別途
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    特典付き（当日公演のBlu-ray・後日開催の特典会参加権）
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    お一人様2枚まで
                  </li>
                </ul>
              </div>

              {/* A+チケット スタンディング */}
              <div
                className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{ background: "rgba(255,255,255,0.5)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-sky-300 text-white text-sm font-bold px-4 py-2 rounded">
                    A+チケット スタンディング
                  </div>
                  <span className="text-xl font-bold text-blue-800">
                    ¥7,500
                  </span>
                </div>
                <ul className="list-none space-y-2 text-[15px] text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Aチケットエリア内自由、整理番号
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    ドリンク代別途
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    特典付き（内容はA+シーティングと同様）
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    お一人様2枚まで
                  </li>
                </ul>
              </div>

              {/* Aチケット シーティング */}
              <div
                className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{ background: "rgba(255,255,255,0.5)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block bg-gradient-to-r from-blue-400 to-sky-200 text-white text-sm font-bold px-4 py-2 rounded">
                    Aチケット シーティング
                  </div>
                  <span className="text-xl font-bold text-blue-800">
                    ¥3,000
                  </span>
                </div>
                <ul className="list-none space-y-2 text-[15px] text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Aチケットエリア内自由席、整理番号
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    ドリンク代別途
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    特典付き（特典会参加権）
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    お一人様4枚まで
                  </li>
                </ul>
              </div>

              {/* Aチケット スタンディング */}
              <div
                className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{ background: "rgba(255,255,255,0.5)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block bg-gradient-to-r from-blue-400 to-sky-200 text-white text-sm font-bold px-4 py-2 rounded">
                    Aチケット スタンディング
                  </div>
                  <span className="text-xl font-bold text-blue-800">
                    ¥3,000
                  </span>
                </div>
                <ul className="list-none space-y-2 text-[15px] text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Aチケットエリア内自由席、整理番号
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    ドリンク代別途
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    特典付き（内容はAチケットシーティングと同様）
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    お一人様4枚まで
                  </li>
                </ul>
              </div>

              {/* Bチケット */}
              <div
                className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{ background: "rgba(255,255,255,0.5)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block bg-gradient-to-r from-blue-300 to-sky-100 text-white text-sm font-bold px-4 py-2 rounded">
                    Bチケット
                  </div>
                  <span className="text-xl font-bold text-blue-800">¥500</span>
                </div>
                <ul className="list-none space-y-2 text-[15px] text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Bチケットエリア内自由、整理番号（スタンディング・シーティングの事前選択不可）
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    ドリンク代別途
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    特典付き（特典会参加権）
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    お一人様4枚まで
                  </li>
                </ul>
              </div>

              {/* カメラチケット */}
              <div
                className="p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{ background: "rgba(255,255,255,0.5)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-sky-400 text-white text-sm font-bold px-4 py-2 rounded">
                    カメラチケット
                  </div>
                  <span className="text-xl font-bold text-blue-800">
                    ¥15,000
                  </span>
                </div>
                <ul className="list-none space-y-2 text-[15px] text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    カメラチケットエリア内自由、整理番号
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    ドリンク代別途
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    特典付き（当日公演のBlu-ray、特典会参加権）
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    お一人様1枚まで
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* チケット販売情報 */}
          <div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 mb-4">
              チケット販売情報
            </div>
            <div className="space-y-6">
              <div>
                <div className="font-bold text-blue-800 mb-2">VIP先行予約</div>
                <div className="text-[15px] text-slate-700">
                  抽選／お一人様1枚まで／WEB受付
                  <br />
                  受付期間：6月11日(水)21:00〜6月19日(木)23:59
                  <br />
                  当落発表：6月24日(火)15:00
                </div>
              </div>
              <div>
                <div className="font-bold text-blue-800 mb-2">一般販売</div>
                <div className="space-y-4">
                  <div>
                    <div className="font-bold text-blue-800">
                      カメラチケット
                    </div>
                    <div className="text-[15px] text-slate-700">
                      先着／お一人様1枚まで／WEB受付
                      <br />
                      6月10日(火)20:00〜7月24日23:59
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-800">
                      A+チケット スタンディング
                    </div>
                    <div className="text-[15px] text-slate-700">
                      先着／お一人様2枚まで／WEB受付
                      <br />
                      6月24日(火)21:00〜7月24日23:59
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-800">
                      A+チケット シーティング
                    </div>
                    <div className="text-[15px] text-slate-700">
                      先着／お一人様2枚まで／WEB受付
                      <br />
                      6月24日(火)21:30〜7月24日23:59
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-800">
                      Aチケット スタンディング
                    </div>
                    <div className="text-[15px] text-slate-700">
                      先着／お一人様4枚まで／WEB受付
                      <br />
                      6月25日(水)21:30〜7月24日23:59
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-800">
                      Aチケット シーティング
                    </div>
                    <div className="text-[15px] text-slate-700">
                      先着／お一人様4枚まで／WEB受付
                      <br />
                      6月25日(水)22:00〜7月24日23:59
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-800">Bチケット</div>
                    <div className="text-[15px] text-slate-700">
                      先着／お一人様4枚まで／WEB受付
                      <br />
                      6月30日(月)21:00〜7月24日23:59
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* お問い合わせ */}
          <div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 mb-4">
              お問い合わせ
            </div>
            <div className="text-[15px] text-slate-700">
              【チケットに関するお問い合わせ】
              <br />
              ウドー音楽事務所　TEL:03-3402-5999（営業時間：月曜・水曜・金曜　12:00〜15:00）
            </div>
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
                撮影チケット：脚立90cm以内／三脚OK／フラッシュ禁止／全編静止画のみ
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                撮影素材の転売・無断使用禁止
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                SNS投稿は運営許可が必要（MyDearDarlin'公式XのDMへファイル送付）
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                入場順：VIP → A+ → A → B（カメラチケットは別案内）
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                重複予約／転売／交換禁止
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                VIP・カメラチケット：顔写真付き身分証による本人確認あり
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                割り込み／場所取り禁止
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                BOT購入禁止（発覚時は入場不可）
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                モッシュ／リフト／ダイブ禁止（注意後改善なければ退場）
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                飲食物・危険物持込禁止
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                無許可の撮影・録音・録画禁止
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                入待ち・出待ち禁止
              </li>
            </ul>
          </div>

          {/* ご来場者様へのお願い */}
          <div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 mb-4">
              ご来場者様へのお願い
            </div>
            <ul className="list-none space-y-2 text-[15px] text-slate-700">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                係員の指示に従ってください
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                体調不良時はスタッフへお申し出ください（症状により退場をお願いする場合あり）
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                貴重品・所持品の管理は各自で行ってください（紛失等は自己責任）
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                トラブル・怪我・破損等への主催者の責任は一切負いかねます
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                お客様都合による返金不可
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                規約違反や不正行為が発覚した場合、退場や今後の参加制限措置あり
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
