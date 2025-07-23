"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative w-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/images_new/hero/0725MDD_fullband_flyer_250604.jpg"
            alt="MY DEAR DARLIN' 5th ANNIVERSARY LIVE"
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </motion.div>

      <style jsx global>{`
        #hero {
          width: 100vw;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #hero img {
          object-fit: contain !important;
          transform-origin: center;
        }

        /* 画面が縦長の場合 */
        @media (aspect-ratio < 1/1) {
          #hero {
            height: auto;
            aspect-ratio: 16/9;
          }
          #hero img {
            width: 100% !important;
            height: 100% !important;
          }
        }

        /* 画面が横長の場合 */
        @media (aspect-ratio >= 1/1) {
          #hero {
            height: auto;
            aspect-ratio: 16/9;
          }
          #hero img {
            width: 100% !important;
            height: 100% !important;
          }
        }
        }
      `}</style>
    </section>
  );
}
