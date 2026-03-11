# Portfolio Site

転職活動用のポートフォリオサイト。GitHubのpublicリポジトリを自動取得・表示し、ISRにより定期的に最新状態へ更新されます。

## デモ

<!-- Vercelデプロイ後にURLを記載 -->
<!-- https://your-portfolio.vercel.app -->

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 16 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| デプロイ | Vercel |
| データソース | GitHub REST API |
| その他 | date-fns |

## 主な機能

- **GitHubリポジトリの自動取得** — publicリポジトリの情報を GitHub API から取得し、カード形式で表示
- **ISR (Incremental Static Regeneration)** — 1時間間隔でバックグラウンド再生成。訪問者には常にキャッシュ済みの高速なページを配信
- **READMEパーサー** — 各リポジトリのREADMEから概要・使用技術・特徴を自動抽出
- **実績のアコーディオン表示** — Experienceセクションで具体的な実績を状況・行動・成果の形式で展開表示
- **レスポンシブデザイン** — モバイル・タブレット・デスクトップ対応
- **スクロールアニメーション** — IntersectionObserverによるフェードイン表示

## アーキテクチャ

```
[GitHubリポジトリ追加/更新]
  → [訪問者がサイトにアクセス（1時間経過後）]
  → [キャッシュページを即座に配信]
  → [バックグラウンドでGitHub APIから最新データ取得]
  → [新しい静的ページを生成]
  → [次の訪問者に最新ページを配信]
```

Webhook不要、Cron不要。Next.jsのISRがすべてを処理します。

## プロジェクト構成

```
src/
├── app/
│   ├── layout.tsx            # ルートレイアウト（メタデータ、フォント）
│   ├── page.tsx              # ホームページ（全セクション統合、ISR設定）
│   ├── globals.css
│   └── api/revalidate/
│       └── route.ts          # オンデマンド再検証API
├── components/
│   ├── layout/               # Header, Footer
│   ├── sections/             # Hero, About, Skills, Experience, Projects, Certifications
│   └── ui/                   # ProjectCard, SkillBadge, TechTag, ScrollFadeIn 等
├── lib/
│   ├── github.ts             # GitHub APIクライアント
│   ├── readme-parser.ts      # READMEパーサー
│   ├── constants.ts          # 定数
│   └── types.ts              # TypeScript型定義
└── config/
    └── profile.ts            # 個人情報データ（スキル、資格、経歴）
```

## セットアップ

### 前提条件

- Node.js 18+
- npm

### インストール

```bash
git clone https://github.com/Fuku-hiro112/github_portforio.git
cd github_portforio
npm install
```

### 環境変数

`.env.example` をコピーして `.env.local` を作成：

```bash
cp .env.example .env.local
```

`.env.local` を編集：

```
GITHUB_USERNAME=your-github-username
# Optional: GitHub personal access token for higher rate limits
# GITHUB_TOKEN=your-token-here
```

### 開発サーバー

```bash
npm run dev
```

http://localhost:3000 で確認できます。

### ビルド

```bash
npm run build
npm start
```

## 個人情報の更新

スキル・経歴・資格などの個人情報は `src/config/profile.ts` に集約されています。
`documents/` フォルダ内のPDF（業務経歴書・職務経歴書）を更新した際は、このファイルを手動で編集してください。

## ライセンス

MIT
