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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Access() {
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
            ACCESS
          </motion.h2>

          {/* 会場情報 */}
          <motion.div
            variants={fadeInUpVariants}
            className="mb-12 w-full max-w-3xl text-center"
          >
            <h3 className="mb-8 text-2xl font-bold md:text-3xl">渋谷O-EAST</h3>
            <div className="mb-8 space-y-2 text-lg leading-relaxed md:text-xl">
              <p>〒150-0043</p>
              <p>東京都渋谷区道玄坂2-14-8 2F</p>
              <p className="text-gray-400">TEL: 03-5784-7755</p>
            </div>
          </motion.div>

          {/* アクセス方法 */}
          <motion.div
            variants={fadeInUpVariants}
            className="mb-12 w-full max-w-3xl rounded-2xl bg-zinc-900/50 p-8 backdrop-blur-sm md:p-12"
          >
            <h4 className="mb-6 text-xl font-bold md:text-2xl">アクセス方法</h4>
            <div className="space-y-4 text-lg leading-relaxed">
              <div>
                <p className="font-medium text-gray-400">JR線をご利用の場合</p>
                <p>渋谷駅ハチ公口より徒歩7分</p>
              </div>
              <div>
                <p className="font-medium text-gray-400">
                  東京メトロをご利用の場合
                </p>
                <p>渋谷駅A2出口より徒歩5分</p>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            variants={fadeInUpVariants}
            className="w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6929337487243!2d139.69673687677547!3d35.65991087259066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca9c4194c25%3A0x88c4333929af2527!2z5riL6LC3Ty1FQVNU!5e0!3m2!1sja!2sjp!4v1710669600000!5m2!1sja!2sjp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 装飾的な背景要素 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-0 top-1/4 h-[400px] w-[400px] rotate-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-[300px] w-[300px] -rotate-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl" />
      </div>
    </section>
  );
}
