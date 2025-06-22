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

export default function About() {
  return (
    <motion.section
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
          <motion.div
            className="w-full flex justify-center mb-12"
            variants={fadeInUp}
          >
            <Image
              src="/images/about.JPEG"
              alt="MY DEAR DARLIN' グループ写真"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg w-full max-w-4xl object-cover"
              style={{
                boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
              }}
              quality={100}
              priority
            />
          </motion.div>
          <motion.p
            className="text-left text-slate-700 text-base md:text-lg font-light leading-relaxed tracking-wide mb-12 break-words text-balance"
            style={{ fontFamily: "serif", letterSpacing: "0.04em" }}
            variants={fadeInUp}
          >
            MY DEAR
            DARLIN&#39;（マイディアダーリン）は、2023年に結成された6人組アイドルグループです。
            <br />
            <br />
            「あなたの大切な人でありたい」という想いを込めて活動しています。メンバーそれぞれが個性豊かで、歌唱力とダンスパフォーマンスには定評があり、ライブでは観客を魅了する圧倒的なステージングを披露します。
            <br />
            <br />
            グループ名に込められた「大切な存在」という意味の通り、ファンの皆様との絆を大切にし、音楽とパフォーマンスを通じて感動と喜びをお届けすることを目指しています。
            <br />
            <br />
            メンバーは東條ゆりあ、咲真ゆか、是枝優美、夢実あすか、濱田菜々、広山楓の6名。それぞれが持つ個性と魅力を活かしながら、グループとしての調和を大切にしています。
            <br />
            <br />
            MY DEAR
            DARLIN&#39;は、単なるアイドルグループではありません。メンバー一人一人が夢を持ち、その実現に向けて日々努力を重ねています。ファンの皆様と共に成長し、新しい景色を見ていけることを心から楽しみにしています。
          </motion.p>
          <motion.div
            className="flex items-start"
            style={{ width: "180px", paddingTop: "0" }}
            variants={fadeInUp}
          >
            <Image
              src="/images/0725MDD豊洲LP/logo_bl.png"
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
