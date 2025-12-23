import { Metadata } from "next";
import { ServicesContent } from "@/components/content/ServicesContent";

export const metadata: Metadata = {
  title: "业务范围 - 市政工程/建筑/环保 | Our Services",
  description: "长垣市诚建提供全方位的市政建设服务：市政公用工程施工总承包、建筑工程施工、机电工程、钢结构工程、环保工程、城市及道路照明工程、地基基础工程。从规划设计到施工维护，提供端到端的专业基础设施解决方案。",
  keywords: ["市政公用工程施工", "建筑工程施工", "机电工程", "钢结构工程", "环保工程", "城市照明工程", "道路照明", "地基基础工程", "工程总承包", "基础设施建设", "市政建设服务"],
  openGraph: {
    title: "长垣诚建业务范围 - 全方位市政建设服务",
    description: "市政公用工程、建筑工程、机电工程、钢结构、环保、照明、地基基础 - 七大核心业务领域。",
    url: "https://www.cychengjian.com/services",
    type: "website",
    images: [
      {
        url: "/images/services-header-bg.webp",
        width: 1200,
        height: 630,
        alt: "长垣诚建业务范围",
      }
    ],
  },
  alternates: {
    canonical: "https://www.cychengjian.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
