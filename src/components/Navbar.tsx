import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = ["hero", "about", "services", "gallery", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Before & After", href: "#gallery", id: "gallery" },
    { label: "Testimonials", href: "#testimonials", id: "testimonials" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of fixed navbar
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
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-sky-950/40 py-3"
          : "bg-gradient-to-b from-slate-950/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-sky-500 to-teal-500 flex items-center justify-center font-display font-black text-slate-950 text-sm shadow-md shadow-sky-500/15 group-hover:scale-105 transition-transform duration-300 shrink-0">
              MMC
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl text-white tracking-wider group-hover:text-sky-400 transition-colors">
                MMC CLEANING <span className="text-sky-400">NI</span>
              </span>
              <span className="text-[10px] font-sans text-sky-300 tracking-widest uppercase font-medium -mt-1">
                Belfast Valeting & Cleaning
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`font-sans text-sm font-medium transition-colors hover:text-sky-400 relative py-1 ${
                    activeSection === item.id ? "text-sky-400" : "text-slate-200"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/447745199990"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-teal-400 hover:text-white border border-teal-500/30 hover:border-teal-400 bg-teal-500/5 hover:bg-teal-500/10 rounded-lg transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 fill-current text-teal-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:07745199990"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-md hover:shadow-sky-500/20 transition-all duration-200"
              >
                <Phone className="w-4 h-4 fill-current text-white/20" />
                <span>07745 199990</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 rounded-lg shadow-lg shadow-sky-500/15 hover:shadow-sky-500/25 transition-all duration-200"
              >
                Get Free Quote
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:07745199990"
              className="p-2 text-sky-400 hover:text-sky-300 bg-slate-800/80 rounded-full border border-sky-500/10"
              aria-label="Call MMC Cleaning"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-slate-950/98 backdrop-blur-lg lg:hidden transition-all duration-300 border-t border-slate-800 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="grid grid-cols-1 gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`flex items-center px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "bg-sky-500/10 text-sky-400"
                    : "text-slate-200 hover:bg-slate-900"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-6 space-y-3 px-4">
            <div className="text-center font-display font-semibold text-slate-400 text-xs tracking-wider uppercase mb-2">
              Book Today &amp; We Come to You!
            </div>
            
            <a
              href="tel:07745199990"
              className="flex items-center justify-center gap-3 w-full px-5 py-3.5 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-500 text-center shadow-lg shadow-sky-500/10"
            >
              <Phone className="w-5 h-5 text-white/50" />
              <span>Call: 07745 199990</span>
            </a>

            <a
              href="https://wa.me/447745199990"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full px-5 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 text-center shadow-lg shadow-emerald-500/10"
            >
              <MessageSquare className="w-5 h-5 text-white/50" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full px-5 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-teal-400 hover:from-sky-300 hover:to-teal-300 text-center shadow-lg shadow-sky-400/20"
            >
              Request Free Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
