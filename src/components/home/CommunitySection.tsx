"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { useLanguage } from "@/context/LanguageContext";

// Custom Qualification/Certificate Icon
const CertIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </svg>
);

export function CommunitySection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#003366] text-white">
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block text-sm">
              {t.community_section.tag}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              {t.community_section.title}
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              {t.community_section.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
               <PrimaryButton 
                  href="/about" 
                  icon={<CertIcon className="w-7 h-7 text-white" />}
               >
                  {t.community_section.careers_link}
               </PrimaryButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
             <div className="space-y-4 mt-8">
                <img src="/images/services/road.jpg" alt="Construction Worker" className="rounded-xl shadow-lg w-full h-64 object-cover" />
                <img src="/images/services/bridge.jpg" alt="Engineers" className="rounded-xl shadow-lg w-full h-48 object-cover" />
             </div>
             <div className="space-y-4">
                <img src="/images/services/building.jpg" alt="Construction Site" className="rounded-xl shadow-lg w-full h-48 object-cover" />
                <img src="/images/services/water.jpg" alt="Workers on Site" className="rounded-xl shadow-lg w-full h-64 object-cover" />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
