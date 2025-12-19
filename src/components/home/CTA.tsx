"use client";

import { InteractiveButton } from "@/components/ui/interactive-button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          Partner with Changyuan Chengjian Municipal Construction Engineering Co., Ltd. for world-class engineering solutions tailored to your needs. Let's build something extraordinary together.
        </p>
        <InteractiveButton 
           href="/contact"
           className="h-16 px-10 text-xl bg-[#FFCC00] text-[#003366] border-[#FFCC00] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 [&::before]:bg-[#003366] hover:text-white"
        >
          Get in Touch <ArrowRight className="h-6 w-6" />
        </InteractiveButton>
      </div>
    </section>
  );
}
