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
            className="text-left text-slate-700 text-base md:text-lg font-light leading-relaxed tracking-wide mb-12 break-words text-balance"
            style={{ fontFamily: "serif", letterSpacing: "0.04em" }}
            variants={fadeInUp}
          >
            いつも応援してくださる皆さまへ。
            <br />
            <br />
            私たちMY DEAR
            DARLIN&#39;は、たくさんの夢と希望を胸に、この特別なステージに立ちます。ここまで歩んでこられたのは、ひとえに皆さまの温かいご声援があったからこそです。
            <br />
            <br />
            これからも、もっと大きな感動とワクワクをお届けできるよう、メンバー・スタッフ一同、心を込めてパフォーマンスします。最高の一日を、ぜひ一緒に楽しみましょう！
            <br />
            <br />
            そして、私たちの音楽やパフォーマンスが、皆さまの日常に小さな幸せや勇気を届けられる存在でありたいと願っています。どんな時も、皆さまの笑顔が私たちの原動力です。これからも一歩一歩、夢に向かって進み続けます。
            <br />
            <br />
            このライブは、私たちにとっても新たな挑戦であり、成長の場です。ステージの上で感じる緊張や期待、そして皆さまからの温かい拍手や声援が、私たちの背中を押してくれます。どんな瞬間も、皆さまと心を通わせながら、最高のパフォーマンスをお届けしたいと思っています。
            <br />
            <br />
            これからもMY DEAR
            DARLIN&#39;をどうぞよろしくお願いいたします。皆さまのご期待に応えられるよう、日々努力を重ねてまいります。今後とも変わらぬご声援を賜りますよう、心よりお願い申し上げます。
            <br />
            <br />
            それでは、会場でお会いできることをメンバー・スタッフ一同、心より楽しみにしております。素晴らしい一日を一緒に過ごしましょう！
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
