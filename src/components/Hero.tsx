import { motion } from "motion/react";
import { Phone, MessageSquare, Star, Sparkles, ShieldCheck, MapPin } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1600";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-24 pb-16">
      {/* Background Image with advanced overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Premium Mobile Detailing & Sofa Cleaning Service"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.35]"
          referrerPolicy="no-referrer"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 to-transparent" />
        
        {/* Dynamic ambient background glowing light */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            {/* Top Tag / Alert */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400 fill-current animate-pulse" />
              <span>We Come To You — Mobile Valeting Belfast</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight"
              >
                Sparkling Clean <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-teal-400">
                  Valeting &amp; Deep Cleaning
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed"
              >
                MMC Cleaning NI provides professional mobile interior car valeting, high-end sofa, upholstery, and carpet cleaning. Based in Belfast, our certified experts deliver showroom results right to your door.
              </motion.p>
            </div>

            {/* Core Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
            >
              <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm p-3.5 rounded-xl">
                <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Belfast &amp; Co. Down</h4>
                  <p className="text-xs text-slate-400">Full Mobile Service</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm p-3.5 rounded-xl">
                <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Fully Insured</h4>
                  <p className="text-xs text-slate-400">Trained Cleaners</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm p-3.5 rounded-xl">
                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-current text-amber-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">5-Star Rated</h4>
                  <p className="text-xs text-slate-400">Competitive Prices</p>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-xl font-display font-bold text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-teal-400 hover:from-sky-300 hover:to-teal-300 transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-sky-500/10 text-center"
              >
                Request a Free Quote
              </button>

              <a
                href="https://wa.me/447745199990"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-display font-bold text-white bg-teal-600/20 hover:bg-teal-600/30 border border-teal-500/40 hover:border-teal-400 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                <MessageSquare className="w-5 h-5 text-teal-400 fill-current" />
                <span>WhatsApp Quote</span>
              </a>

              <a
                href="tel:07745199990"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-display font-semibold text-slate-300 hover:text-white hover:bg-slate-900 transition-colors text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call 07745 199990</span>
              </a>
            </motion.div>
          </div>

          {/* Quick Hero Banner Badge Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-slate-900/60 border border-sky-500/10 p-6 rounded-2xl backdrop-blur-md relative"
            >
              {/* Highlight card sparkle */}
              <div className="absolute top-0 right-0 -mr-2 -mt-2 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-xs animate-bounce">
                %
              </div>
              
              <h3 className="font-display font-extrabold text-xl text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                Autumn Special Offer
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Combine an <span className="text-white font-semibold">Interior Valet</span> and a <span className="text-white font-semibold">Sofa/Carpet Clean</span> for an exclusive discount!
              </p>
              
              <div className="border-t border-slate-800/80 pt-4 space-y-3 text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Valeting Price Match</span>
                  <span className="text-sky-400 font-semibold">Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Avg. Sofa Clean Duration</span>
                  <span className="text-sky-400 font-semibold">60 - 90 mins</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Available Across Belfast</span>
                  <span className="text-sky-400 font-semibold">7 Days/Week</span>
                </div>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="mt-6 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all duration-200"
              >
                Inquire About Offer
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
