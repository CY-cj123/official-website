import { Metadata } from "next";
import { ContactContent } from "@/components/content/ContactContent";

export const metadata: Metadata = {
  title: "联系我们 - 业务咨询与合作 | Contact Us",
  description: "欢迎联系长垣市诚建市政建设工程有限公司。我们将为您提供专业的工程咨询与服务。电话：+86 373 887 9569，邮箱：contact@cychengjian.com。",
};

export default function ContactPage() {
  return <ContactContent />;
}
