"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero/0725MDD_fullband_flyer_250604.jpg"
          alt="Hero Image"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
