"use client";

import React from "react";
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

const titleVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
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

export default function Movie() {
  return (
    <motion.section
      className="w-full flex justify-center py-24 bg-transparent"
      id="movie"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="w-full max-w-6xl px-12" variants={fadeInUp}>
        <div className="relative inline-block mb-16">
          <motion.h2
            variants={titleVariants}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 tracking-wider drop-shadow-lg text-left"
            style={{
              letterSpacing: "0.05em",
              fontFamily: "'Shippori Mincho B1', serif",
            }}
          >
            Movie
          </motion.h2>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="block mt-2 h-1 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg, #4fc3f7 0%, #b0c4de 100%)",
            }}
          ></motion.span>
        </div>

        <motion.div
          className="w-full aspect-video overflow-hidden mb-4"
          style={{
            border: "2px solid #b0c4de",
            boxShadow: "0 8px 0 0 #b0c4de, 0 16px 32px 0 rgba(79,195,247,0.15)",
            fontFamily: "serif",
          }}
          variants={fadeInUp}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/JhAwFZgtzvs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
