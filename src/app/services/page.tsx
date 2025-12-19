"use client";

import { motion } from "framer-motion";
import { ArrowRight, Settings } from "lucide-react";
import Link from "next/link";
import { PrimaryButton } from "@/components/ui/primary-button";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    { 
      id: "building", 
      icon: "/images/icons/building.png", 
      title: t.services_page.items.building.title, 
      desc: t.services_page.items.building.desc,
      image: "/images/services/building.jpg",
      capabilities: t.services_page.capabilities_list.building
    },
    { 
      id: "municipal", 
      icon: "/images/icons/road.png", 
      title: t.services_page.items.municipal.title, 
      desc: t.services_page.items.municipal.desc,
      image: "/images/services/road.jpg",
      capabilities: t.services_page.capabilities_list.municipal
    },
    { 
      id: "me", 
      icon: "/images/icons/me.png", 
      title: t.services_page.items.me.title, 
      desc: t.services_page.items.me.desc,
      image: "/images/services/me.jpg",
      capabilities: t.services_page.capabilities_list.me
    },
    { 
      id: "steel", 
      icon: "/images/icons/steel.png", 
      title: t.services_page.items.steel.title, 
      desc: t.services_page.items.steel.desc,
      image: "/images/services/steel.jpg",
      capabilities: t.services_page.capabilities_list.steel
    },
    { 
      id: "env", 
      icon: "/images/icons/landscape.png", 
      title: t.services_page.items.env.title, 
      desc: t.services_page.items.env.desc,
      image: "/images/services/landscape.jpg",
      capabilities: t.services_page.capabilities_list.env
    },
    { 
      id: "lighting", 
      icon: "/images/icons/lighting.png", 
      title: t.services_page.items.lighting.title, 
      desc: t.services_page.items.lighting.desc,
      image: "/images/services/lighting.jpg",
      capabilities: t.services_page.capabilities_list.lighting
    },
    { 
      id: "foundation", 
      icon: "/images/icons/foundation.png", 
      title: t.services_page.items.foundation.title, 
      desc: t.services_page.items.foundation.desc,
      image: "/images/services/foundation.jpg",
      capabilities: t.services_page.capabilities_list.foundation
    }
  ];

  return (
    <div className="bg-white pt-24 pb-12">
      {/* Header */}
      <section className="relative bg-[#003366] text-white py-40 px-6 md:px-12 overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/services-header-bg.jpg")' }}
          />
          <div className="absolute inset-0 bg-[#003366]/85" />
        </div>

        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block">{t.services_page.tag}</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              {t.services_page.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
              {t.services_page.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services List */}
      <div className="w-full">
        {services.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id} 
            className={`py-24 px-6 md:px-12 scroll-mt-20 relative overflow-hidden ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            {/* Technical Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]" 
                 style={{
                    backgroundImage: `linear-gradient(#003366 1px, transparent 1px), linear-gradient(90deg, #003366 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                 }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-8xl mx-auto relative z-10">
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}
              >
                <div className="mb-6">
                   <div 
                      className="h-20 w-20 bg-[#003366]"
                      style={{
                        maskImage: `url(${service.icon})`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskImage: `url(${service.icon})`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center'
                      }}
                   />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#003366] mb-6 tracking-tight">
                   {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                   {service.desc}
                   <br className="mb-4"/>
                   {t.services_page.general_desc_suffix}
                </p>
                
                <div className="mb-10">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{t.services_page.key_capabilities}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#003366] font-medium">
                        <Settings className="h-4 w-4 text-[#FFCC00] flex-shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <PrimaryButton 
                   href={`/projects?category=${service.id}`}
                   icon={<img src={service.icon} alt="" className="w-7 h-7 object-contain brightness-0 invert" />}
                >
                   {t.services_page.view_projects}
                </PrimaryButton>
              </motion.div>

              {/* Image Content */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`relative h-[500px] overflow-hidden shadow-xl ${index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}`}
              >
                 <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/40 to-transparent" />
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
