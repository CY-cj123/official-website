import { Metadata } from "next";
import { AboutContent } from "@/components/content/AboutContent";

export const metadata: Metadata = {
  title: "关于我们 - 长垣市诚建市政建设 | Company Profile",
  description: "长垣市诚建市政建设工程有限公司成立于2005年，拥有市政公用工程施工总承包二级、建筑工程施工总承包二级等多项专业资质。了解我们的发展历程、企业荣誉、资质证书及企业文化。以'信誉至上、质量第一'为原则，致力于高质量基础设施建设。",
  keywords: ["长垣市诚建", "公司简介", "企业资质", "市政公用工程资质", "建筑业企业资质证书", "安全生产许可证", "企业荣誉", "公司文化", "成立时间", "发展历程"],
  openGraph: {
    title: "关于长垣市诚建市政建设工程有限公司",
    description: "成立于2005年，拥有多项专业资质的综合性市政建设企业。",
    url: "https://www.cychengjian.com/about",
    type: "website",
    images: [
      {
        url: "/images/about-bg.webp",
        width: 1200,
        height: 630,
        alt: "长垣市诚建 - 关于我们",
      }
    ],
  },
  alternates: {
    canonical: "https://www.cychengjian.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
