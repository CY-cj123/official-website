"use client";

import { useRef, useEffect } from "react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const InfoIcon = ({ className }: { className?: string }) => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Counter = ({ value, label }: { value: string, label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix (e.g., "500+" -> 500, "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (isInView) {
      animate(count, numericValue, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, numericValue, count]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-5xl md:text-6xl font-bold text-[#FFCC00] mb-4 flex justify-center items-baseline tabular-nums tracking-tight">
        <motion.span>{rounded}</motion.span>
        <span className="text-3xl ml-1 font-medium">{suffix}</span>
      </div>
      <div className="flex justify-center mb-4">
         <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white/20 group-hover:border-b-[#FFCC00] transition-colors duration-300" />
      </div>
      <div className="text-sm text-gray-300 font-medium uppercase tracking-widest">{label}</div>
    </div>
  );
};

export function IntroSection() {
  const { t } = useLanguage();

  const stats = [
    { label: t.intro.stats.years, value: "20+" },
    { label: t.intro.stats.areas, value: "7+" },
    { label: t.intro.stats.qualifications, value: "3+" },
    { label: t.intro.stats.safety, value: "100%" },
  ];

  return (
    <section className="relative bg-[#111111] overflow-hidden pt-0 pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 grayscale"
          style={{ backgroundImage: 'url("/images/about-bg.webp")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#003366] via-transparent to-[#111111]" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="w-full px-6 md:px-12 relative z-10 pt-32">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-24">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
            >
                <h2 className="text-[#FFCC00] font-black text-3xl tracking-[0.1em] uppercase mb-2">{t.nav.about}</h2>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-10"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-relaxed max-w-4xl mx-auto">
                    {t.intro.text}
                </h3>
            </motion.div>

             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
             >
                 <PrimaryButton 
                    href="/about" 
                    icon={<InfoIcon className="w-5 h-5 text-white" />}
                 >
                    {t.common.read_more}
                 </PrimaryButton>
            </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          {stats.map((stat, index) => (
            <Counter key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
