import type { Metadata } from "next";
import { Fraunces, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hirokazu Fukuda | Software Engineer",
  description:
    "福田寛和のポートフォリオサイト。GitHubプロジェクトを自動取得・表示。",
  openGraph: {
    title: "Hirokazu Fukuda | Software Engineer",
    description:
      "福田寛和のポートフォリオサイト。GitHubプロジェクトを自動取得・表示。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${fraunces.variable} ${notoSansJP.variable} font-sans antialiased bg-base text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
