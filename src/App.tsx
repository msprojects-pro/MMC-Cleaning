import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";
import { Phone, MessageSquare } from "lucide-react";

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const handleOpenQuoteModal = (serviceName: string = "") => {
    setPreselectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setPreselectedService("");
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-sky-500/30 selection:text-sky-300">
      {/* Sticky Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Single Page Sections */}
      <main className="relative">
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />
        <About />
        <Services onOpenQuoteModal={handleOpenQuoteModal} />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      {/* Premium footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Quick Quote Interactive Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedService={preselectedService}
      />

      {/* Mobile Floating Action Callout Buttons */}
      <div className="fixed bottom-4 inset-x-4 z-40 lg:hidden flex gap-3">
        <a
          href="tel:07745199990"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-xl shadow-sky-600/20 transition-all border border-sky-500/20"
        >
          <Phone className="w-4 h-4 text-white/70" />
          <span>Call: 07745 199990</span>
        </a>
        
        <a
          href="https://wa.me/447745199990"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/20 transition-all border border-emerald-500/20"
        >
          <MessageSquare className="w-4 h-4 fill-current text-white/70" />
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </div>
  );
}
