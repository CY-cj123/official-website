"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { PrimaryButton } from "@/components/ui/primary-button";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t, language } = useLanguage();
  const isSimplified = language === 'zh-CN';
  const isTraditional = language === 'zh-TW';
  const isChinese = isSimplified || isTraditional;

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/services/building.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#003366]/40 to-transparent" />
      </div>

      <div className="w-full relative z-10 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-[#FFCC00] font-bold tracking-widest uppercase mb-4 text-sm">
            {t.hero.engineering_excellence}
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`font-bold mb-6 leading-tight tracking-tight max-w-5xl ${
              isSimplified 
                ? "font-[family-name:var(--font-ma-shan-zheng)]" 
                : isTraditional 
                  ? "font-artistic-tc" 
                  : ""
            } ${
              isChinese 
                ? "text-6xl md:text-8xl lg:text-9xl" 
                : "text-5xl md:text-7xl lg:text-8xl"
            }`}
          >
            {t.hero.title} <br/>
            <span className="text-[#FFCC00]">{t.hero.titleSuffix}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mt-12"
          >
            <PrimaryButton 
               href="/projects" 
            >
               {t.hero.discover}
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
