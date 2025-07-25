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
        className="w-full max-w-4xl mx-auto flex flex-col items-start relative px-8"
        style={{ zIndex: 1 }}
        variants={fadeInUp}
      >
        <motion.div className="w-full" variants={fadeInUp}>
          <motion.p
            className="text-left text-slate-700 text-[13px] xs:text-[15px] sm:text-base md:text-lg font-light leading-[1.8] xs:leading-[2] tracking-wide mb-12 px-4 sm:px-0"
            style={{ fontFamily: "serif", letterSpacing: "0.02em" }}
            variants={fadeInUp}
          >
            ALL IN the LIVE ― この瞬間に、すべてを。 ―
            <br />
            <br />
            『ALL IN the
            LIVE』には、&ldquo;すべてをこのライブに賭ける&rdquo;という想いを込めています。
            <br />
            <br />
            &ldquo;LIVE&rdquo;には、&ldquo;ライブ&rdquo;と&ldquo;生きる&rdquo;というふたつの意味を重ね、これまで積み重ねてきた日々やメンバー、応援してくださっている皆様の想い、そのすべてをこの1日に込めて、MyDearDarlin&#39;が最高のライブをお届けします。
            <br />
            <br />
            メンバーもファンもひとつになって、悔いなく全力で、この瞬間を楽しみましょう！
          </motion.p>
          <motion.div
            className="flex items-start"
            style={{ width: "180px", paddingTop: "0" }}
            variants={fadeInUp}
          >
            <Image
              src="/images_new/logo/logo_bl.png"
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
