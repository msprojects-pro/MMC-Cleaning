import { motion } from "motion/react";
import { Truck, Sparkles, Heart, Zap, Clock, ShieldAlert } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Truck className="w-6 h-6 text-sky-400" />,
      title: "100% Mobile Service",
      description: "We bring the showroom to you! We have on-board power and hot water setup, so we can clean your car anywhere—at home, work, or on-site.",
    },
    {
      icon: <Zap className="w-6 h-6 text-teal-400" />,
      title: "Advanced Extraction Equipment",
      description: "Our commercial-grade machinery injects eco-detergents deep into sofa and carpet fibers, vacuuming up 95% of moisture instantly.",
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      title: "Pet & Child Safe Solutions",
      description: "We use non-toxic, hypoallergenic cleaning solutions that destroy odor and bacteria while keeping your family and pets perfectly safe.",
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-400" />,
      title: "Flexible Scheduling",
      description: "Working late? No worries. We operate 7 days a week in Belfast and surrounding areas to fit perfectly around your busy schedule.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual/Showcase Grid on left */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 bg-slate-950/80 rounded-2xl border border-sky-500/10 shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl" />
              
              <h3 className="font-display font-extrabold text-2xl text-white mb-4">
                The MMC Difference
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Unlike traditional cleaning services, MMC Cleaning NI is built on ultimate client convenience and deep-clean hygiene. Whether it's restoring your vehicle's interior fabric or breathing fresh life into an old living room sofa, we utilize state-of-the-art steam extraction techniques to achieve remarkable results.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 shrink-0" />
                  <p className="text-xs text-slate-400">
                    <strong className="text-slate-200">Belfast-based:</strong> Proudly serving Belfast, Castlereagh, Lisburn, Newtownabbey, Holywood, and Bangor areas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 shrink-0" />
                  <p className="text-xs text-slate-400">
                    <strong className="text-slate-200">No Mess:</strong> We collect and dispose of waste water responsibly. No dynamic soap puddles left on your driveway.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 shrink-0" />
                  <p className="text-xs text-slate-400">
                    <strong className="text-slate-200">Quick Dry Times:</strong> Fast-acting dryers and industrial extractors ensure dry-times of just a few hours.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Coverage Alert Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-2xl bg-gradient-to-r from-sky-950/40 to-teal-950/40 border border-sky-400/10 flex gap-4 items-center"
            >
              <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Full Spill &amp; Stain Protection</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Accidental coffee spill or muddy pet prints? We specialize in stain extraction for ink, wine, mud, and persistent odors.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Content and Values on right */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-sky-400 text-xs font-bold uppercase tracking-widest block">
                Who We Are
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Belfast's Professional Mobile Detailing &amp; Carpet Specialists
              </h2>
              <p className="text-slate-300 font-sans text-base leading-relaxed">
                At MMC Cleaning NI, we believe that clean spaces promote happy minds. We have developed a reputation for unmatched quality of service, arriving on time, and delivering exceptional cleanliness for your cars and domestic upholstery.
              </p>
            </div>

            {/* Dynamic Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {values.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col gap-3 p-5 rounded-xl bg-slate-950/40 border border-slate-800/80 hover:border-sky-500/20 transition-all duration-300"
                >
                  <div className="p-2.5 bg-slate-900 rounded-lg w-fit">
                    {val.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{val.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
