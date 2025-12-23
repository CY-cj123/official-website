"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/context/LanguageContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Consolidated Data - Real projects
const featuredProjects = [
  { id: "801", category: "municipal", title: "Water Distribution System Renovation", image: "/images/projects/p801.webp", desc: "Water supply engineering." },
  { id: "802", category: "municipal", title: "Rainwater and Sewage Pipeline Project", image: "/images/projects/p802.webp", desc: "Sewage network engineering." },
  { id: "803", category: "municipal", title: "Planning Road and Resettlement Road", image: "/images/projects/p803.webp", desc: "Road construction and supporting engineering." },
  { id: "804", category: "municipal", title: "Urban Sewage Network Dredging", image: "/images/projects/p804.webp", desc: "Dredging of urban sewage networks." },
  { id: "805", category: "municipal", title: "Second Water Plant Backup Water Intake", image: "/images/projects/p805.webp", desc: "Pipeline and pump house construction." },
];

export function ProjectShowcase() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

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
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="w-full">
        <div className="px-6 md:px-12 mb-12 flex flex-col items-center text-center">
          <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block text-sm">
            {t.project_showcase.title}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#003366] leading-tight max-w-2xl">
            {t.project_showcase.subtitle}
          </h2>
        </div>

        {/* Swiper Coverflow Carousel */}
        <div className="w-full py-10 relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.8}
            spaceBetween={30}
            loop={true}
            loopAdditionalSlides={3}
            breakpoints={{
              640: {
                slidesPerView: 1.8,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 280,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="project-showcase-swiper !pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer group shadow-2xl">
                      {/* Background Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                      {/* Non-active slide overlay (makes side slides darker) */}
                      <div 
                        className="absolute inset-0 bg-black/40 transition-opacity duration-500"
                        style={{ 
                          opacity: activeIndex === index ? 0 : 1 
                        }}
                      />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white z-10">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider mb-2 text-[#FFCC00]">
                            {t.project_showcase.categories[project.category as keyof typeof t.project_showcase.categories]}
                          </div>
                          <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-4 drop-shadow-md">
                            {project.title}
                          </h3>

                          {/* Show description and button only on active (center) slide */}
                          <div
                            className="transition-all duration-500 overflow-hidden"
                            style={{
                              maxHeight: activeIndex === index ? "300px" : "0",
                              opacity: activeIndex === index ? 1 : 0,
                            }}
                          >
                            <p className="text-gray-200 text-sm md:text-base line-clamp-2 mb-6 max-w-2xl">
                              {project.desc}
                            </p>
                            <button className="inline-flex items-center bg-[#FFCC00] text-[#003366] px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-[#003366] transition-colors shadow-lg">
                              {t.projects_page.view_project_hover} <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>

                  {/* Dialog Content */}
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

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .project-showcase-swiper {
          padding-left: 5vw !important;
          padding-right: 5vw !important;
        }

        .project-showcase-swiper .swiper-wrapper {
          align-items: center;
        }

        .project-showcase-swiper .swiper-slide {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 1 !important;
        }
        
        .project-showcase-swiper .swiper-slide:not(.swiper-slide-active) {
          filter: brightness(0.7);
          transform: scale(0.85);
        }
        
        .project-showcase-swiper .swiper-slide-active {
          filter: brightness(1);
          z-index: 10;
          transform: scale(1);
        }

        /* Ensure side slides are visible */
        .project-showcase-swiper .swiper-slide-prev,
        .project-showcase-swiper .swiper-slide-next {
          opacity: 1 !important;
          pointer-events: auto;
        }

        .project-showcase-swiper .swiper-pagination-bullet {
          background: #003366;
          opacity: 0.4;
          width: 10px;
          height: 10px;
        }

        .project-showcase-swiper .swiper-pagination-bullet-active {
          background: #FFCC00;
          opacity: 1;
          width: 12px;
          height: 12px;
        }

        /* Mobile optimization */
        @media (max-width: 768px) {
          .project-showcase-swiper {
            padding-left: 2vw !important;
            padding-right: 2vw !important;
          }
        }
      `}</style>
    </section>
  );
}
