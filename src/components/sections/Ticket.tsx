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
      id: "vip",
      title: "VIPチケット",
      price: "¥15,000",
      details: [
        "受付期間：〜9/3 25:59【先着】",
        "◆特典付き◆",
        "　・当日の終演後特典会優先案内",
        "　・当日公演のBlu-ray",
        "※エリア内自由、整理番号順入場",
        "※お一人様1枚まで（譲渡不可）",
        "※顔写真付き身分証による本人確認を実施する場合があります",
      ],
    },
    {
      id: "a_ticket",
      title: "Aチケット",
      price: "¥7,500",
      details: [
        "受付期間：〜9/3 25:59【先着】",
        "◆特典◆",
        "　・当日公演のBlu-ray",
        "※エリア内自由、整理番号順入場",
        "※お一人様2枚まで（譲渡不可）",
      ],
    },
    {
      id: "b_ticket",
      title: "Bチケット",
      price: "¥1,000",
      details: [
        "受付期間：〜9/3 25:59【先着】",
        "※エリア内自由、整理番号順入場",
        "※お一人様4枚まで（譲渡可能）",
      ],
    },
    {
      id: "camera",
      title: "カメラチケット",
      price: "¥12,000",
      details: [
        "受付期間：〜9/3 25:59【先着】",
        "◆特典付き◆",
        "　・当日公演のBlu-ray",
        "※エリア内自由席、整理番号順入場",
        "※お一人様1枚まで（譲渡不可）",
        "※顔写真付き身分証による本人確認を実施する場合があります",
        "・脚立は90cm以内のみ可／三脚などの持ち込みも可能です。周りの方の観覧の妨げになってしまう機器の持ち込み、使用は不可となります。",
        "・フラッシュ撮影禁止。",
        "※指定曲以外の動画の撮影、音声の録音は一切不可。",
        "※全編静止画のみ撮影可能／指定曲以外の動画の撮影･音声の録音は一切不可。",
        "・撮影した素材を他者への売買、許可のない転用等は禁止とさせていただきます。",
        "※SNSに公開希望の際は必ず事前に運営への写真確認の上、許可がある写真のみ掲載をお願いいたします。写真の掲載確認はMyDearDarlin'オフィシャルXのDMまで、ファイル便等でお送りいただけますようよろしくお願いいたします。",
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
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 tracking-wider drop-shadow-lg text-left"
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
              background: "linear-gradient(90deg, #ffd54f 0%, #ffe082 100%)",
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
              className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300"
              style={{ fontFamily: "serif" }}
            >
              イベント情報
            </div>
            <div
              className="text-xl font-bold text-yellow-600"
              style={{ fontFamily: "serif" }}
            >
              MyDearDarlin&apos;『咲真ゆか卒業LIVE』
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-sm font-bold text-yellow-600 mb-1">
                  公演日時
                </div>
                <div
                  className="text-yellow-700"
                  style={{ fontFamily: "serif" }}
                >
                  2025年9月4日（木）
                </div>
                <div
                  className="text-yellow-700"
                  style={{ fontFamily: "serif" }}
                >
                  開場：18:00　開演：19:00
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-yellow-600 mb-1">
                  会場
                </div>
                <div className="text-base text-yellow-700">
                  EX THEATER ROPPONGI（〒106-0031 東京都港区西麻布1-2-9）
                </div>
              </div>
            </div>
          </motion.div>

          {/* チケット料金（アコーディオン） */}
          <motion.div className="w-full" variants={fadeInUp} layout>
            <div
              className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 mb-4 ml-6"
              style={{ fontFamily: "serif" }}
            >
              チケット料金
            </div>
            <div className="flex flex-col space-y-4">
              {tickets.map((ticket) => (
                <motion.div
                  key={ticket.id}
                  layout
                  transition={{
                    layout: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                >
                  <button
                    onClick={() =>
                      ticket.id !== "vip_standing" &&
                      setSelectedId(selectedId === ticket.id ? null : ticket.id)
                    }
                    className={`w-full px-6 py-4 text-left rounded-lg transition-colors duration-300 shadow-sm ${
                      ticket.id === "vip_standing"
                        ? "bg-gray-200 cursor-not-allowed relative overflow-hidden"
                        : "bg-gradient-to-r from-yellow-200 to-amber-200 hover:from-yellow-300 hover:to-amber-300"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div
                        className={`inline-block text-lg font-bold ${
                          ticket.id === "vip_standing"
                            ? "text-gray-600"
                            : "text-yellow-700"
                        }`}
                        style={{ fontFamily: "serif" }}
                      >
                        {ticket.title}
                      </div>
                      <div className="flex items-center">
                        {ticket.id === "vip_standing" ? (
                          <span
                            className="text-gray-600 font-bold text-lg"
                            style={{
                              fontFamily: "'Shippori Mincho B1', serif",
                              fontWeight: 700,
                            }}
                          >
                            SOLD OUT
                          </span>
                        ) : (
                          <>
                            <span
                              className="text-xl font-bold text-yellow-700"
                              style={{
                                fontFamily: "'Shippori Mincho B1', serif",
                                fontWeight: 700,
                              }}
                            >
                              {ticket.price}
                            </span>
                            <motion.div
                              className="ml-4 text-yellow-700"
                              animate={{
                                rotate: selectedId === ticket.id ? 180 : 0,
                              }}
                              transition={{
                                duration: 0.3,
                                ease: "easeOut",
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
                          </>
                        )}
                      </div>
                    </div>
                  </button>
                  <AnimatePresence>
                    {selectedId === ticket.id &&
                      ticket.id !== "vip_standing" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: {
                                duration: 0.3,
                                ease: "easeOut",
                              },
                              opacity: {
                                duration: 0.2,
                              },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: {
                                duration: 0.3,
                                ease: "easeOut",
                              },
                              opacity: {
                                duration: 0.1,
                              },
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4 mt-2 bg-gradient-to-r from-yellow-100 to-amber-100 backdrop-blur-sm rounded-lg">
                            <ul
                              className="list-none space-y-2 text-yellow-700 pl-8"
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
                                  className="inline-block px-12 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white rounded-lg shadow-lg transition-all duration-300 text-base font-bold"
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
                </motion.div>
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
                  className="text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300"
                  style={{ fontFamily: "serif" }}
                >
                  エリアマップ
                </div>
              </div>
              <div className="w-full lg:w-[600px] flex justify-center lg:justify-end">
                <Image
                  src="/yukasakuma-grad0904/ticket/0725_area_map_entrance_order.jpg"
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
            {/* <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full lg:w-40 shrink-0 mb-4 lg:mb-0">
                <div
                  className="text-[15px] xs:text-[16px] sm:text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300"
                  style={{ fontFamily: "serif" }}
                >
                  チケット販売情報
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-yellow-700 space-y-2 sm:space-y-3"
                style={{ fontFamily: "serif" }}
              >
                <div className="space-y-6">
                  <div>
                    <div className="font-bold text-yellow-600 mb-2">
                      VIPチケット
                    </div>
                    <div className="pl-4">
                      受付期間：〜9/3 25:59【先着】
                      <br />
                      ◆特典付き◆
                      <br />
                      　・当日の終演後特典会優先案内
                      <br />
                      　・当日公演のBlu-ray
                      <br />
                      ※エリア内自由、整理番号順入場
                      <br />
                      ※お一人様1枚まで（譲渡不可）
                      <br />
                      ※顔写真付き身分証による本人確認を実施する場合があります
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-yellow-600">Aチケット</div>
                    <div className="pl-4">
                      受付期間：〜9/3 25:59【先着】
                      <br />
                      ◆特典◆
                      <br />
                      　・当日公演のBlu-ray
                      <br />
                      ※エリア内自由、整理番号順入場
                      <br />
                      ※お一人様2枚まで（譲渡不可）
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-yellow-600">Bチケット</div>
                    <div className="pl-4">
                      受付期間：〜9/3 25:59【先着】
                      <br />
                      ◆特典付き◆
                      <br />
                      　・当日の終演後特典会優先案内
                      <br />
                      　・当日公演のBlu-ray
                      <br />
                      ※エリア内自由、整理番号順入場
                      <br />
                      ※お一人様4枚まで（譲渡可能）
                      <br />
                      ※顔写真付き身分証による本人確認を実施する場合があります
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-yellow-600">
                      カメラチケット
                    </div>
                    <div className="pl-4">
                      受付期間：〜9/3 25:59【先着】
                      <br />
                      ◆特典付き◆
                      <br />
                      　・当日の終演後特典会優先案内
                      <br />
                      　・当日公演のBlu-ray
                      <br />
                      ※エリア内自由、整理番号順入場
                      <br />
                      ※お一人様1枚まで（譲渡不可）
                      <br />
                      ※顔写真付き身分証による本人確認を実施する場合があります
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* チケット購入ボタン */}
            <div className="flex justify-center w-full">
              <a
                href="https://eplus.jp/sf/detail/3533830001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 sm:px-8 md:px-16 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white rounded-lg shadow-lg transition-all duration-300 text-[14px] xs:text-[15px] sm:text-base md:text-lg font-bold whitespace-nowrap"
                style={{ fontFamily: "serif" }}
              >
                チケットを購入する
              </a>
            </div>

            {/* 区切り線 */}
            <div className="w-full h-px bg-gradient-to-r from-yellow-100 to-amber-100"></div>

            {/* 後日特典会情報 */}
            {/* <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full lg:w-40 shrink-0 mb-4 lg:mb-0">
                <div
                  className="text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300"
                  style={{ fontFamily: "serif" }}
                >
                  後日特典会情報
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-base text-yellow-700 space-y-4"
                style={{ fontFamily: "serif" }}
              >
                <div>
                  <div className="font-bold text-yellow-600 mb-2">
                    7月27日（日）開催「豊洲PITワンマン開催記念特典会イベント」
                  </div>
                  <div className="pl-4">
                    MyDearDarlin&apos; フルバンドセットワンマンLIVE『ALL IN the
                    LIVE』のチケットをお持ちの皆様を対象とした特典会イベントを実施します。
                  </div>
                </div>
                <div>
                  <div className="font-bold text-yellow-600 mb-2">会場</div>
                  <div className="pl-4">
                    バトゥール東京【BATUR TOKYO】
                    <br />
                    （〒160-0021 東京都新宿区歌舞伎町2-4-10 KDX 東新宿ビル1階）
                    <br />
                    <a
                      href="https://www.andativa-batur.com/tokyo/party/enkai/access.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-600 hover:text-yellow-600 underline"
                    >
                      https://www.andativa-batur.com/tokyo/party/enkai/access.html
                    </a>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-yellow-600 mb-2">詳細情報</div>
                  <div className="pl-4">
                    実施スケジュール／詳細はこちら！
                    <br />
                    <a
                      href="https://ameblo.jp/mydear-darlin/entry-12913173172.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-600 hover:text-yellow-600 underline"
                    >
                      https://ameblo.jp/mydear-darlin/entry-12913173172.html
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            {/* 区切り線 */}
            <div className="w-full h-px bg-gradient-to-r from-yellow-100 to-amber-100"></div>

            {/* 販売スケジュール */}
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full lg:w-40 shrink-0 mb-4 lg:mb-0">
                <div
                  className="text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300"
                  style={{ fontFamily: "serif" }}
                >
                  全体スケジュール
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-yellow-700"
                style={{ fontFamily: "serif" }}
              >
                <ul className="list-none space-y-2">
                  <li>15:30〜　くじ＆グッズなど販売</li>
                  <li>18:00〜　開場</li>
                  <li>19:00〜　開演</li>
                  <li>19:00-21:00　LIVE</li>
                  <li>21:20-22:20　終演後特典会</li>
                  <li>
                    ※LIVEでは新メンバー・美怜寿莉亜がプレデビュー。終演後特典会にも参加いたします。
                  </li>
                  <li>※別会場にて延長特典会を予定しております。</li>
                  <li>※咲真のみ、別会場にて延長特典会を予定しております。</li>
                </ul>
              </div>
            </div>

            {/* 区切り線 */}
            <div className="w-full h-px bg-gradient-to-r from-yellow-100 to-amber-100"></div>

            {/* グッズ販売詳細情報 */}
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full lg:w-40 shrink-0 mb-4 lg:mb-0">
                <div
                  className="text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300"
                  style={{ fontFamily: "serif" }}
                >
                  グッズ販売詳細情報
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-yellow-700"
                style={{ fontFamily: "serif" }}
              >
                <div className="text-xl font-bold">Coming soon</div>
              </div>
            </div>

            {/* チケット購入ボタン */}
            {/* <div className="flex flex-col items-center space-y-4 w-full">
              <div
                className="text-[14px] xs:text-[15px] sm:text-base md:text-lg font-bold text-yellow-600"
                style={{ fontFamily: "'Shippori Mincho B1', serif" }}
              >
                スケジュール／ラインナップなど
              </div>
              <a
                href="https://ameblo.jp/mydear-darlin/entry-12918355685.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 sm:px-8 md:px-16 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white rounded-lg shadow-lg transition-all duration-300 text-[14px] xs:text-[15px] sm:text-base md:text-lg font-bold whitespace-nowrap"
                style={{ fontFamily: "serif" }}
              >
                詳細はこちら！
              </a>
            </div> */}

            {/* 区切り線 */}
            <div className="w-full h-px bg-gradient-to-r from-yellow-100 to-amber-100"></div>

            {/* ご注意事項 */}
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full lg:w-40 shrink-0 mb-4 lg:mb-0">
                <div
                  className="text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300"
                  style={{ fontFamily: "serif" }}
                >
                  ご注意事項
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-yellow-700"
                style={{ fontFamily: "serif" }}
              >
                <ul className="list-none space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    入場順：VIP → A →
                    B（カメラチケットは別案内）※入場はお申し込み整理番号順となります
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    重複予約／転売／交換禁止（同一人物が複数枚のお申し込みをされても有効になるのは1枚のみになりますのでお気をつけください（VIP／カメラチケットのみ））
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    BOT(ボット)などのツールを使用しての不正チケット購入を禁止（発覚した場合は入場をお断りいたします。その際のチケット代金の返金はいたしません）
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    割り込み、場所取り禁止（皆様がご入場順に沿ってご観覧いただけますよう、あとからご入場いただきました方の無理矢理な割り込み行為などは絶対にお辞めください）
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    会場周辺でのアーティストの入り待ち・出待ち行為はお止めください
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    イベント会場内では、係員の指示に従っていただきますようお願い申し上げます
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    会場内への飲食物及び、危険と判断される物の持ち込みは固くお断りいたします
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    出演者及び公演を撮影・録音、録画する行為は禁止とさせていただきます
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    お荷物、貴重品等はご自身で管理をお願いいたします。万が一紛失等が発生した場合でもイベント・会場は一切責任を負いかねますので予めご了承ください
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    上記注意事項が守られない、その他不正行為、迷惑行為が発覚、お客様から報告あった場合はスタッフの判断で注意、退場／以降のLIVEやイベントのご入場を一切お断りする場合がありますので予めご了承ください
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    再入場不可
                  </li>
                </ul>
              </div>
            </div>

            {/* 区切り線 */}
            <div className="w-full h-px bg-gradient-to-r from-yellow-100 to-amber-100"></div>

            {/* お問い合わせ */}
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full lg:w-40 shrink-0 mb-4 lg:mb-0">
                <div
                  className="text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300"
                  style={{ fontFamily: "serif" }}
                >
                  お問い合わせ
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-yellow-700"
                style={{ fontFamily: "serif" }}
              >
                【チケットに関するお問い合わせ】
                <br />
                ウドー音楽事務所　TEL:03-3402-5999（営業時間：月曜・水曜・金曜　12:00〜15:00）
              </div>
            </div>

            {/* 区切り線 */}
            <div className="w-full h-px bg-gradient-to-r from-yellow-100 to-amber-100"></div>

            {/* ご来場者様へのお願い */}
            {/* <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full lg:w-40 shrink-0 mb-4 lg:mb-0">
                <div
                  className="text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300"
                  style={{ fontFamily: "serif", width: "fit-content" }}
                >
                  ご来場者様への
                  <br />
                  お願い
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-yellow-700"
                style={{ fontFamily: "serif" }}
              >
                <ul className="list-none space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    係員の指示に従ってください
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    体調不良時はスタッフへお申し出ください（症状により退場をお願いする場合あり）
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    貴重品・所持品の管理は各自で行ってください（紛失等は自己責任）
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    トラブル・怪我・破損等への主催者の責任は一切負いかねます
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    お客様都合による返金不可
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    規約違反や不正行為が発覚した場合、退場や今後の参加制限措置あり
                  </li>
                </ul>
              </div>
            </div> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Ticket;
