"use client";

import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-bold text-white uppercase tracking-wider">{t.common.company_short}</span>
            </Link>
            <p className="text-slate-400 text-sm">
              {t.common.company_name}<br/>
              {t.footer.company_desc}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-blue-400">{t.footer.company_title}</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">{t.nav.projects}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-blue-400">{t.footer.services_title}</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/services#building" className="hover:text-white transition-colors">{t.project_showcase.categories.building}</Link></li>
              <li><Link href="/services#municipal" className="hover:text-white transition-colors">{t.project_showcase.categories.municipal}</Link></li>
              <li><Link href="/services#me" className="hover:text-white transition-colors">{t.project_showcase.categories.me}</Link></li>
              <li><Link href="/services#steel" className="hover:text-white transition-colors">{t.project_showcase.categories.steel}</Link></li>
              <li><Link href="/services#env" className="hover:text-white transition-colors">{t.project_showcase.categories.env}</Link></li>
              <li><Link href="/services#lighting" className="hover:text-white transition-colors">{t.project_showcase.categories.lighting}</Link></li>
              <li><Link href="/services#foundation" className="hover:text-white transition-colors">{t.project_showcase.categories.foundation}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-blue-400">{t.footer.contact_title}</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@cycj.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+86 373 888 8888</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              {/* WeChat Icon */}
              <div className="group relative">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" 
                  viewBox="0 0 16 16"
                >
                  <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
                  <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
                </svg>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-white text-slate-900 text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-center shadow-lg">
                  {t.footer.wechat_id}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {t.common.company_name} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
