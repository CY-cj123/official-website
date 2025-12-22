"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
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
                <MapPin className="h-4 w-4 mt-1 text-blue-400 shrink-0" />
                <a 
                  href="https://www.amap.com/search?query=%E6%B2%B3%E5%8D%97%E7%9C%81%E9%95%BF%E5%9E%A3%E5%B8%82%E8%92%B2%E8%A5%BF%E5%8C%BA%E5%8D%AB%E5%8D%8E%E5%A4%A7%E9%81%93%E5%8C%9717%E5%B7%B79%E5%8F%B7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.address}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <a href="mailto:contact@cychengjian.com" className="hover:text-white transition-colors">
                  contact@cychengjian.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                <a href="tel:+863738888888" className="hover:text-white transition-colors">
                  +86 373 888 8888
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {t.common.company_name} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
