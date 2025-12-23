import { Metadata } from "next";
import { ProjectsContent } from "@/components/content/ProjectsContent";

export const metadata: Metadata = {
  title: "项目展示 - 精品工程案例 | Projects Showcase",
  description: "长垣市诚建代表性工程项目展示：中心城区配水系统改扩建、雨污合流管道改造、规划路及安置路道路工程、城区污水管网清淤、第二给水厂备用取水工程等。每个项目都体现了我们对质量、安全和可持续发展的承诺。",
  keywords: ["工程案例", "项目展示", "市政工程项目", "给水工程", "排水工程", "道路工程", "污水管网", "配水系统", "长垣市政项目", "基础设施建设案例"],
  openGraph: {
    title: "长垣诚建项目案例 - 精品市政工程展示",
    description: "浏览我们完成的代表性市政基础设施项目，见证专业与品质。",
    url: "https://www.cychengjian.com/projects",
    type: "website",
    images: [
      {
        url: "/images/projects-header-bg.webp",
        width: 1200,
        height: 630,
        alt: "长垣诚建项目案例",
      }
    ],
  },
  alternates: {
    canonical: "https://www.cychengjian.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
