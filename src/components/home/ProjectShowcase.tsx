"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/context/LanguageContext";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Consolidated Data - Just listing the few real projects available
const featuredProjects = [
  { id: "801", category: "municipal", title: "Water Distribution System Renovation", image: "/images/projects/p801.webp", desc: "Water supply engineering." },
  { id: "802", category: "municipal", title: "Rainwater and Sewage Pipeline Project", image: "/images/projects/p802.webp", desc: "Sewage network engineering." },
  { id: "803", category: "municipal", title: "Planning Road and Resettlement Road", image: "/images/projects/p803.webp", desc: "Road construction and supporting engineering." },
  { id: "804", category: "municipal", title: "Urban Sewage Network Dredging", image: "/images/projects/p804.webp", desc: "Dredging of urban sewage networks." },
  { id: "805", category: "municipal", title: "Second Water Plant Backup Water Intake", image: "/images/projects/p805.webp", desc: "Pipeline and pump house construction." },
];

export function ProjectShowcase() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  // Map translations to projects
  const projects = featuredProjects.map(p => {
    const data = t.projects_data[p.id as keyof typeof t.projects_data] as any;
    return {
      ...p,
      title: data?.title || p.title,
      desc: data?.desc || p.desc,
      location: data?.location || t.project_showcase.location_value,
      date: data?.date || "2024"
    };
  });

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" ref={containerRef}>
      <div className="w-full">
        <div className="px-6 md:px-12 mb-12 flex flex-col items-center text-center">
          <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block text-sm">
            {t.project_showcase.title}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#003366] leading-tight max-w-2xl">
            {t.project_showcase.subtitle}
          </h2>
        </div>

        {/* Swiper Project Showcase */}
        <div className="w-full py-10">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={1}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="w-full !pb-14"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="w-[85vw] md:w-[600px] lg:w-[800px] h-[400px] md:h-[500px] relative transition-all duration-300 rounded-2xl overflow-hidden group">
                 {({ isActive }) => (
                   <Dialog>
                     <DialogTrigger asChild>
                       <div className={cn(
                         "w-full h-full relative cursor-pointer overflow-hidden rounded-2xl shadow-xl",
                         isActive ? "ring-4 ring-[#FFCC00]/50" : "brightness-75 hover:brightness-90 transition-all"
                       )}>
                         {/* Image */}
                         <Image 
                           src={project.image}
                           alt={project.title} 
                           fill
                           className="object-cover"
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                           priority={isActive}
                         />
                         
                         {/* Overlay Gradient - Always visible but stronger on bottom */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                         {/* Content Content */}
                         <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
                           <div className={cn(
                             "transform transition-all duration-500 ease-out",
                             isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-70"
                           )}>
                             <div className="text-xs font-bold uppercase tracking-wider mb-2 text-[#FFCC00]">
                               {t.project_showcase.categories[project.category as keyof typeof t.project_showcase.categories]}
                             </div>
                             <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4 drop-shadow-md">
                               {project.title}
                             </h3>
                             
                             {/* Description & Button - Only visible on active slide and refined interaction */}
                             <div className={cn(
                               "overflow-hidden transition-all duration-500 delay-100",
                               isActive ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                             )}>
                               <p className="text-gray-200 text-sm md:text-base line-clamp-2 mb-6 max-w-2xl">
                                  {project.desc}
                               </p>
                               <button className="inline-flex items-center bg-[#FFCC00] text-[#003366] px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-[#003366] transition-colors shadow-lg group-hover:scale-105 transform duration-300">
                                  {t.projects_page.view_project_hover} <ArrowRight className="ml-2 h-4 w-4" />
                               </button>
                             </div>
                           </div>
                         </div>
                       </div>
                     </DialogTrigger>
                     
                     {/* Reuse existing Modal design */}
                     <DialogContent className="!max-w-[90vw] w-[90vw] h-[85vh] bg-white p-0 overflow-hidden border-none" aria-describedby={undefined}>
                       <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                         <div className="h-64 lg:h-full bg-gray-100 relative min-h-[300px]">
                            <img 
                               src={project.image} 
                               alt={project.title} 
                               className="absolute inset-0 w-full h-full object-cover"
                             />
                         </div>
                         <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white overflow-y-auto">
                           <span className="text-[#FFCC00] font-bold tracking-widest uppercase text-sm mb-6">{t.project_showcase.detail_title}</span>
                           <DialogHeader>
                             <DialogTitle className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] mb-8 leading-tight">
                               {project.title}
                             </DialogTitle>
                           </DialogHeader>
                           <div className="space-y-6 text-gray-600 text-lg">
                             <p className="leading-relaxed">{project.desc}</p>
                             <div className="grid grid-cols-2 gap-8 mt-8 pt-8 border-t border-gray-100">
                                <div>
                                   <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t.project_showcase.location_label}</div>
                                   <div className="font-bold text-gray-900 text-xl">{project.location}</div>
                                </div>
                                <div>
                                   <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{t.project_showcase.completion_label}</div>
                                   <div className="font-bold text-gray-900 text-xl">{project.date}</div>
                                </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </DialogContent>
                   </Dialog>
                 )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 text-center">
           <Link href="/projects" className="inline-flex items-center text-[#003366] font-bold hover:text-[#FFCC00] transition-colors group">
              {t.project_showcase.view_all.replace("{category}", "")} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
           </Link>
        </div>
      </div>
    </section>
  );
}
