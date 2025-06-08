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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <h2 className="text-2xl font-bold tracking-wider md:text-3xl">
            RIZE 5th Anniversary Live
          </h2>
          <p className="text-sm text-gray-400">
            お問い合わせ：info@example.com
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              YouTube
            </a>
          </div>
          <p className="text-xs text-gray-600">
            © 2024 RIZE. All Rights Reserved.
          </p>
        </motion.div>
      </div>

      {/* 装飾的な背景要素 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute left-1/4 top-0 h-[200px] w-[200px] rotate-45 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl" />
      </div>
    </footer>
  );
}
