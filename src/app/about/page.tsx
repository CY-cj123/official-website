"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function AboutPage() {
  const { t } = useLanguage();



  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white pt-24 pb-12">
      {/* Hero Section */}
      <section 
        className="relative text-white py-40 px-6 md:px-12 min-h-[600px] flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url("/images/about-header-bg.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#003366]/85" />

        <div className="w-full max-w-7xl mx-auto flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl z-10"
          >
            <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block">{t.about_page.tag}</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              {t.about_page.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
              {t.about_page.desc}
            </p>
          </motion.div>

          {/* Navigation Menu */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4 absolute right-0 top-1/2 -translate-y-1/2 w-80 pr-12 z-20"
          >
            <button 
              onClick={() => scrollToSection('profile')}
              className="w-full py-4 px-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-[#FFCC00] hover:text-[#003366] transition-all duration-300 shadow-lg text-left flex justify-between items-center group cursor-pointer"
            >
              {t.about_page.profile_title}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </button>
            <button 
              onClick={() => scrollToSection('qualifications')}
              className="w-full py-4 px-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-[#FFCC00] hover:text-[#003366] transition-all duration-300 shadow-lg text-left flex justify-between items-center group cursor-pointer"
            >
              {t.about_page.qualifications_title}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </button>
            <button 
              onClick={() => scrollToSection('honors')}
              className="w-full py-4 px-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-[#FFCC00] hover:text-[#003366] transition-all duration-300 shadow-lg text-left flex justify-between items-center group cursor-pointer"
            >
              {t.about_page.honors_title}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Corporate Profile Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <div id="profile">
            <h2 className="text-4xl font-bold text-[#003366] mb-8 text-center">{t.about_page.profile_title}</h2>
            <div className="mb-12 shadow-lg relative">
               <Image 
                 src="/images/real/company-signboard.webp" 
                 alt="Company Signboard" 
                 width={1200}
                 height={800}
                 className="w-full h-auto"
                 sizes="(max-width: 1024px) 100vw, 800px"
               />
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
              <p>
                {t.about_page.profile_p1}
              </p>
              <p>
                {t.about_page.profile_p2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section (Existing) */}
      <section id="qualifications" className="bg-white py-24 px-6 md:px-12">
         <div className="w-full">
            <h2 className="text-4xl font-bold text-[#003366] mb-12 text-center">{t.about_page.qualifications_title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Business License */}
               <div className="bg-gray-50 rounded-none overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                  <div className="h-64 bg-gray-200 relative overflow-hidden flex items-center justify-center group-hover:bg-[#003366]/5 transition-colors cursor-pointer">
                     <Dialog>
                        <DialogTrigger asChild>
                           <div className="relative w-full h-full p-4">
                             <Image 
                                src="/images/real/cert-business-license.webp" 
                                alt={t.about_page.certs.license.title} 
                                fill
                                className="object-contain hover:scale-105 transition-transform duration-500 -rotate-90"
                                sizes="(max-width: 768px) 100vw, 33vw"
                             />
                           </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none" aria-describedby={undefined}>
                           <div className="sr-only">
                             <DialogTitle>{t.about_page.certs.license.title}</DialogTitle>
                           </div>
                           <div className="relative w-full h-[80vh]">
                             <Image 
                               src="/images/real/cert-business-license.webp" 
                               alt={t.about_page.certs.license.title} 
                               fill
                               className="object-contain -rotate-90"
                             />
                           </div>
                        </DialogContent>
                     </Dialog>
                  </div>
                  <div className="p-8 flex-grow">
                     <h3 className="text-xl font-bold text-[#003366] mb-3">
                        {t.about_page.certs.license.title}
                     </h3>
                     <p className="text-gray-600 text-sm leading-relaxed">
                        {t.about_page.certs.license.desc}
                     </p>
                  </div>
               </div>

               {/* Qualification Certificate */}
               <div className="bg-gray-50 rounded-none overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                  <div className="h-64 bg-gray-200 relative overflow-hidden flex items-center justify-center group-hover:bg-[#003366]/5 transition-colors cursor-pointer">
                     <Dialog>
                        <DialogTrigger asChild>
                           <div className="relative w-full h-full p-4">
                             <Image 
                                src="/images/real/cert-qual-2030.webp" 
                                alt={t.about_page.certs.qualification.title} 
                                fill
                                className="object-contain hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                             />
                           </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none" aria-describedby={undefined}>
                           <div className="sr-only">
                             <DialogTitle>{t.about_page.certs.qualification.title}</DialogTitle>
                           </div>
                           <div className="relative w-full h-[80vh]">
                             <Image 
                               src="/images/real/cert-qual-2030.webp" 
                               alt={t.about_page.certs.qualification.title} 
                               fill
                               className="object-contain"
                             />
                           </div>
                        </DialogContent>
                     </Dialog>
                  </div>
                  <div className="p-8 flex-grow">
                     <h3 className="text-xl font-bold text-[#003366] mb-3">
                        {t.about_page.certs.qualification.title}
                     </h3>
                     <p className="text-gray-600 text-sm leading-relaxed">
                        {t.about_page.certs.qualification.desc}
                     </p>
                  </div>
               </div>

               {/* Safety Production License */}
               <div className="bg-gray-50 rounded-none overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                  <div className="h-64 bg-gray-200 relative overflow-hidden flex items-center justify-center group-hover:bg-[#003366]/5 transition-colors cursor-pointer">
                     <Dialog>
                        <DialogTrigger asChild>
                           <div className="relative w-full h-full p-4">
                             <Image 
                                src="/images/real/cert-safety-2027.webp" 
                                alt={t.about_page.certs.safety.title} 
                                fill
                                className="object-contain hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                             />
                           </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none" aria-describedby={undefined}>
                           <div className="sr-only">
                             <DialogTitle>{t.about_page.certs.safety.title}</DialogTitle>
                           </div>
                           <div className="relative w-full h-[80vh]">
                             <Image 
                               src="/images/real/cert-safety-2027.webp" 
                               alt={t.about_page.certs.safety.title} 
                               fill
                               className="object-contain"
                             />
                           </div>
                        </DialogContent>
                     </Dialog>
                  </div>
                  <div className="p-8 flex-grow">
                     <h3 className="text-xl font-bold text-[#003366] mb-3">
                        {t.about_page.certs.safety.title}
                     </h3>
                     <p className="text-gray-600 text-sm leading-relaxed">
                        {t.about_page.certs.safety.desc}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Honors Section */}
      <section id="honors" className="bg-gray-50 py-24 px-6 md:px-12">
        <div className="w-full max-w-6xl mx-auto">
           <div className="text-center mb-16">
              <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block">{t.about_page.awards_label}</span>
              <h2 className="text-4xl font-bold text-[#003366]">{t.about_page.honors_title}</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t.about_page.honors_desc}</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.about_page.honors_list?.map((honor, index) => (
                 <div key={index} className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                    <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                       {honor.image && (
                          <Image 
                            src={honor.image} 
                            alt={honor.title} 
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500" 
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                       )}
                    </div>
                    <div className="p-6">
                       <h3 className="text-lg font-bold text-[#003366] mb-2 line-clamp-2">{honor.title}</h3>
                       <div className="flex justify-between items-end">
                          <div className="text-sm text-gray-500">{honor.issuer}</div>
                          <div className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1">{honor.date}</div>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
