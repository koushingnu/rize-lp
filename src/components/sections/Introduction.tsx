"use client";

import Image from "next/image";
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

export default function Introduction() {
  return (
    <motion.section
      id="introduction"
      className="w-full flex justify-center py-24 bg-transparent"
      style={{ position: "relative" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* 白い半透明フィルター（さらに透明に） */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.3)",
          zIndex: 0,
        }}
      />
      <motion.div
        className="w-full max-w-4xl mx-auto flex flex-col items-start relative px-4 sm:px-8"
        style={{ zIndex: 1 }}
        variants={fadeInUp}
      >
        <motion.div className="w-full" variants={fadeInUp}>
          <motion.div
            className="text-left text-slate-700 text-base md:text-lg font-light leading-relaxed tracking-wide mb-12 space-y-6"
            style={{ fontFamily: "serif", letterSpacing: "0.04em" }}
            variants={fadeInUp}
          >
            <p className="text-center sm:text-left">
              ALL IN the LIVE ― この瞬間に、すべてを。 ―
            </p>
            <p className="text-center sm:text-left">
              『ALL IN the
              LIVE』には、&ldquo;すべてをこのライブに賭ける&rdquo;という想いを込めています。
            </p>
            <p className="text-center sm:text-left">
              &ldquo;LIVE&rdquo;には、&ldquo;ライブ&rdquo;と&ldquo;生きる&rdquo;というふたつの意味を重ね、
              これまで積み重ねてきた日々やメンバー、応援してくださっている皆様の想い、
              そのすべてをこの1日に込めて、
              MyDearDarlin&#39;が最高のライブをお届けします。
            </p>
            <p className="text-center sm:text-left">
              メンバーもファンもひとつになって、
              悔いなく全力で、この瞬間を楽しみましょう！
            </p>
          </motion.div>
          <motion.div
            className="flex items-start justify-center sm:justify-start"
            variants={fadeInUp}
          >
            <Image
              src="./images/0725MDD豊洲LP/logo_bl.png"
              alt="MY DEAR DARLIN' ロゴ"
              width={180}
              height={54}
              className="object-contain opacity-90"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
