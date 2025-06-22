"use client";

import React from "react";
import { motion } from "framer-motion";

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

export default function Access() {
  return (
    <motion.section
      className="w-full flex justify-center py-24 bg-transparent"
      id="access"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div
        className="w-full max-w-6xl p-12 flex flex-col items-start relative backdrop-blur-sm"
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
            ACCESS
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
          {/* 会場情報 */}
          <motion.div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
            variants={fadeInUp}
          >
            <div
              className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 mb-4"
              style={{ fontFamily: "serif" }}
            >
              会場情報
            </div>
            <div
              className="text-lg font-bold text-blue-800 mb-2 pl-4"
              style={{ fontFamily: "serif" }}
            >
              豊洲PIT
            </div>
            <div
              className="text-base text-slate-700 pl-4 mb-6"
              style={{ fontFamily: "serif" }}
            >
              〒135-0061 東京都江東区豊洲6-1-23
            </div>
          </motion.div>

          {/* 地図 */}
          <motion.div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
            variants={fadeInUp}
          >
            <div
              className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 mb-4"
              style={{ fontFamily: "serif" }}
            >
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
          </motion.div>

          {/* アクセス情報 */}
          <motion.div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
            variants={fadeInUp}
          >
            <div
              className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 mb-4"
              style={{ fontFamily: "serif" }}
            >
              アクセス
            </div>
            <ul
              className="list-none space-y-4 text-[15px] text-slate-700 pl-8"
              style={{ fontFamily: "serif" }}
            >
              <motion.li className="flex items-start" variants={fadeInUp}>
                <span className="text-blue-400 mr-2">•</span>
                <div>
                  <div
                    className="font-bold text-blue-800 mb-1 pl-4"
                    style={{ fontFamily: "serif" }}
                  >
                    東京メトロ有楽町線「豊洲駅」
                  </div>
                  <div className="pl-8" style={{ fontFamily: "serif" }}>
                    7番出口より徒歩3分
                  </div>
                </div>
              </motion.li>
              <motion.li className="flex items-start" variants={fadeInUp}>
                <span className="text-blue-400 mr-2">•</span>
                <div>
                  <div
                    className="font-bold text-blue-800 mb-1 pl-4"
                    style={{ fontFamily: "serif" }}
                  >
                    ゆりかもめ「豊洲駅」
                  </div>
                  <div className="pl-8" style={{ fontFamily: "serif" }}>
                    徒歩3分
                  </div>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* 注意事項 */}
          <motion.div
            className="p-6 rounded-lg"
            style={{ background: "rgba(255,255,255,0.5)" }}
            variants={fadeInUp}
          >
            <div
              className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 mb-4"
              style={{ fontFamily: "serif" }}
            >
              ご注意事項
            </div>
            <ul
              className="list-none space-y-2 text-[15px] text-slate-700 pl-8"
              style={{ fontFamily: "serif" }}
            >
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
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
