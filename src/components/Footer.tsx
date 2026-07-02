import React from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 font-sans pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-900 pb-12 mb-12">
          
          {/* Logo & Info column */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#hero"
              onClick={(e) => handleScrollTo(e, "#hero")}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-sky-500 to-teal-500 flex items-center justify-center font-display font-black text-slate-950 text-sm shadow-md shadow-sky-500/15 group-hover:scale-105 transition-transform duration-300 shrink-0">
                MMC
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white tracking-wider">
                  MMC CLEANING <span className="text-sky-400">NI</span>
                </span>
                <span className="text-[10px] text-sky-300 tracking-widest uppercase font-medium -mt-1">
                  Belfast Mobile Cleaning
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We provide premier mobile interior car valeting, high-end sofa, carpet and rug deep extraction cleaning across Belfast and surrounding areas. Fully insured, commercial grade machinery, and 100% kid &amp; pet friendly.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/447745199990"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-900 hover:bg-teal-500/20 text-slate-400 hover:text-teal-400 border border-slate-800 hover:border-teal-500/30 transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </a>
              <a
                href="tel:07745199990"
                className="p-2.5 rounded-full bg-slate-900 hover:bg-sky-500/20 text-slate-400 hover:text-sky-400 border border-slate-800 hover:border-sky-500/30 transition-all"
                aria-label="Call Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "#hero" },
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Before & After", href: "#gallery" },
                { label: "Client Reviews", href: "#testimonials" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Upholstery &amp; Valeting
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={onOpenQuoteModal}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Interior Car Valeting (Mobile)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuoteModal}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Full Valet &amp; Auto Detailing
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuoteModal}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Sofa &amp; Armchair Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuoteModal}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Deep Carpet Extraction
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuoteModal}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Deep Steam &amp; Sanitisation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Belfast Head Office
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span>Belfast, Co. Down &amp; Antrim, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                <a href="tel:07745199990" className="hover:text-sky-400 transition-colors">
                  07745 199990
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <a
                  href="mailto:mmccleaning@hotmail.com"
                  className="hover:text-sky-400 transition-colors break-all"
                >
                  mmccleaning@hotmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} MMC Cleaning NI. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
