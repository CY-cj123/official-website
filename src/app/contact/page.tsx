import { Metadata } from "next";
import { ContactContent } from "@/components/content/ContactContent";

export const metadata: Metadata = {
  title: "联系我们 - 业务咨询与合作 | Contact Us",
  description: "联系长垣市诚建市政建设工程有限公司，获取专业的市政工程咨询与服务。公司地址：河南省长垣市蒲东东内环388号。电话：+86 373 887 9569，邮箱：contact@cychengjian.com。工作时间：周一至周五 08:00-18:00。",
  keywords: ["联系方式", "业务咨询", "工程合作", "长垣诚建电话", "公司地址", "邮箱", "在线留言", "项目洽谈", "合作伙伴"],
  openGraph: {
    title: "联系长垣诚建 - 开启您的工程项目合作",
    description: "联系我们获取专业的市政工程咨询。电话：+86 373 887 9569",
    url: "https://www.cychengjian.com/contact",
    type: "website",
    images: [
      {
        url: "/images/contact-header-bg.webp",
        width: 1200,
        height: 630,
        alt: "联系长垣诚建",
      }
    ],
  },
  alternates: {
    canonical: "https://www.cychengjian.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
