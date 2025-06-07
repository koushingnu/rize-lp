"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUpVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const backgroundVariants = {
  hidden: {
    scale: 1.1,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 背景画像 */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          sizes="100vw"
          quality={90}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* メインコンテンツ */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
        >
          RIZE 5th Anniversary Live
        </motion.h1>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mb-8 text-xl tracking-wide md:text-2xl lg:text-3xl"
        >
          <p className="mb-2">2024.06.15 SAT</p>
          <p>at 渋谷O-EAST</p>
        </motion.div>

        <motion.button
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg md:text-xl"
        >
          チケット予約はこちら
        </motion.button>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm font-light tracking-widest">
            SCROLL
          </span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="h-12 w-[1px] bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
