/**
 * ポートフォリオの個人情報データ
 *
 * データソース: documents/ フォルダ内のPDF（業務経歴書・職務経歴書）
 * PDF更新時はこのファイルを手動で更新してください。
 */
import type {
  Certification,
  Experience,
  SkillCategory,
  StudentProject,
} from "@/lib/types";

export const PROFILE = {
  name: "福田 寛和",
  nameEn: "Hirokazu Fukuda",
  role: "Software Engineer",
  location: "大阪府",
  bio: "セキュリティ製品開発の経験を持つソフトウェアエンジニア。",
  aboutParagraphs: [
    "Elasticsearchを活用したセキュリティ製品の開発に携わり、要件定義から設計・実装・テスト・リリースまで一貫して担当してきました。",
    "事前の仕様共有と早期の認識合わせにより、集合レビューでの指摘ゼロを実現。顧客折衝やナレッジ共有にも積極的に取り組んでいます。",
  ],
} as const;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    colorClass: "bg-blue-100 text-blue-800",
    skills: [
      { name: "C#", experience: "2年6ヶ月" },
      { name: "Java", experience: "1年" },
      { name: "Python", experience: "2ヶ月" },
    ],
  },
  {
    title: "Tools & Platforms",
    colorClass: "bg-green-100 text-green-800",
    skills: [
      { name: "Elasticsearch" },
      { name: "Kibana" },
      { name: "Unity" },
      { name: "Git / GitHub" },
    ],
  },
  {
    title: "Cloud",
    colorClass: "bg-purple-100 text-purple-800",
    skills: [{ name: "AWS" }],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "株式会社アソウ・アルファ",
    role: "ソフトウェアエンジニア",
    period: "2025年4月〜現在",
    description:
      "Elasticsearchを活用したセキュリティ製品の新規開発に従事。要件定義、設計、製造、テスト、リリースまでの一連の工程を7件担当。",
    environment: ["Java", "Shell", "Python", "Elasticsearch", "Kibana", "AWS", "Git"],
    teamSize: "5〜10名",
    achievements: [
      {
        title: "複雑な集計処理の設計・実装を引き継ぎ完遂",
        situation:
          "配属先メンバーが担当していた障害時間の月次自動集計機能が、基本設計時点で廃止になり複雑な設計となっていた。進行が停滞していることを把握。",
        action:
          "自ら担当チームのメンバーへ聞き取りを行い、詳細設計以降を引き継ぐことを提案。慣れない言語仕様やDBに苦戦しながらも、公式ドキュメントを読み込み、例外ケースを含む複数の処理パターンを整理して実装を進めた。",
        result:
          "可読性・保守性の高いコードを完成。「コードを書かせるなら福田さんに任せよう」との評価を得た。",
      },
      {
        title: "集合レビューで指摘ゼロ・追加修正なしを達成",
        situation:
          "インスペクション（集合レビュー）で大きな指摘が発生すると、手戻りによる工程遅延リスクがあった。",
        action:
          "事前に仕様や方針を逐次共有し、不明点は早期に相談。緻密なコミュニケーションを通じて認識のずれを排除した。",
        result:
          "指摘ゼロ・追加修正なしで工程を完了。事前共有による品質担保のプロセスを確立した。",
      },
      {
        title: "データ取り漏れ不具合の構造的原因を発見",
        situation:
          "データが同時に登録された場合に取り漏れが発生する不具合が報告された。",
        action:
          "担当者からのヒアリング内容を整理するだけでなく、登録時刻の扱いに着目して処理の流れを図解し、発生条件を客観的に分析。さらに類似処理を横断的に調査した。",
        result:
          "「同時登録」に限定されず、登録時刻が異なる場合でも同様の取り漏れが発生し得ることを発見。水平展開で同一リスクの箇所を洗い出し、構造的な問題として再発防止を提案した。",
      },
      {
        title: "顧客要望に対する改善提案で処理速度を向上",
        situation:
          "顧客からの機能要望に対して、仕様通りに実装するだけでは運用時の処理負荷が高くなる懸念があった。",
        action:
          "処理速度・保守性向上を意識した改善案を独自に検討し、不要な手順の削減を提案した。",
        result:
          "運用時の負荷軽減と処理速度の向上を実現。仕様を超えた価値提供として評価された。",
      },
      {
        title: "新規参入メンバー向けElasticsearch教育資料の作成",
        situation:
          "新しくプロジェクトに参加するメンバーのElasticsearchの学習コストが高く、立ち上がりに時間がかかっていた。",
        action:
          "自主的にElasticsearchの基本資料および問題集を作成し、チーム内で共有した。",
        result:
          "チーム内の知識定着と新規メンバーの立ち上がり効率化に貢献した。",
      },
    ],
  },
];

export const STUDENT_PROJECT: StudentProject = {
  title: "3Dアクションゲーム制作",
  period: "2024年2月〜2024年7月（制作期間2ヶ月半）",
  description:
    "Unity / C# / VisualStudioを使用した3Dアクションゲームの個人制作。プログラム総コード量4,153行。",
  environment: ["C#", "Unity", "VisualStudio"],
  learnings: [
    "物理学の公式や群集行動アルゴリズム（Boidsなど）をゲームロジックへ実装。敵AIの自然な徘徊パターンを3Dベクトル計算で実現した。",
    "過度な抽象化とスピード優先の両極端を経験し、「計画性を持ったクラス設計」が保守性・拡張性を高めることを実感。初期段階で変更に強い設計を意識するようになった。",
  ],
};

export const CERTIFICATIONS: Certification[] = [
  { name: "基本情報技術者試験", date: "2025年10月" },
  { name: "Foundational C# with Microsoft", date: "2025年12月" },
  { name: "Microsoft Office Specialist Excel 2016", date: "2019年12月" },
];
