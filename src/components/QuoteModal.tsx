import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, Send, CheckCircle, Loader2, Star } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedService }: QuoteModalProps) {
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

  // Sync preselected service when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setFormData((prev) => ({
        ...prev,
        service: preselectedService || "Interior Car Valeting",
      }));
    }
  }, [isOpen, preselectedService]);

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

    console.log("MMC Cleaning NI - Quick Modal Quote Request Submitted:", formData);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                {/* Heading */}
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[10px] font-bold tracking-wider uppercase">
                    <Star className="w-3 h-3 text-sky-400 fill-current animate-pulse" />
                    <span>Instant Estimate Inquiry</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Request a Free Quote
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Leave your contact details and we will call or WhatsApp you in under 2 hours with pricing.
                  </p>
                </div>

                {/* Form fields */}
                <div className="space-y-4 pt-2">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                    />
                  </div>

                  {/* Phone & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 07745 199990"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">
                        Belfast Area / Postcode *
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        placeholder="e.g. BT9 / Lisburn"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Service selection */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">
                      Select Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                    >
                      {servicesList.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message/Details */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="e.g. 4-seater fabric sofa, 1 double mattress, red wine stain, car leather..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl font-display font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-teal-400 hover:from-sky-300 hover:to-teal-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-sky-500/10 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed text-sm"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                      <span>Sending Details...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Submit Quick Quote</span>
                    </>
                  )}
                </button>

                <div className="text-center">
                  <span className="text-[10px] text-slate-500">
                    We bring on-board power and water to your location! No mess, no hassle.
                  </span>
                </div>
              </form>
            ) : (
              <motion.div
                key="modal-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6 font-sans flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-teal-500/10 border-2 border-teal-500 flex items-center justify-center text-teal-400 mb-2 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you. We have logged your request. Our valeting unit is notified. We will call or message you in under 2 hours!
                  </p>
                </div>

                <div className="space-y-2 w-full pt-2">
                  <a
                    href="tel:07745199990"
                    className="block w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all duration-200"
                  >
                    Call Immediately: 07745 199990
                  </a>
                  <button
                    onClick={onClose}
                    className="block w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-all duration-200"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
