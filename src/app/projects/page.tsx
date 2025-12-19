"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/context/LanguageContext";

// Consolidated Data - Just listing the few real projects available
const featuredProjects = [
  { id: "801", category: "municipal", title: "Water Distribution System Renovation", image: "/images/projects/p801.jpg", desc: "Water supply engineering." },
  { id: "802", category: "municipal", title: "Rainwater and Sewage Pipeline Project", image: "/images/projects/p802.jpg", desc: "Sewage network engineering." },
  { id: "803", category: "municipal", title: "Planning Road and Resettlement Road", image: "/images/projects/p803.jpg", desc: "Road construction and supporting engineering." },
  { id: "804", category: "municipal", title: "Urban Sewage Network Dredging", image: "/images/projects/p804.jpg", desc: "Dredging of urban sewage networks." },
  { id: "805", category: "municipal", title: "Second Water Plant Backup Water Intake", image: "/images/projects/p805.jpg", desc: "Pipeline and pump house construction." },
];

export default function ProjectsPage() {
  const { t } = useLanguage();
  
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
    <div className="bg-white pt-24 pb-12">
      {/* Header */}
      <section 
        className="relative text-white py-40 px-6 md:px-12 min-h-[500px] flex items-center"
        style={{
          backgroundImage: 'url("/images/projects-header-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#003366]/85" />

        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block">{t.projects_page.tag}</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              {t.projects_page.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
              {t.projects_page.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6 md:px-12">
        <div className="w-full">
          {/* Grid - No Filter Tabs anymore to avoid showing empty categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {projects.map((project) => (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -5 }}
                      className="group cursor-pointer bg-white h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-0">
                        <img 
                          src={`${project.image}`}
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <span className="bg-[#FFCC00] text-[#003366] text-xs font-bold px-2 py-1 uppercase tracking-wider">
                              {t.projects_page.view_project_hover}
                           </span>
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col justify-between border border-t-0 border-gray-100">
                         <div>
                           <div className="text-xs font-bold text-[#FFCC00] uppercase tracking-wider mb-2">
                             {t.project_showcase.categories[project.category as keyof typeof t.project_showcase.categories]}
                           </div>
                           <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#003366] transition-colors leading-tight mb-3">
                             {project.title}
                           </h3>
                            <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed">
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
        </div>
      </section>
    </div>
  );
}
