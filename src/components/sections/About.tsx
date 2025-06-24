"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const itemVariants = {
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

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* タイトル */}
        <motion.div
          className="relative inline-block mb-16"
          variants={itemVariants}
        >
          <h2
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 tracking-wider drop-shadow-lg"
            style={{
              letterSpacing: "0.05em",
              fontFamily: "'Shippori Mincho B1', serif",
            }}
          >
            ABOUT
          </h2>
          <span
            className="block mt-2 h-1 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg, #4fc3f7 0%, #b0c4de 100%)",
            }}
          ></span>
        </motion.div>

        {/* コンテンツ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 画像 */}
          <motion.div
            className="relative aspect-[4/3] w-full max-w-2xl mx-auto lg:max-w-none"
            variants={itemVariants}
          >
            <Image
              src="/images/about/about.webp"
              alt="About Image"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </motion.div>

          {/* テキスト */}
          <motion.div
            className="space-y-6 text-gray-700"
            variants={itemVariants}
          >
            <p className="text-lg sm:text-xl leading-relaxed">
              MY DEAR DARLIN'は、2019年に結成された6人組ガールズバンド。
              メンバー全員が作詞作曲、アレンジに携わり、オリジナル楽曲を制作。
              バンドサウンドを基調としながらも、ポップスやロック、ジャズなど
              様々なジャンルの要素を取り入れた楽曲で、独自の世界観を展開しています。
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              結成5周年を迎える2024年、豊洲PITにて記念すべきワンマンライブを開催。
              これまでの感謝を込めて、スペシャルなステージをお届けします。
            </p>
            <div className="pt-6">
              <motion.button
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-sky-400 text-white text-lg font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const ticketSection = document.getElementById("ticket");
                  if (ticketSection) {
                    const offset = 80;
                    const elementPosition =
                      ticketSection.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                チケットを購入する
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
