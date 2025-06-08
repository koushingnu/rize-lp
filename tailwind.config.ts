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
        pink: {
          50: "#FFF5F6",
          100: "#FFE6E8",
          200: "#FFD1D6",
          300: "#FFB6BE",
          400: "#FF8FA0",
          500: "#FF6B82",
          600: "#FF4764",
          700: "#FF234B",
          800: "#FF0037",
          900: "#DB002F",
        },
        idol: {
          light: "#FFE6E8", // 最も薄いピンク（背景用）
          lighter: "#FFD1D6", // 薄いピンク
          primary: "#FFB6BE", // メインのピンク
          secondary: "#FF8FA0", // セカンダリーピンク
          accent: "#FF6B82", // アクセントピンク
          dark: "#FF4764", // 濃いピンク
        },
        background: {
          main: "#FFF5F6", // メイン背景（最も薄いピンク）
          secondary: "#FFFFFF", // 白背景
          accent: "#FFE6E8", // アクセント背景
        },
        text: {
          primary: "#4A4A4A", // メインテキスト（ダークグレー）
          secondary: "#757575", // セカンダリーテキスト
          accent: "#FF4764", // アクセントテキスト
        },
        border: {
          light: "#FFD1DC", // 薄いピンク
          main: "#FFB6C1", // メインのピンク
          dark: "#DB7093", // 濃いピンク
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
        soft: "0 4px 6px -1px rgba(255, 107, 130, 0.1), 0 2px 4px -1px rgba(255, 107, 130, 0.06)",
        card: "0 10px 15px -3px rgba(255, 107, 130, 0.1), 0 4px 6px -2px rgba(255, 107, 130, 0.05)",
      },
      backgroundImage: {
        "gradient-pink": "linear-gradient(135deg, #FFB6BE 0%, #FF8FA0 100%)",
        "gradient-light": "linear-gradient(135deg, #FFE6E8 0%, #FFD1D6 100%)",
        "gradient-overlay":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

export default config;
