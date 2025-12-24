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
    "城市照明", "地基基础", "河南建筑公司", "长垣建筑", "市政公用工程施工", "建筑业企业资质",
    "长垣市市政工程", "河南省建筑总承包", "新乡建筑公司", "城市及道路照明",
    "Changyuan Chengjian", "Municipal Construction", "Civil Engineering China", "Henan Construction"
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
    description: "致力于提供高质量、安全和可持续的基础设施解决方案。专业市政公用工程、建筑工程、机电工程施工总承包。",
    url: "https://www.cychengjian.com",
    siteName: "长垣市诚建市政建设",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "长垣市诚建市政建设工程有限公司 - 专业市政建设企业",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "长垣市诚建市政建设工程有限公司",
    description: "致力于提供高质量、安全和可持续的基础设施解决方案。",
    images: ["/images/og-image.jpg"],
    creator: "@cychengjian",
    site: "@cychengjian",
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
    // 谷歌搜索控制台验证代码
    // 获取步骤：
    // 1. 访问 https://search.google.com/search-console
    // 2. 添加您的网站
    // 3. 选择 "HTML 标签" 验证方式
    // 4. 复制 content 属性值并粘贴到下方
    // google: "your-google-verification-code-here",
    
    // 百度站长平台验证代码 (已完成)
    other: {
      "baidu-site-verification": "codeva-wPLgIMaDkT", 
    },
  },
  alternates: {
    canonical: "https://www.cychengjian.com",
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
    "image": "https://www.cychengjian.com/images/og-image.jpg",
    "description": "长垣市诚建市政建设工程有限公司是一家专业的市政建设企业，业务涵盖市政公用工程、建筑工程、机电工程、钢结构工程、环保工程、城市照明、地基基础等领域。成立于2005年，致力于提供高质量、安全和可持续的基础设施解决方案。",
    "foundingDate": "2005-06-03",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "蒲东东内环388号",
      "addressLocality": "长垣市",
      "addressRegion": "河南省",
      "postalCode": "453400",
      "addressCountry": "CN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.22",
      "longitude": "114.63"
    },
    "telephone": "+86 373 887 9569",
    "email": "contact@cychengjian.com",
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$$",
    "areaServed": {
      "@type": "Place",
      "name": "河南省长垣市及周边地区"
    },
    "serviceType": [
      "市政公用工程施工",
      "建筑工程施工",
      "机电工程",
      "钢结构工程",
      "环保工程",
      "城市及道路照明工程",
      "地基基础工程"
    ],
    "sameAs": [
      "https://www.cychengjian.com"
    ]
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
