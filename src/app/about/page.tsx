import { Metadata } from "next";
import { AboutContent } from "@/components/content/AboutContent";

export const metadata: Metadata = {
  title: "关于我们 - 长垣市诚建市政建设 | Company Profile",
  description: "长垣市诚建市政建设工程有限公司拥有多项专业资质，包括市政公用工程施工总承包二级、建筑工程施工总承包二级等。了解我们的发展历程、荣誉奖项及企业文化。",
};

export default function AboutPage() {
  return <AboutContent />;
}
