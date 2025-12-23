import type { Metadata } from "next";
import { Inter, Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });
const maShanZheng = Ma_Shan_Zheng({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-ma-shan-zheng",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cychengjian.com"),
  title: {
    default: "长垣市诚建市政建设工程有限公司 | Changyuan Chengjian Municipal Construction",
    template: "%s | 长垣市诚建市政建设"
  },
  description: "长垣市诚建市政建设工程有限公司（Changyuan Chengjian Municipal Construction Engineering Co., Ltd.）是一家专业的市政建设企业，业务涵盖市政公用工程、建筑工程、机电工程、钢结构工程、环保工程等领域。致力于提供高质量、安全和可持续的基础设施解决方案。",
  keywords: [
    "长垣市诚建", "诚建市政", "市政建设", "建筑工程", "机电工程", "钢结构工程", "环保工程", 
    "城市照明", "地基基础", "河南建筑公司", "长垣建筑", 
    "Changyuan Chengjian", "Municipal Construction", "Civil Engineering China"
  ],
  authors: [{ name: "长垣市诚建市政建设工程有限公司" }],
  creator: "长垣市诚建市政建设工程有限公司",
  publisher: "长垣市诚建市政建设工程有限公司",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "长垣市诚建市政建设工程有限公司",
    description: "致力于提供高质量、安全和可持续的基础设施解决方案。",
    url: "https://www.cychengjian.com",
    siteName: "长垣市诚建市政建设",
    locale: "zh_CN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // 谷歌搜索控制台验证代码 - 请在 Google Search Console 获取并填入此处
    // google: "your-google-verification-code",
    // 百度站长平台验证代码
    other: {
      "baidu-site-verification": "codeva-wPLgIMaDkT", 
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "长垣市诚建市政建设工程有限公司",
    "alternateName": "Changyuan Chengjian Municipal Construction Engineering Co., Ltd.",
    "url": "https://www.cychengjian.com",
    "logo": "https://www.cychengjian.com/images/logo.png",
    "description": "长垣市诚建市政建设工程有限公司是一家专业的市政建设企业，业务涵盖市政公用工程、建筑工程、机电工程等领域。",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "卫华大道北17巷9号",
      "addressLocality": "长垣市",
      "addressRegion": "河南省",
      "postalCode": "453400",
      "addressCountry": "CN"
    },
    "telephone": "+86 373 887 9569",
    "email": "contact@cychengjian.com",
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$$"
  };

  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${maShanZheng.variable} flex flex-col min-h-screen`}>
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
