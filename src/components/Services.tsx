import { motion } from "motion/react";
import { Car, Sofa, Compass, ShieldCheck, Waves, Sparkles } from "lucide-react";
import { ServiceItem } from "../types";

const carValetingImg = "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800";
const sofaCleaningImg = "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800";
const carpetCleaningImg = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800";
const fullValetImg = "https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=800";

interface ServicesProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export default function Services({ onOpenQuoteModal }: ServicesProps) {
  const services: ServiceItem[] = [
    {
      id: "car-valeting",
      title: "Interior Car Valeting",
      description: "Comprehensive mobile cabin detailing. We steam-clean fabrics, restore dash panels, sanitize vents, and clear all pet hairs.",
      benefits: [
        "Full upholstery extraction & steam sanitize",
        "Deep scrub dashboard, consoles & door panels",
        "Deep carpet vacuuming & fabric shampooing",
        "Streak-free glass inside & pleasant deodorization"
      ],
      image: carValetingImg,
      iconName: "Car",
    },
    {
      id: "full-valet",
      title: "Full Valet & Detailing",
      description: "Showroom-standard restoration. Includes paint protection gloss washes, leather restoration, wheels detailing and premium waxes.",
      benefits: [
        "Multi-stage exterior safe wash & gloss seal",
        "Exquisite leather treatment & deep conditioning",
        "Engine bay degreasing (optional safe wash)",
        "Premium hand polish & high-durability wax protection"
      ],
      image: fullValetImg,
      iconName: "Compass",
    },
    {
      id: "sofa-cleaning",
      title: "Sofa & Upholstery Cleaning",
      description: "Restore color and freshness to your fabric or leather couches, footstools, armchairs, and dining chairs.",
      benefits: [
        "In-depth analysis of fabric & colorfastness",
        "High-pressure water extraction & organic spot treatment",
        "Deodorizing to neutralize pet and spill odors",
        "Fabric protector application to deter future stains"
      ],
      image: sofaCleaningImg,
      iconName: "Sofa",
    },
    {
      id: "carpet-cleaning",
      title: "Carpet & Rug Cleaning",
      description: "Revive flat pile, remove deep-set allergens, and eliminate mud or drink stains on high-traffic carpets and rugs.",
      benefits: [
        "Heavy-traffic area pre-shampoo conditioning",
        "Industrial steam extraction pulling 95% of dampness",
        "Effective removal of mud, red wine, tea & grease stains",
        "Softens pile fibers & eliminates micro-dust mites"
      ],
      image: carpetCleaningImg,
      iconName: "Waves",
    },
    {
      id: "sanitisation",
      title: "Deep Cleaning & Sanitisation",
      description: "Commercial-grade chemical-free cleaning to eliminate 99.9% of germs, mold spores, and persistent bacteria.",
      benefits: [
        "Pressurized steam sanitization on tough surfaces",
        "Eco-friendly anti-viral & antibacterial cleaners",
        "Perfect for newly-bought cars or occupied rentals",
        "Refreshes general air quality inside cabin/room"
      ],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800",
      iconName: "ShieldCheck",
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "Car":
        return <Car className="w-6 h-6 text-sky-400" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-sky-400" />;
      case "Sofa":
        return <Sofa className="w-6 h-6 text-sky-400" />;
      case "Waves":
        return <Waves className="w-6 h-6 text-sky-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1 text-sky-400 text-xs font-bold uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Our Specialties
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Our Professional Cleaning Services
          </h2>
          <p className="font-sans text-slate-400 text-base sm:text-lg">
            We use industry-leading machinery and kid-safe eco solutions. Since we are fully mobile, we perform every service directly at your location!
          </p>
        </div>

        {/* Grid of services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col h-full bg-slate-900/40 rounded-2xl border border-slate-800/80 hover:border-sky-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/5 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden shrink-0">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.85]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-4 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-sky-400/20 shadow-md">
                  {getIcon(srv.iconName)}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-sky-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans h-12 overflow-hidden">
                    {srv.description}
                  </p>
                </div>

                {/* Benefits / Includes Checklist */}
                <div className="space-y-2 py-2 flex-grow">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-sky-400">
                    What&apos;s Included:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                    {srv.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-teal-400 font-bold mt-0.5 shrink-0">✓</span>
                        <span className="leading-tight">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button
                  onClick={() => onOpenQuoteModal(srv.title)}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-sky-500 text-sky-400 hover:text-slate-950 text-xs font-bold border border-sky-500/20 hover:border-sky-400 transition-all duration-300"
                >
                  Request Callback
                </button>
              </div>
            </motion.div>
          ))}

          {/* Quick Custom Contact Card at the end */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col h-full bg-gradient-to-br from-slate-900 to-sky-950 p-8 rounded-2xl border border-sky-500/20 items-center justify-center text-center relative overflow-hidden group"
          >
            {/* Ambient bubble */}
            <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            
            <div className="p-4 bg-sky-500/10 rounded-full border border-sky-400/20 mb-6 text-sky-400">
              <Sparkles className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
            </div>

            <h3 className="font-display font-extrabold text-2xl text-white mb-2">
              Need Something Else?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6 max-w-xs">
              Do you have a fleet of commercial vans, complex leather stains, caravan fabrics, or a bespoke valeting request? Talk to our Belfast cleaning specialists today!
            </p>

            <div className="space-y-3 w-full">
              <a
                href="tel:07745199990"
                className="block w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all duration-200"
              >
                Call: 07745 199990
              </a>
              <a
                href="https://wa.me/447745199990"
                target="_blank"
                rel="noreferrer"
                className="block w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-all duration-200"
              >
                Send WhatsApp Message
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
