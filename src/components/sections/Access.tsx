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
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full lg:w-40 shrink-0 mb-4 lg:mb-0">
                <div
                  className="text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300"
                  style={{ fontFamily: "serif" }}
                >
                  会場
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-base text-slate-700"
                style={{ fontFamily: "serif" }}
              >
                <div className="space-y-4">
                  <div>
                    <div className="font-bold text-blue-800 mb-2">豊洲PIT</div>
                    <div className="pl-4">
                      〒135-0061
                      <br />
                      東京都江東区豊洲6-1-23
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* アクセス方法 */}
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
                  アクセス
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-base text-slate-700"
                style={{ fontFamily: "serif" }}
              >
                <div className="space-y-6">
                  <div>
                    <div className="font-bold text-blue-800 mb-2">
                      新交通ゆりかもめ
                    </div>
                    <div className="pl-4">
                      新豊洲駅（1b出口）徒歩4分
                      <br />
                      市場前駅（4番出口）徒歩7分
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-800 mb-2">
                      東京メトロ有楽町線
                    </div>
                    <div className="pl-4">豊洲駅（7番出口）徒歩15分</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 駐車場情報 */}
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
                  駐車場
                </div>
              </div>
              <div
                className="w-full lg:w-[600px] text-base text-slate-700"
                style={{ fontFamily: "serif" }}
              >
                <ul className="list-none space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    専用駐車場はございません
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    お近くの有料駐車場をご利用ください
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    公共交通機関でのご来場を推奨しています
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 地図 */}
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
                  地図
                </div>
              </div>
              <div className="w-full lg:w-[600px] h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.5478486069447!2d139.79016597677547!3d35.645751072258086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188920ef45d6ab%3A0x3f19c02ce47d5c47!2z6LGK5rSy77yQ77yp77yt!5e0!3m2!1sja!2sjp!4v1710400844040!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
