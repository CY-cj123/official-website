import { Metadata } from "next";
import { ServicesContent } from "@/components/content/ServicesContent";

export const metadata: Metadata = {
  title: "业务范围 - 市政工程/建筑/环保 | Our Services",
  description: "长垣市诚建提供全方位的市政建设服务，涵盖市政公用工程、房屋建筑、机电安装、钢结构、环保工程、城市照明及地基基础工程。我们致力于打造高质量的基础设施。",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
