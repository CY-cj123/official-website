"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, Truck, Droplets, Mountain, Trees, Hammer, Lightbulb } from "lucide-react"; 
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

// Custom Bridge Icon Component since Lucide doesn't have a specific one
const BridgeIcon = ({ className }: { className?: string }) => (
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
    <path d="M3 19h18" />
    <path d="M6 19v-9" />
    <path d="M18 19v-9" />
    <path d="M6 10c0 0 6 6 12 0" />
    <path d="M2 19h20" />
  </svg>
);

export function Services() {
  const { t } = useLanguage();
  
  // Define the 7 core business modules with specific Unsplash images
  // These represent CAPABILITIES, not necessarily current active projects
  const servicesConfig = [
    {
      id: "building",
      iconSrc: "/images/icons/building.webp",
      image: "/images/services/building.webp",
      href: "/services/building",
    },
    {
      id: "municipal",
      iconSrc: "/images/icons/road.webp",
      image: "/images/services/road.webp",
      href: "/services/municipal",
    },
    {
      id: "me",
      iconSrc: "/images/icons/me.webp",
      image: "/images/services/me.webp",
      href: "/services/me",
    },
    {
      id: "steel",
      iconSrc: "/images/icons/steel.webp",
      image: "/images/services/steel.webp",
      href: "/services/steel",
    },
    {
      id: "env",
      iconSrc: "/images/icons/landscape.webp",
      image: "/images/services/landscape.webp",
      href: "/services/env",
    },
    {
      id: "lighting",
      iconSrc: "/images/icons/lighting.webp",
      image: "/images/services/lighting.webp",
      href: "/services/lighting",
    },
    {
      id: "foundation",
      iconSrc: "/images/icons/foundation.webp",
      image: "/images/services/foundation.webp",
      href: "/services/foundation",
    },
  ];

  const [activeId, setActiveId] = useState(servicesConfig[0].id);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveId((prevId) => {
        const currentIndex = servicesConfig.findIndex((s) => s.id === prevId);
        const nextIndex = (currentIndex + 1) % servicesConfig.length;
        return servicesConfig[nextIndex].id;
      });
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isPaused]);

  // Helper to get translated service data safely
  const getServiceData = (id: string) => {
    // @ts-ignore
    return t.services_page.items[id] || { title: "", desc: "" };
  };

  const activeServiceConfig = servicesConfig.find(s => s.id === activeId) || servicesConfig[0];
  const activeServiceData = getServiceData(activeId);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">{t.intro.stats.areas}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            {t.services_page.desc}
          </p>
        </div>

        {/* Interactive Display Area */}
        <div 
          className="flex flex-col lg:flex-row gap-0 overflow-hidden shadow-2xl h-[800px] lg:h-[650px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Main Visual Area (Left/Top) */}
          <div className="relative flex-grow h-2/3 lg:h-full lg:w-3/4 overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url('${activeServiceConfig.image}')` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent lg:bg-gradient-to-r lg:from-primary/90 lg:via-primary/30 lg:to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 w-full lg:w-2/3 text-white z-10">
              <motion.div
                key={activeId + "text"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                   <div className="h-1 w-12 bg-[#FFCC00]" />
                   {/* Removed titleCN */}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {activeServiceData.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                  {activeServiceData.desc}
                </p>
                <Link 
                  href="/projects"
                  className="inline-flex items-center gap-2 text-[#FFCC00] font-bold uppercase tracking-wider hover:text-white transition-colors"
                >
                  {t.hero.discover} <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Navigation Sidebar (Right/Bottom) */}
          <div className="flex-shrink-0 lg:w-1/4 bg-slate-50 border-l border-gray-100 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible scrollbar-hide">
            {servicesConfig.map((service) => {
              const serviceData = getServiceData(service.id);
              const isActive = activeId === service.id;
              
              return (
              <button
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={cn(
                  "flex-1 lg:flex-none flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start gap-3 lg:gap-6 p-4 lg:p-6 transition-all duration-300 border-b border-gray-100 last:border-0 min-w-[120px] lg:min-w-0 text-left group hover:bg-[#FFCC00]/10",
                  isActive 
                    ? "bg-white border-l-4 border-l-[#FFCC00] shadow-inner lg:shadow-none" 
                    : "lg:border-l-4 lg:border-l-transparent opacity-70 hover:opacity-100"
                )}
              >
                <div className={cn(
                  "p-3 rounded-lg transition-colors duration-300",
                  isActive ? "bg-[#FFCC00] text-primary" : "bg-gray-200 text-gray-500 group-hover:bg-[#FFCC00]/20 group-hover:text-primary"
                )}>
                  <img src={service.iconSrc} alt="" className="h-6 w-6 lg:h-6 lg:w-6 object-contain" />
                </div>
                <div className="hidden lg:block">
                  <div className={cn("font-bold text-base leading-tight", isActive ? "text-primary" : "text-gray-600")}>
                    {serviceData.title}
                  </div>
                  {/* Removed titleCN */}
                </div>
                {/* Mobile Label */}
                <div className="lg:hidden text-xs font-bold text-center mt-1">
                    {serviceData.title}
                </div>
              </button>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
