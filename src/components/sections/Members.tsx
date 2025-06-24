"use client";

import Image from "next/image";
import { motion } from "framer-motion";
/* import { useState } from "react";
import MessagePopup from "../ui/MessagePopup"; */

const members = [
  "01東條ゆりあ_2505.jpg",
  "02咲真ゆか_2505.jpg",
  "03是枝優美_2505.jpg",
  "04夢実あすか_2505.jpg",
  "05濱田菜々_2505.jpg",
  "06広山楓_2505.jpg",
];

function extractName(filename: string) {
  // 01東條ゆりあ_2505.jpg → 東條ゆりあ
  const match = filename.match(/^\d+(.+?)_\d+\.jpg$/);
  return match ? match[1] : filename;
}

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

const memberCardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageHoverVariants = {
  initial: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    rotate: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const nameVariants = {
  initial: {
    y: 0,
    opacity: 0.8,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// メッセージ機能用のアニメーション設定（後で使用）
/* const buttonVariants = {
  initial: {
    y: 0,
    opacity: 0.9,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  hover: {
    y: 5,
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
}; */

/* メッセージ機能用のデータ（後で使用）
const memberData = [
  {
    id: 1,
    name: "東條 ゆりあ",
    nameEn: "Tojo Yuria",
    social: {
      twitter: "https://twitter.com/example1",
      instagram: "https://instagram.com/example1",
      tiktok: "https://tiktok.com/@example1",
    },
  },
  {
    id: 2,
    name: "咲真 ゆか",
    nameEn: "Sakuma Yuka",
    social: {
      twitter: "https://twitter.com/example2",
      instagram: "https://instagram.com/example2",
      tiktok: "https://tiktok.com/@example2",
    },
  },
  {
    id: 3,
    name: "是枝 優美",
    nameEn: "Koreeda Yumi",
    social: {
      twitter: "https://twitter.com/example3",
      instagram: "https://instagram.com/example3",
      tiktok: "https://tiktok.com/@example3",
    },
  },
  {
    id: 4,
    name: "夢実 あすか",
    nameEn: "Yumemi Asuka",
    social: {
      twitter: "https://twitter.com/example4",
      instagram: "https://instagram.com/example4",
      tiktok: "https://tiktok.com/@example4",
    },
  },
  {
    id: 5,
    name: "濱田 菜々",
    nameEn: "Hamada Nana",
    social: {
      twitter: "https://twitter.com/example5",
      instagram: "https://instagram.com/example5",
      tiktok: "https://tiktok.com/@example5",
    },
  },
  {
    id: 6,
    name: "広山 楓",
    nameEn: "Hiroyama Kaede",
    social: {
      twitter: "https://twitter.com/example6",
      instagram: "https://instagram.com/example6",
      tiktok: "https://tiktok.com/@example6",
    },
  },
]; */

export default function Members() {
  // メッセージ機能用のstate（後で使用）
  /* const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleOpenPopup = (memberId: number) => {
    setSelectedMember(memberId);
  };

  const handleClosePopup = () => {
    setSelectedMember(null);
  }; */

  return (
    <section id="message" className="relative w-full py-24 bg-transparent">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* タイトル */}
        <div className="mb-16">
          <div className="relative inline-block">
            <motion.h2
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-400 to-blue-300 tracking-wider drop-shadow-lg"
              style={{
                letterSpacing: "0.05em",
                fontFamily: "'Shippori Mincho B1', serif",
              }}
            >
              MEMBERS
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
        </div>

        {/* メンバーグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {members.map((filename) => (
            <motion.div
              key={filename}
              className="flex flex-col items-center"
              variants={memberCardVariants}
              initial="initial"
              whileHover="hover"
            >
              {/* 画像＋シルバー縁＋下に青系シャドウ（角丸なし） */}
              <motion.div
                className="relative w-full aspect-[3/4] overflow-hidden mb-6"
                style={{
                  boxShadow:
                    "0 8px 0 0 #b0c4de, 0 16px 32px 0 rgba(79,195,247,0.15)",
                  border: "2px solid #b0c4de",
                }}
                variants={imageHoverVariants}
              >
                <Image
                  src={`/images/0725MDD豊洲LP/A写/個人/${filename}`}
                  alt={extractName(filename)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  style={{ borderRadius: 0 }}
                />
              </motion.div>
              {/* 名前 */}
              <motion.div
                className="text-center font-bold text-slate-800 text-lg sm:text-xl tracking-wide mb-4"
                style={{ fontFamily: "serif" }}
                variants={nameVariants}
              >
                {extractName(filename)}
              </motion.div>

              {/* メッセージボタン（後で使用）
              <motion.button
                className="px-8 py-2 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-300 text-white font-semibold text-base tracking-wide shadow-md hover:from-blue-700 hover:to-sky-500 transition-all duration-300 border-none"
                style={{ borderRadius: 0, fontFamily: "serif" }}
                variants={buttonVariants}
                whileTap="tap"
                onClick={() => handleOpenPopup(memberData.find(m => extractName(filename) === m.name)?.id || 0)}
              >
                メッセージを読む
              </motion.button> */}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* メッセージポップアップ（後で使用）
      {selectedMember && (
        <MessagePopup
          member={memberData.find(m => m.id === selectedMember)!}
          onClose={handleClosePopup}
        />
      )} */}
    </section>
  );
}
