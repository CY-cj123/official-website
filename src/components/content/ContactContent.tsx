"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { InteractiveButton } from "@/components/ui/interactive-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";

const LeafletMap = dynamic(() => import('@/components/ui/LeafletMap'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center text-gray-400">Loading Map...</div>
});

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

export function ContactContent() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mapLinks = {
    gaode: "https://www.amap.com/search?query=%E6%B2%B3%E5%8D%97%E7%9C%81%E9%95%BF%E5%9E%A3%E5%B8%82%E8%92%B2%E8%A5%BF%E5%8C%BA%E5%8D%AB%E5%8D%8E%E5%A4%A7%E9%81%93%E5%8C%9717%E5%B7%B79%E5%8F%B7",
    baidu: "https://map.baidu.com/search/%E6%B2%B3%E5%8D%97%E7%9C%81%E9%95%BF%E5%9E%A3%E5%B8%82%E8%92%B2%E8%A5%BF%E5%8C%BA%E5%8D%AB%E5%8D%8E%E5%A4%A7%E9%81%93%E5%8C%9717%E5%B7%B79%E5%8F%B7",
    google: "https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8D%97%E7%9C%81%E9%95%BF%E5%9E%A3%E5%B8%82%E8%92%B2%E8%A5%BF%E5%8C%BA%E5%8D%AB%E5%8D%8E%E5%A4%A7%E9%81%93%E5%8C%9717%E5%B7%B79%E5%8F%B7"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", company: "", email: "", phone: "", message: "" });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white pt-24 pb-12">
      {/* Header */}
      <section 
        className="relative text-white py-40 px-6 md:px-12 min-h-[500px] flex items-center"
        style={{
          backgroundImage: 'url("/images/contact-header-bg.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#003366]/85" />
        <div className="w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block">{t.contact_page.tag}</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              {t.contact_page.title}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t.contact_page.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#003366] mb-8">{t.contact_page.get_in_touch}</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#003366]/5 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#003366]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#003366] text-lg mb-2">{t.contact.headquarters}</h3>
                  <a 
                    href={mapLinks.gaode}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 font-medium hover:text-[#003366] transition-colors"
                  >
                    {t.footer.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#003366]/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#003366]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#003366] text-lg mb-2">{t.contact.phone}</h3>
                  <p className="text-gray-600 font-medium">+86 373 887 9569</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#003366]/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#003366]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#003366] text-lg mb-2">{t.contact.email}</h3>
                  <a href="mailto:contact@cychengjian.com" className="text-gray-600 hover:text-[#003366] transition-colors">
                    contact@cychengjian.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 flex flex-col h-[450px] relative">
              <LeafletMap 
                position={[35.22, 114.63]} 
                popupText={t.footer.address}
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-[#003366] mb-8">{t.contact_page.send_message}</h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 text-green-800 p-6 rounded-lg text-center border border-green-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">{t.contact_page.success_title}</h3>
                <p>{t.contact_page.success_desc}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">{t.contact_page.form.name}</label>
                <Input 
                  id="name" 
                  name="name" 
                  required 
                  value={formState.name}
                  onChange={handleChange}
                  placeholder={t.contact_page.form.name_ph}
                  className="bg-white border-gray-200 focus:border-[#003366] focus:ring-[#003366]" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-700">{t.contact_page.form.company}</label>
                <Input 
                  id="company" 
                  name="company" 
                  value={formState.company}
                  onChange={handleChange}
                  placeholder={t.contact_page.form.company_ph}
                  className="bg-white border-gray-200 focus:border-[#003366] focus:ring-[#003366]" 
                />
              </div>
            </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">{t.contact_page.form.email}</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={t.contact_page.form.email_ph}
                      className="bg-white border-gray-200 focus:border-[#003366] focus:ring-[#003366]" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">{t.contact_page.form.phone}</label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder={t.contact_page.form.phone_ph}
                      className="bg-white border-gray-200 focus:border-[#003366] focus:ring-[#003366]" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">{t.contact_page.form.message}</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={t.contact_page.form.message_ph}
                    className="min-h-[150px] bg-white border-gray-200 focus:border-[#003366] focus:ring-[#003366]" 
                  />
                </div>

                <InteractiveButton 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full justify-center py-4 text-base !bg-[#003366] !text-white !border-[#003366] [&_.text]:!mix-blend-normal hover:[&_.text]:!text-[#003366]"
                  icon={<MessageIcon className="w-5 h-5" />}
                >
                  {isSubmitting ? t.contact_page.form.sending : t.contact_page.form.send}
                </InteractiveButton>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
