"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { InteractiveButton } from "@/components/ui/interactive-button";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";

const MessageIcon = ({ className }: { className?: string }) => (
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
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 10h.01" />
    <path d="M12 10h.01" />
    <path d="M16 10h.01" />
  </svg>
);

export default function ContactPage() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white pt-24 pb-12">
      {/* Header */}
      <section 
        className="relative text-white py-40 px-6 md:px-12 min-h-[600px] flex items-center"
        style={{
          backgroundImage: 'url("/images/contact-header-bg.webp")',
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
            <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block">{t.contact.get_in_touch}</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              {t.contact.start_project}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
              {t.contact.ready_text}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 md:p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-[#003366] mb-2">{t.contact.send_message}</h2>
              <p className="text-gray-600 mb-8">{t.contact.form_desc}</p>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 text-green-800 p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 bg-green-100 flex items-center justify-center">
                      <Send className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p>Thank you for contacting us. We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                        {t.contact.first_name} <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="firstName" 
                        name="firstName" 
                        value={formState.firstName} 
                        onChange={handleChange} 
                        required 
                        className="bg-white border-gray-300 focus:border-[#003366]" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                        {t.contact.last_name} <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="lastName" 
                        name="lastName" 
                        value={formState.lastName} 
                        onChange={handleChange} 
                        required 
                        className="bg-white border-gray-300 focus:border-[#003366]" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                        {t.contact.email} <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formState.email} 
                        onChange={handleChange} 
                        required 
                        className="bg-white border-gray-300 focus:border-[#003366]" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                        {t.contact.phone}
                      </label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        value={formState.phone} 
                        onChange={handleChange} 
                        className="bg-white border-gray-300 focus:border-[#003366]" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                      {t.contact.message} <span className="text-red-500">*</span>
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formState.message} 
                      onChange={handleChange} 
                      required 
                      className="bg-white border-gray-300 focus:border-[#003366]" 
                    />
                  </div>
                  
                  <PrimaryButton 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full"
                    icon={<MessageIcon className="w-5 h-5" />}
                  >
                    {isSubmitting ? "Sending..." : t.contact.send_btn}
                  </PrimaryButton>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
               <h2 className="text-3xl font-bold text-[#003366] mb-8">{t.contact.info_title}</h2>
               <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                 {t.hero.subtitle}
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="flex items-start">
                     <div className="bg-blue-50 p-3 mr-6 text-[#003366]">
                        <MapPin className="h-6 w-6" />
                     </div>
                     <div>
                        <h3 className="font-bold text-[#003366] text-lg mb-1">{t.contact.headquarters}</h3>
                        <p className="text-gray-600">
                          {t.footer.address}
                        </p>
                     </div>
                  </div>

                  <div className="flex items-start">
                     <div className="bg-blue-50 p-3 mr-6 text-[#003366]">
                        <Mail className="h-6 w-6" />
                     </div>
                     <div>
                        <h3 className="font-bold text-[#003366] text-lg mb-1">{t.contact.email}</h3>
                        <p className="text-gray-600">info@changyuan-group.com</p>
                     </div>
                  </div>

                  <div className="flex items-start">
                     <div className="bg-blue-50 p-3 mr-6 text-[#003366]">
                        <Phone className="h-6 w-6" />
                     </div>
                     <div>
                        <h3 className="font-bold text-[#003366] text-lg mb-1">{t.contact.phone}</h3>
                        <p className="text-gray-600">+86 373 888 8888</p>
                     </div>
                  </div>

                  <div className="flex items-start">
                     <div className="bg-blue-50 p-3 mr-6 text-[#003366]">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                           <path d="M21.35 11.1h-.08c.03-.33.05-.67.05-1.01 0-4.78-4.33-8.66-9.66-8.66C6.33 1.43 2 5.31 2 11.09c0 4.78 4.33 8.66 9.66 8.66.34 0 .67-.02 1.01-.05 1.64 2.78 5.37 3.25 5.37 3.25-.92-1.25-1.37-2.67-1.37-2.67.92-1.08 1.47-2.4 1.47-3.88 0-.11 0-.22-.01-.33zm-14.19-2.83c.72 0 1.31.59 1.31 1.31 0 .72-.59 1.31-1.31 1.31s-1.31-.59-1.31-1.31c0-.72.59-1.31 1.31-1.31zm3.72-3.4c.72 0 1.31.59 1.31 1.31 0 .72-.59 1.31-1.31 1.31s-1.31-.59-1.31-1.31c0-.72.59-1.31 1.31-1.31zm3.72 3.4c.72 0 1.31.59 1.31 1.31 0 .72-.59 1.31-1.31 1.31s-1.31-.59-1.31-1.31c0-.72.59-1.31 1.31-1.31z" />
                        </svg>
                     </div>
                     <div>
                        <h3 className="font-bold text-[#003366] text-lg mb-1">{t.contact.wechat}</h3>
                        <p className="text-gray-600">{t.contact.official_account}</p>
                     </div>
                  </div>
               </div>

               {/* Map Integration */}
               <div className="w-full h-96 bg-gray-100 overflow-hidden relative shadow-md border border-gray-200">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://www.openstreetmap.org/export/embed.html?bbox=114.7000%2C35.1800%2C114.7700%2C35.2400&amp;layer=mapnik&amp;marker=35.2125%2C114.7350" 
                    style={{ border: 0 }}
                    title="Company Location"
                  ></iframe>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-2 justify-center pointer-events-none">
                   <div className="pointer-events-auto">
                     <a 
                        href="https://map.baidu.com/search/%E6%B2%B3%E5%8D%97%E7%9C%81%E6%96%B0%E4%B9%A1%E5%B8%82%E9%95%BF%E5%9E%A3%E5%B8%82%E8%92%B2%E8%A5%BF%E5%8C%BA%E5%8D%AB%E5%8D%8E%E5%A4%A7%E9%81%93%E5%8C%97%E5%8D%81%E4%B8%83%E5%B7%B79%E5%8F%B7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#003366] border border-gray-200 font-bold transition-all duration-300 hover:bg-[#FFCC00] hover:border-[#FFCC00] hover:text-[#003366] shadow-md hover:shadow-lg"
                     >
                        {t.contact.open_baidu}
                     </a>
                   </div>
                   <div className="pointer-events-auto">
                     <a 
                        href="https://ditu.amap.com/search?query=%E6%B2%B3%E5%8D%97%E7%9C%81%E6%96%B0%E4%B9%A1%E5%B8%82%E9%95%BF%E5%9E%A3%E5%B8%82%E8%92%B2%E8%A5%BF%E5%8C%BA%E5%8D%AB%E5%8D%8E%E5%A4%A7%E9%81%93%E5%8C%97%E5%8D%81%E4%B8%83%E5%B7%B79%E5%8F%B7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#003366] border border-gray-200 font-bold transition-all duration-300 hover:bg-[#FFCC00] hover:border-[#FFCC00] hover:text-[#003366] shadow-md hover:shadow-lg"
                     >
                        {t.contact.open_gaode}
                     </a>
                   </div>
                </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}