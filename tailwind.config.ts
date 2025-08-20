import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: "#FFFDF5",
          100: "#FFF9E6",
          200: "#FFF3CC",
          300: "#FFECB3",
          400: "#FFE082",
          500: "#FFD54F",
          600: "#FFCA28",
          700: "#FFC107",
          800: "#FFB300",
          900: "#FF9800",
        },
        idol: {
          light: "#FFF9E6", // 最も薄い黄色（背景用）
          lighter: "#FFF3CC", // 薄い黄色
          primary: "#FFECB3", // メインの黄色
          secondary: "#FFE082", // セカンダリー黄色
          accent: "#FFD54F", // アクセント黄色
          dark: "#FFCA28", // 濃い黄色
        },
        background: {
          main: "#FFFDF5", // メイン背景（最も薄い黄色）
          secondary: "#FFFFFF", // 白背景
          accent: "#FFF9E6", // アクセント背景
        },
        text: {
          primary: "#4A4A4A", // メインテキスト（ダークグレー）
          secondary: "#757575", // セカンダリーテキスト
          accent: "#FFC107", // アクセントテキスト
        },
        border: {
          light: "#FFF3CC", // 薄い黄色
          main: "#FFECB3", // メインの黄色
          dark: "#FFD54F", // 濃い黄色
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        jp: ["var(--font-noto-sans-jp)", "sans-serif"],
        en: ["var(--font-montserrat)", "sans-serif"],
      },
      fontSize: {
        "display-large": ["3.5rem", { lineHeight: "1.2" }],
        "display-medium": ["2.75rem", { lineHeight: "1.3" }],
        "display-small": ["2rem", { lineHeight: "1.4" }],
        "body-large": ["1.125rem", { lineHeight: "1.75" }],
        "body-medium": ["1rem", { lineHeight: "1.6" }],
        "body-small": ["0.875rem", { lineHeight: "1.5" }],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(255, 213, 79, 0.1), 0 2px 4px -1px rgba(255, 213, 79, 0.06)",
        card: "0 10px 15px -3px rgba(255, 213, 79, 0.1), 0 4px 6px -2px rgba(255, 213, 79, 0.05)",
      },
      backgroundImage: {
        "gradient-yellow": "linear-gradient(135deg, #FFE082 0%, #FFD54F 100%)",
        "gradient-light": "linear-gradient(135deg, #FFF9E6 0%, #FFF3CC 100%)",
        "gradient-overlay":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

export default config;
