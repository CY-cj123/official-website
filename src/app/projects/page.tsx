import { Metadata } from "next";
import { ProjectsContent } from "@/components/content/ProjectsContent";

export const metadata: Metadata = {
  title: "项目展示 - 精品工程案例 | Projects Showcase",
  description: "浏览长垣市诚建的代表性工程项目，包括给排水系统改造、道路建设、污水管网疏浚等市政基础设施建设案例。见证我们对质量和安全的承诺。",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
