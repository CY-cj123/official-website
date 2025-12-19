"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Using specific Unsplash images for Municipal Engineering
const projects = [
  {
    id: 1,
    title: "Building Construction",
    category: "Projects",
    size: "large",
    image: "/images/services/building.webp",
    href: "/services/building"
  },
  {
    id: 2,
    title: "Municipal Public Works",
    category: "Infrastructure",
    size: "small",
    image: "/images/services/road.webp",
    href: "/services/municipal"
  },
  {
    id: 3,
    title: "Electromechanical Engineering",
    category: "Expertise",
    size: "small",
    image: "/images/services/me.webp",
    href: "/services/me"
  },
  {
    id: 4,
    title: "Steel Structure Engineering",
    category: "Structure",
    size: "small",
    image: "/images/services/steel.webp",
    href: "/services/steel"
  },
  {
    id: 5,
    title: "Environmental Protection",
    category: "Sustainability",
    size: "large",
    image: "/images/services/landscape.webp",
    href: "/services/env"
  },
  {
    id: 6,
    title: "Urban & Road Lighting",
    category: "Technology",
    size: "small",
    image: "/images/services/lighting.webp",
    href: "/services/lighting"
  },
  {
    id: 7,
    title: "Ground Foundation Engineering",
    category: "Foundation",
    size: "small",
    image: "/images/services/foundation.webp",
    href: "/services/foundation"
  }
];

export function ProjectGrid() {
  return (
    <section className="bg-white pb-24">
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative group overflow-hidden aspect-[16/10] cursor-pointer",
                project.size === "large" ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              <Link href={project.href} className="block w-full h-full">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="inline-block bg-[#FFCC00] text-[#003366] text-xs font-bold uppercase tracking-wider px-3 py-1 mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight group-hover:underline decoration-4 underline-offset-8 decoration-[#FFCC00]">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
