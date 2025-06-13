"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-screen h-[100dvh] flex items-center justify-center overflow-hidden bg-transparent">
      <motion.div
        className="relative w-full h-full"
        initial={{
          scale: 1.05,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "center center",
        }}
      >
        <Image
          src="/images/hero/0725MDD_fullband_flyer_250604.jpg"
          alt="MY DEAR DARLIN' 5th ANNIVERSARY LIVE"
          width={1920}
          height={1080}
          priority
          className="object-contain md:object-cover w-full h-full"
          sizes="100vw"
          style={{
            objectPosition: "center center",
          }}
        />
      </motion.div>
      {/* 筆文字タイトル画像は無し */}
    </section>
  );
}
