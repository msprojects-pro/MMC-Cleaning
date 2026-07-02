import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: "Interior Car Valeting",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    "Interior Car Valeting",
    "Full Valet & Detailing",
    "Sofa & Upholstery Cleaning",
    "Carpet & Rug Cleaning",
    "Deep Cleaning & Sanitisation",
    "Other / Multi-Service Promo",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Console logging the actual data as requested
    console.log("MMC Cleaning NI - Contact Form Submitted:", formData);

    // Simulate server response
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        service: "Interior Car Valeting",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-sky-400 text-xs font-bold uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full">
            <Mail className="w-3.5 h-3.5" /> Direct Booking
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Request Your Free Quote
          </h2>
          <p className="font-sans text-slate-400 text-base sm:text-lg">
            Complete the form below, and we will get back to you with a free, no-obligation estimate within 2 hours!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Details & Info Card on Left */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">
                Get in Touch Directly
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Prefer direct communication? Call, text, or drop us a WhatsApp message. We are happy to answer any questions or book your slot instantly.
              </p>
            </div>

            {/* Quick Contact Lists */}
            <div className="space-y-4 font-sans">
              <a
                href="tel:07745199990"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-sky-500/20 transition-all duration-200 group"
              >
                <div className="p-3 bg-sky-500/10 text-sky-400 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                    Phone &amp; SMS Support
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                    07745 199990
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/447745199990"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-teal-500/20 transition-all duration-200 group"
              >
                <div className="p-3 bg-teal-500/10 text-teal-400 rounded-lg group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                    WhatsApp (Fast Reply)
                  </span>
                  <span className="text-sm font-bold text-teal-400">
                    Chat with MMC
                  </span>
                </div>
              </a>

              <a
                href="mailto:mmccleaning@hotmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-sky-500/20 transition-all duration-200 group"
              >
                <div className="p-3 bg-sky-500/10 text-sky-400 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                    Email Inquiries
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                    mmccleaning@hotmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="p-3 bg-slate-900 text-slate-400 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                    Operating Hours
                  </span>
                  <span className="text-sm font-bold text-white">
                    Mon - Sun: 8:00 AM - 8:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Functional Contact Form on Right */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/60 border border-slate-800/80 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6 font-sans"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. Gareth Stewart"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="e.g. 07745 199990"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="e.g. gareth@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                        />
                      </div>

                      {/* Location */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                          Your Location / Area *
                        </label>
                        <input
                          type="text"
                          name="location"
                          required
                          placeholder="e.g. East Belfast / Holywood"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Service selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                      >
                        {servicesList.map((service) => (
                          <option key={service} value={service} className="bg-slate-900 text-slate-200">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                        Details (Vehicle Model, Sofa seats, Carpet size, etc.)
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="e.g. Please quote me for cleaning a 3-seater fabric sofa and my Golf interior..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 rounded-xl font-display font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-teal-400 hover:from-sky-300 hover:to-teal-300 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-sky-500/10 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-slate-950" />
                          <span>Submit Quote Request</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    className="text-center py-12 px-4 space-y-6 font-sans flex flex-col items-center justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-teal-500/10 border-2 border-teal-500 flex items-center justify-center text-teal-400 mb-2 animate-bounce">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-white">
                        Quote Requested Successfully!
                      </h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to MMC Cleaning NI. We have received your inquiry. One of our Belfast valeting specialists will call or WhatsApp you in the next 2 hours!
                      </p>
                    </div>

                    <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl text-xs text-slate-400 w-full max-w-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="text-teal-400 font-bold">In Review (High Priority)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Staff Assigned:</span>
                        <span className="text-white">Mobile Unit 1</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
