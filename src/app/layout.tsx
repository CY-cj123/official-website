import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "长垣市诚建市政建设工程有限公司 | Changyuan Chengjian Municipal Construction",
  description: "长垣市诚建市政建设工程有限公司（Changyuan Chengjian Municipal Construction Engineering Co., Ltd.）是一家专业的市政建设企业，业务涵盖市政公用工程、建筑工程、机电工程、钢结构工程、环保工程等领域。致力于提供高质量、安全和可持续的基础设施解决方案。",
  keywords: "长垣市诚建, 市政建设, 建筑工程, 机电工程, 钢结构工程, 环保工程, 城市照明, 地基基础, Changyuan Chengjian, Municipal Construction",
  verification: {
    other: {
      // 百度站长平台验证代码
      "baidu-site-verification": "codeva-wPLgIMaDkT", 
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
