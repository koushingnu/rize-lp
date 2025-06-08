"use client";

import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Ticket() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          {/* セクションタイトル */}
          <motion.h2
            variants={fadeInUpVariants}
            className="mb-12 text-center text-3xl font-bold tracking-wider md:text-4xl"
          >
            TICKET
          </motion.h2>

          {/* チケット情報 */}
          <motion.div
            variants={fadeInUpVariants}
            className="mb-12 w-full max-w-2xl rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm md:p-12"
          >
            <h3 className="mb-8 text-2xl font-bold md:text-3xl">
              チケット料金
            </h3>
            <dl className="mb-8 space-y-4 text-lg md:text-xl">
              <div>
                <dt className="font-medium text-gray-400">前売り</dt>
                <dd className="mt-1">¥5,500 (税込・ドリンク代別)</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-400">当日</dt>
                <dd className="mt-1">¥6,000 (税込・ドリンク代別)</dd>
              </div>
            </dl>

            <div className="space-y-2 text-sm text-gray-400">
              <p>※ 1ドリンク代 ¥600が別途必要です</p>
              <p>※ 整理番号付き</p>
              <p>※ オールスタンディング</p>
            </div>
          </motion.div>

          {/* 予約ボタン */}
          <motion.div variants={fadeInUpVariants} className="text-center">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-0.5 font-bold transition-all duration-300 hover:scale-105"
            >
              <span className="relative rounded-full bg-black px-8 py-3 transition-all duration-300 group-hover:bg-opacity-0 md:px-12 md:py-4 md:text-lg">
                チケット予約はこちら
              </span>
            </a>
            <p className="mt-4 text-sm text-gray-400">
              ※ 予約開始：2024年4月1日 12:00〜
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* 装飾的な背景要素 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rotate-45 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] -rotate-45 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl" />
      </div>
    </section>
  );
}
