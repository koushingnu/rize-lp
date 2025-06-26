"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Ticket = () => {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const tickets = [
    {
      id: "vip_seating",
      title: "VIPシーティング",
      price: "¥15,000",
      details: [
        "・VIPシーティングエリア内自由席、整理番号",
        "・ドリンク代別途",
        "・特典付き",
        "　・当日の終演後特典会優先案内",
        "　・当日公演のBlu-ray",
        "　・後日開催の「豊洲PITワンマン開催記念特典会イベント」参加権",
        "・お一人様1枚まで",
        "・VIP：顔写真付き身分証による本人確認を実施する場合があります",
      ],
    },
    {
      id: "vip_standing",
      title: "VIPスタンディング",
      price: "¥15,000",
      details: [
        "・VIPエリア内自由、整理番号",
        "・ドリンク代別途",
        "・特典付き（内容はVIPシーティングと同様）",
        "・お一人様1枚まで",
        "・VIP：顔写真付き身分証による本人確認を実施する場合があります",
      ],
    },
    {
      id: "a_plus_seating",
      title: "A+チケット シーティング",
      price: "¥7,500",
      details: [
        "・Aチケットエリア内自由席、整理番号",
        "・ドリンク代別途",
        "・特典付き",
        "　・当日公演のBlu-ray",
        "　・後日開催の特典会参加権",
        "・お一人様2枚まで",
      ],
    },
    {
      id: "a_plus_standing",
      title: "A+チケット スタンディング",
      price: "¥7,500",
      details: [
        "・Aチケットエリア内自由、整理番号",
        "・ドリンク代別途",
        "・特典付き（内容はA+シーティングと同様）",
        "・お一人様2枚まで",
      ],
    },
    {
      id: "a_seating",
      title: "Aチケット シーティング",
      price: "¥3,000",
      details: [
        "・Aチケットエリア内自由席、整理番号",
        "・ドリンク代別途",
        "・特典付き（特典会参加権）",
        "・お一人様4枚まで",
      ],
    },
    {
      id: "a_standing",
      title: "Aチケット スタンディング",
      price: "¥3,000",
      details: [
        "・Aチケットエリア内自由、整理番号",
        "・ドリンク代別途",
        "・特典付き（内容はAチケットシーティングと同様）",
        "・お一人様4枚まで",
      ],
    },
    {
      id: "b_ticket",
      title: "Bチケット",
      price: "¥500",
      details: [
        "・Bチケットエリア内自由、整理番号（スタンディング・シーティングの事前選択不可）",
        "・ドリンク代別途",
        "・特典付き（特典会参加権）",
        "・お一人様4枚まで",
      ],
    },
    {
      id: "camera",
      title: "カメラチケット",
      price: "¥15,000",
      details: [
        "・カメラチケットエリア内自由、整理番号",
        "・ドリンク代別途",
        "・特典付き",
        "　・当日公演のBlu-ray",
        "　・後日開催の特典会参加権",
        "・お一人様1枚まで",
        "・カメラチケット：顔写真付き身分証による本人確認を実施する場合があります",
        "・撮影チケット：脚立90cm以内／三脚OK／フラッシュ禁止／全編静止画のみ",
        "・撮影素材の転売・無断使用禁止",
        "・SNS投稿は運営許可が必要（MyDearDarlin'公式XのDMへファイル送付）",
      ],
    },
  ];

  return (
    <motion.section
      className="w-full flex justify-center py-24 bg-transparent"
      id="ticket"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div
        className="w-full max-w-6xl p-6 sm:p-12 flex flex-col items-start relative backdrop-blur-sm mx-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,247,250,0.95) 100%)",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
        variants={fadeInUp}
      >
        <div className="relative inline-block mb-16">
          <motion.h2
            variants={titleVariants}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 tracking-wider drop-shadow-lg text-left"
            style={{
              letterSpacing: "0.05em",
              fontFamily: "'Shippori Mincho B1', serif",
            }}
          >
            TICKET
          </motion.h2>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="block mt-2 h-1 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg, #4fc3f7 0%, #b0c4de 100%)",
            }}
          ></motion.span>
        </div>

        <motion.div className="w-full space-y-12" variants={fadeInUp}>
          {/* イベント基本情報 */}
          <motion.div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
            variants={fadeInUp}
          >
            <div
              className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300"
              style={{ fontFamily: "serif" }}
            >
              イベント情報
            </div>
            <div
              className="text-xl font-bold text-blue-800"
              style={{ fontFamily: "serif" }}
            >
              MyDearDarlin&apos; フルバンドセットワンマンLIVE『ALL IN the LIVE』
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-sm font-bold text-blue-600 mb-1">
                  公演日時
                </div>
                <div
                  className="text-base text-slate-700"
                  style={{ fontFamily: "serif" }}
                >
                  2025年7月25日（金）
                </div>
                <div
                  className="text-base text-slate-700"
                  style={{ fontFamily: "serif" }}
                >
                  開場：17:30　開演：18:30
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-blue-600 mb-1">会場</div>
                <div className="text-base text-slate-700">豊洲PIT</div>
              </div>
            </div>
          </motion.div>

          {/* チケット料金（アコーディオン） */}
          <motion.div className="w-full" variants={fadeInUp}>
            <div
              className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 mb-4 ml-6"
              style={{ fontFamily: "serif" }}
            >
              チケット料金
            </div>
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="mb-4">
                  <button
                    onClick={() =>
                      setSelectedId(selectedId === ticket.id ? null : ticket.id)
                    }
                    className="w-full px-6 py-4 text-left rounded-lg bg-gradient-to-r from-blue-200 to-sky-200 hover:from-blue-300 hover:to-sky-300 transition-colors duration-300 shadow-sm"
                  >
                    <div className="flex justify-between items-center">
                      <div
                        className="inline-block text-blue-700 text-lg font-bold px-4 py-2 rounded"
                        style={{ fontFamily: "serif" }}
                      >
                        {ticket.title}
                      </div>
                      <div className="flex items-center">
                        <span
                          className="text-xl font-bold text-blue-700"
                          style={{
                            fontFamily: "'Shippori Mincho B1', serif",
                            fontWeight: 700,
                          }}
                        >
                          {ticket.price}
                        </span>
                        <motion.div
                          className="ml-4 text-blue-700"
                          animate={{
                            rotate: selectedId === ticket.id ? 180 : 0,
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </button>
                  <AnimatePresence>
                    {selectedId === ticket.id && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-gradient-to-r from-blue-100 to-sky-100 backdrop-blur-sm">
                          <ul
                            className="list-none space-y-2 text-[15px] text-blue-900 pl-8"
                            style={{ fontFamily: "serif" }}
                          >
                            {ticket.details.map((detail, index) => (
                              <li key={index} className="flex items-start">
                                {detail}
                              </li>
                            ))}
                            <li className="mt-6 flex justify-center">
                              <a
                                href="https://eplus.jp/sf/detail/3533830001?P6=001&P1=0402&P59=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-12 py-3 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white rounded-lg shadow-lg transition-all duration-300 text-base font-bold"
                                style={{ fontFamily: "serif" }}
                              >
                                チケットを購入
                              </a>
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* エリアマップ */}
          <motion.div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
            variants={fadeInUp}
          >
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full lg:w-40 shrink-0 mb-4 lg:mb-0">
                <div
                  className="text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300"
                  style={{ fontFamily: "serif" }}
                >
                  エリアマップ
                </div>
              </div>
              <div className="w-full lg:w-[600px] flex justify-center lg:justify-end">
                <Image
                  src="/images/0725MDD豊洲LP/0725エリアマップ-入場順.jpg"
                  alt="エリアマップ"
                  width={600}
                  height={1500}
                  className="w-full max-w-[600px] rounded-lg shadow-lg"
                  style={{
                    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* チケット販売情報からご来場者様へのお願いまでをまとめたカード */}
          <motion.div
            className="space-y-12 p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
            variants={fadeInUp}
          >
            {/* チケット販売情報 */}
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full lg:w-40 shrink-0 mb-4 lg:mb-0">
                <div
                  className="text-[16px] sm:text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300"
                  style={{ fontFamily: "serif" }}
                >
                  チケット販売情報
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-[14px] sm:text-base text-slate-700"
                style={{ fontFamily: "serif" }}
              >
                <div className="space-y-6">
                  <div>
                    <div className="font-bold text-blue-800 mb-2">
                      <span className="line-through">VIP先行予約</span>
                    </div>
                    <div className="pl-4">
                      <span className="line-through">
                        抽選／お一人様1枚まで／WEB受付
                        <br />
                        受付期間：6月11日(水)21:00〜6月19日(木)23:59
                        <br />
                        当落発表：6月24日(火)15:00
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-800 mb-2">一般販売</div>
                    <div className="space-y-4 pl-4">
                      <div>
                        <div className="font-bold text-blue-800">
                          VIPチケット シーティング【一般販売】
                        </div>
                        <div className="pl-4 text-[14px] sm:text-base">
                          先着／お一人様1枚まで／WEB受付
                          <br />
                          6月24日(火)20:30〜7月24日(木)23:59
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-blue-800">
                          カメラチケット
                        </div>
                        <div className="pl-4">
                          先着／お一人様1枚まで／WEB受付
                          <br />
                          6月10日(火)20:00〜7月24日23:59
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-blue-800">
                          A+チケット スタンディング
                        </div>
                        <div className="pl-4">
                          先着／お一人様2枚まで／WEB受付
                          <br />
                          6月24日(火)21:00〜7月24日23:59
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-blue-800">
                          A+チケット シーティング
                        </div>
                        <div className="pl-4">
                          先着／お一人様2枚まで／WEB受付
                          <br />
                          6月24日(火)21:30〜7月24日23:59
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-blue-800">
                          Aチケット スタンディング
                        </div>
                        <div className="pl-4">
                          先着／お一人様4枚まで／WEB受付
                          <br />
                          6月25日(水)21:30〜7月24日23:59
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-blue-800">
                          Aチケット シーティング
                        </div>
                        <div className="pl-4">
                          先着／お一人様4枚まで／WEB受付
                          <br />
                          6月25日(水)22:00〜7月24日23:59
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-blue-800">Bチケット</div>
                        <div className="pl-4">
                          先着／お一人様4枚まで／WEB受付
                          <br />
                          6月30日(月)21:00〜7月24日23:59
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* チケット購入ボタン */}
            <div className="flex justify-center w-full">
              <a
                href="https://eplus.jp/sf/detail/3533830001?P6=001&P1=0402&P59=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 sm:px-16 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white rounded-lg shadow-lg transition-all duration-300 text-[15px] sm:text-lg font-bold whitespace-nowrap"
                style={{ fontFamily: "serif" }}
              >
                チケットを購入する
              </a>
            </div>

            {/* 区切り線 */}
            <div className="w-full h-px bg-gradient-to-r from-blue-100 to-sky-100"></div>

            {/* 注意事項 */}
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full lg:w-40 shrink-0 mb-4 lg:mb-0">
                <div
                  className="text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300"
                  style={{ fontFamily: "serif" }}
                >
                  ご注意事項
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-base text-slate-700"
                style={{ fontFamily: "serif" }}
              >
                <ul className="list-none space-y-2">
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
            </div>

            {/* 区切り線 */}
            <div className="w-full h-px bg-gradient-to-r from-blue-100 to-sky-100"></div>

            {/* お問い合わせ */}
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full lg:w-40 shrink-0 mb-4 lg:mb-0">
                <div
                  className="text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300"
                  style={{ fontFamily: "serif" }}
                >
                  お問い合わせ
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-base text-slate-700"
                style={{ fontFamily: "serif" }}
              >
                【チケットに関するお問い合わせ】
                <br />
                ウドー音楽事務所　TEL:03-3402-5999（営業時間：月曜・水曜・金曜　12:00〜15:00）
              </div>
            </div>

            {/* 区切り線 */}
            <div className="w-full h-px bg-gradient-to-r from-blue-100 to-sky-100"></div>

            {/* ご来場者様へのお願い */}
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full lg:w-40 shrink-0 mb-4 lg:mb-0">
                <div
                  className="text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300"
                  style={{ fontFamily: "serif", width: "fit-content" }}
                >
                  ご来場者様への
                  <br />
                  お願い
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-base text-slate-700"
                style={{ fontFamily: "serif" }}
              >
                <ul className="list-none space-y-2">
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
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Ticket;
