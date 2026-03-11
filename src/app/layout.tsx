import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
        className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
