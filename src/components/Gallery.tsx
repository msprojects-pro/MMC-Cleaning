import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Image as ImageIcon, Camera } from "lucide-react";
import { GalleryItem } from "../types";

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | "valeting" | "upholstery" | "carpet">("all");

  const items: GalleryItem[] = [
    {
      id: "gal-1",
      title: "SUV Cabin Deep Steam",
      category: "valeting",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
      description: "Full interior sanitization, steam-extraction on fabric seats, dog hair extraction, and dashboard polish.",
    },
    {
      id: "gal-2",
      title: "Designer Fabric Sectional",
      category: "upholstery",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
      description: "Coffee and beverage stain removal from a luxury family sofa, utilizing specialized pH-neutral formulas.",
    },
    {
      id: "gal-3",
      title: "Hall & Stairs Wool Carpet",
      category: "carpet",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      description: "Lifted crushed pile fibers, extracted black foot-traffic tracking lines, and neutralized stubborn musty smells.",
    },
    {
      id: "gal-4",
      title: "Luxury Leather Steering & Seat",
      category: "valeting",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=800",
      description: "Dirt and oil build-up removal on leather components. Restored original non-greasy matte finish and soft grip.",
    },
  ];

  const filteredItems = filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1 text-teal-400 text-xs font-bold uppercase tracking-widest bg-teal-500/10 px-3 py-1 rounded-full">
            <Camera className="w-3.5 h-3.5" /> Direct Proof
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            See Our Professional Work
          </h2>
          <p className="font-sans text-slate-400 text-base sm:text-lg">
            Browse a showcase of our high-quality cleaning transformations. Meticulous care, premium equipment, and outstanding results.
          </p>

          {/* Filter Categories Menu */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {(["all", "valeting", "upholstery", "carpet"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  filter === cat
                    ? "bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/15"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                }`}
              >
                {cat === "all" ? "All Results" : cat === "valeting" ? "Car Valeting" : cat === "upholstery" ? "Sofa & Upholstery" : "Carpet Cleaning"}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col space-y-4 bg-slate-950/40 p-5 rounded-3xl border border-slate-800/60 overflow-hidden"
              >
                {/* Clean Work Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur text-sky-400 px-2.5 py-1 rounded-md border border-slate-800">
                    {item.category === "valeting" ? "Valeting" : item.category === "upholstery" ? "Upholstery" : "Carpet"}
                  </span>
                </div>

                {/* Info Text */}
                <div className="px-1 py-1">
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Prompt Card */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-950 to-sky-950 border border-sky-500/10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex p-3 bg-sky-500/10 rounded-full text-sky-400 border border-sky-500/20">
            <ImageIcon className="w-6 h-6" />
          </div>
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
            Want Showroom Results for Your Car, Carpet or Couch?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Stains and dust accumulate deep inside fabrics over time, dulling colors and harboring allergens. We can restore them to brand new in a single visit!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Book an Appointment
            </a>
            <a
              href="tel:07745199990"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-700 transition-colors"
            >
              Ask an Expert: 07745 199990
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
