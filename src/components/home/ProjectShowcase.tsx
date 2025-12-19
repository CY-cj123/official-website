"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/context/LanguageContext";

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
    <section className="py-24 bg-gray-50" ref={containerRef}>
      <div className="w-full px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block text-sm">
              {t.project_showcase.title}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#003366] leading-tight max-w-2xl">
              {t.project_showcase.subtitle}
            </h2>
          </div>
        </div>

        {/* Project Grid - No filtering, just showcasing the best work */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5 }}
                    className={cn(
                      "group cursor-pointer bg-white h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 relative"
                    )}
                  >
                    <div className="relative overflow-hidden bg-gray-100 aspect-[16/9]">
                      <Image 
                        src={`${project.image}`}
                        alt={project.title} 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <span className="bg-[#FFCC00] text-[#003366] text-xs font-bold px-2 py-1 uppercase tracking-wider">
                            {t.projects_page.view_project_hover}
                         </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-grow border border-t-0 border-gray-100">
                       <div>
                          <div className="text-xs font-bold uppercase tracking-wider mb-2 text-gray-400">
                             {t.project_showcase.categories[project.category as keyof typeof t.project_showcase.categories]}
                          </div>
                          <h3 className="text-xl font-bold leading-tight mb-3 transition-colors text-gray-900 group-hover:text-[#003366]">
                            {project.title}
                          </h3>
                          <p className="text-sm line-clamp-3 leading-relaxed text-gray-500">
                              {project.desc}
                          </p>
                       </div>
                    </div>
                  </motion.div>
                </DialogTrigger>
                
                {/* Modal */}
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
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
           <Link href="/projects" className="inline-flex items-center text-[#003366] font-bold hover:text-[#FFCC00] transition-colors group">
              {t.project_showcase.view_all.replace("{category}", "")} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
           </Link>
        </div>
      </div>
    </section>
  );
}
