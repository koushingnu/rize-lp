# RIZE 5th Anniversary Live Special Website

RIZE 5周年記念ライブの特設サイトです。モダンでリッチなUI/UXを実現するため、Next.js、TypeScript、Tailwind CSS、Framer Motionを採用しています。

## 技術スタック

- Next.js (最新版)
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons
- Headless UI

## 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone [your-repo-url]
cd rize-lp

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 必要な環境変数

現時点では特別な環境変数は必要ありません。

## ディレクトリ構成

```
.
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # 共通コンポーネント
│   │   └── sections/    # ページセクションコンポーネント
│   └── styles/          # グローバルスタイル
├── public/              # 静的ファイル
│   └── images/         # 画像ファイル
└── package.json        # 依存関係とスクリプト
```

## デプロイ

このプロジェクトはVercelへのデプロイを想定しています。以下の手順で簡単にデプロイできます：

1. Vercelアカウントを作成（まだの場合）
2. このリポジトリをGitHubにプッシュ
3. Vercelでリポジトリをインポート
4. デプロイ設定を確認して「Deploy」をクリック

## 開発ガイドライン

- コミットメッセージは[Conventional Commits](https://www.conventionalcommits.org/)に従ってください
- 新機能の追加は必ずブランチを切って作業してください
- PRを出す前に`npm run lint`と`npm run build`を実行してエラーがないことを確認してください

## ライセンス

このプロジェクトは[MIT License](LICENSE)の下で公開されています。

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
