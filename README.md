# Hirokazu Fukuda - Portfolio

**ポートフォリオサイトは下記URLで公開中です。**

### [https://github-portforio.vercel.app](https://github-portforio.vercel.app)

経歴・スキル・実績・GitHubリポジトリ一覧をまとめたポートフォリオサイトです。
リポジトリの追加・更新は自動で反映されます。
claude codeで作成しました。

---

## サイトの内容

| セクション | 内容 |
|-----------|------|
| **About** | 自己紹介・職務概要 |
| **Skills** | 言語・ツール・クラウドのスキル一覧 |
| **Experience** | 職務経歴と具体的な実績（状況・行動・成果） |
| **Projects** | GitHubのpublicリポジトリを自動取得して表示 |
| **Certifications** | 保有資格一覧 |

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

## 経歴・スキル情報の更新方法

職務経歴書や業務経歴書（`documents/` 内のPDF）を更新した場合、以下の手順でサイトに反映します。

### 1. `src/config/profile.ts` を編集

サイトに表示されるすべての個人情報はこのファイルに集約されています。

| データ | 変数名 | 内容 |
|--------|--------|------|
| 基本情報 | `PROFILE` | 名前・職種・所在地・自己紹介文 |
| スキル | `SKILL_CATEGORIES` | 言語・ツール・クラウドとその経験年数 |
| 職務経歴 | `EXPERIENCES` | 会社名・期間・業務概要・技術環境・具体的な実績 |
| 個人制作 | `STUDENT_PROJECT` | 学生時代の制作物 |
| 資格 | `CERTIFICATIONS` | 資格名・取得年月 |

### 2. コミット & プッシュ

```bash
git add src/config/profile.ts
git commit -m "update: 経歴情報を更新"
git push origin main
```

### 3. 自動デプロイ

mainブランチへのpushでVercelが自動的に再デプロイします。数分後にサイトに反映されます。

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

## ローカル開発

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

## ライセンス

MIT
