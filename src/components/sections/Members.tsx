"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import MessagePopup from "../ui/MessagePopup";

const members = [
  "01_tojo_yuria_2505.jpg",
  "02_sakuma_yuka_2505.jpg",
  "03_koreeda_yumi_2505.jpg",
  "04_yumemi_asuka_2505.jpg",
  "05_hamada_nana_2505.jpg",
  "06_hiroyama_kaede_2505.jpg",
];

function extractName(filename: string) {
  // 01_tojo_yuria_2505.jpg → 東條ゆりあ
  const nameMap: { [key: string]: string } = {
    "01_tojo_yuria_2505.jpg": "東條ゆりあ",
    "02_sakuma_yuka_2505.jpg": "咲真ゆか",
    "03_koreeda_yumi_2505.jpg": "是枝優美",
    "04_yumemi_asuka_2505.jpg": "夢実あすか",
    "05_hamada_nana_2505.jpg": "濱田菜々",
    "06_hiroyama_kaede_2505.jpg": "広山楓",
  };
  return nameMap[filename] || filename;
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

// メッセージ機能用のアニメーション設定
const buttonVariants = {
  initial: {
    scale: 1,
    transition: {
      duration: 0.03,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.01,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

// メッセージ機能用のデータ
const memberData = [
  {
    id: 1,
    name: "東條 ゆりあ",
    nameEn: "Tojo Yuria",
    social: {
      twitter: "https://twitter.com/mydear2020_yuri",
      instagram: "https://www.instagram.com/yurichoco___",
      tiktok: "https://www.tiktok.com/@yurichoco___",
    },
  },
  {
    id: 2,
    name: "咲真 ゆか",
    nameEn: "Sakuma Yuka",
    social: {
      twitter: "https://twitter.com/mydear2020_yuka",
      instagram:
        "https://www.instagram.com/__sakumarumorimori?igsh=MTE1anRoeGtuZXltNA==/",
      tiktok:
        "https://www.tiktok.com/@__sakumarumorimori?_t=ZS-8yEKmJTq60V&_r=1",
    },
  },
  {
    id: 3,
    name: "是枝 優美",
    nameEn: "Koreeda Yumi",
    social: {
      twitter: "https://twitter.com/mydear2020_yumi",
      instagram: "https://www.instagram.com/yu_mi1226?igsh=Z24zOGI2ZGpucHI3/",
      tiktok: "https://www.tiktok.com/@mydear2020_yumi?_t=ZS-8yEKw9970M6&_r=1",
    },
  },
  {
    id: 4,
    name: "夢実 あすか",
    nameEn: "Yumemi Asuka",
    social: {
      twitter: "https://twitter.com/mydear2020_yume",
      instagram:
        "https://www.instagram.com/asukadayou213?igsh=MTYwZGlmNGRvM3lu",
      tiktok: "https://www.tiktok.com/@asukadayou213?_t=ZS-8yEKy22jcrY&_r=1",
    },
  },
  {
    id: 5,
    name: "濱田 菜々",
    nameEn: "Hamada Nana",
    social: {
      twitter: "https://twitter.com/mydear2020_nana",
      instagram:
        "https://www.instagram.com/hamada_nana7?igsh=cDlnZnpzZXRrc20=/",
      tiktok: "https://www.tiktok.com/@hamada_nana7?_t=ZS-8yEqPhzMAFz&_r=1",
    },
  },
  {
    id: 6,
    name: "広山 楓",
    nameEn: "Hiroyama Kaede",
    social: {
      twitter: "https://twitter.com/mydear2020_hiro",
      instagram: "https://www.instagram.com/maple.1018/",
      tiktok: "https://www.tiktok.com/@kaedeofhiroyama?_t=ZS-8yEL10AP85P&_r=1",
    },
  },
];

export default function Members() {
  // メッセージ機能用のstate
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleOpenPopup = (memberId: number) => {
    setSelectedMember(memberId);
  };

  const handleClosePopup = () => {
    setSelectedMember(null);
  };

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
                fontFamily: "serif",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 sm:gap-12">
          {members.map((filename, index) => (
            <motion.div
              key={filename}
              className="flex flex-col items-center"
              variants={memberCardVariants}
            >
              {/* 画像＋シルバー縁＋下に青系シャドウ（角丸なし） */}
              <motion.div
                className="relative w-full aspect-[3/4] overflow-hidden mb-4 xs:mb-6 cursor-pointer"
                style={{
                  boxShadow:
                    "0 8px 0 0 #b0c4de, 0 16px 32px 0 rgba(79,195,247,0.15)",
                  border: "2px solid #b0c4de",
                }}
                variants={imageHoverVariants}
                initial="initial"
                whileHover="hover"
                onClick={() => handleOpenPopup(index + 1)}
              >
                <Image
                  src={`/images_new/members/${filename}`}
                  alt={extractName(filename)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  style={{ borderRadius: 0 }}
                  priority
                />
              </motion.div>
              {/* 名前 */}
              <div
                className="text-center font-bold text-slate-800 text-[16px] xs:text-[18px] sm:text-xl md:text-2xl tracking-wide mb-4 cursor-pointer"
                style={{ fontFamily: "serif" }}
                onClick={() => handleOpenPopup(index + 1)}
              >
                {extractName(filename)}
              </div>
              {/* メッセージボタン */}
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-sky-400 text-white text-base rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleOpenPopup(index + 1)}
              >
                メッセージを見る
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* メッセージポップアップ */}
      {selectedMember && (
        <MessagePopup
          isOpen={true}
          memberData={memberData.find((m) => m.id === selectedMember)!}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
}
