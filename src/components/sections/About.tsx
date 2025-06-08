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

export default function About() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-32">
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
            ABOUT
          </motion.h2>

          {/* イベント情報 */}
          <motion.div
            variants={fadeInUpVariants}
            className="mb-16 text-center text-lg leading-relaxed tracking-wide md:text-xl"
          >
            <h3 className="mb-8 text-2xl font-bold md:text-3xl">
              RIZE 5th Anniversary Live
            </h3>
            <dl className="space-y-4">
              <div>
                <dt className="font-medium text-gray-400">日時</dt>
                <dd className="mt-1">2024年6月15日（土）</dd>
                <dd>OPEN 17:00 / START 18:00</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-400">会場</dt>
                <dd className="mt-1">渋谷O-EAST</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-400">出演</dt>
                <dd className="mt-1">RIZE</dd>
              </div>
            </dl>
          </motion.div>

          {/* 装飾的な背景要素 */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rotate-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-[300px] w-[300px] -rotate-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
