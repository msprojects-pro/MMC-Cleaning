import { motion } from "motion/react";
import { Star, Quote, MessageSquare, CheckCircle } from "lucide-react";
import { TestimonialItem } from "../types";

export default function Testimonials() {
  const reviews: TestimonialItem[] = [
    {
      id: "rev-1",
      name: "Gareth S.",
      location: "Belfast City Centre",
      rating: 5,
      service: "Interior Car Valeting",
      text: "MMC Cleaning did an absolute miracle on my BMW! With two kids and a golden retriever, the seats were covered in spills and embedded dog hair. They arrived on time, were super professional, and left the car interior looking and smelling like it just rolled off the showroom floor. Highly recommend their mobile service!",
      date: "May 2026",
    },
    {
      id: "rev-2",
      name: "Sarah McC.",
      location: "Lisburn",
      rating: 5,
      service: "Sofa & Upholstery Cleaning",
      text: "I was about to buy a new grey fabric corner sofa because of some bad coffee stains, but decided to try MMC first. Wow! The extraction machine they used pulled out all the stains and dirt in under an hour. The sofa is completely fresh, colors are vibrant again, and it dried really quickly. Fantastic competitive price too.",
      date: "June 2026",
    },
    {
      id: "rev-3",
      name: "Mark T.",
      location: "Holywood",
      rating: 5,
      service: "Carpet & Rug Cleaning",
      text: "Had our hall, stairs, landing and living room carpets cleaned by the team. They lifted all the heavy traffic lanes and flattened pile. The level of dirt they extracted was eye-opening! Extremely thorough work, pleasant guys, and completely hassle-free since they bring their own power and water.",
      date: "June 2026",
    },
    {
      id: "rev-4",
      name: "Emily R.",
      location: "Newtownabbey",
      rating: 5,
      service: "Full Valet & Detailing",
      text: "Exceptional detailing work. The exterior safe wash left a glass-like shine and the hand wax is still bead-cleaning rain after 3 weeks. They spent hours cleaning every single nook, cranny, and plastic panel inside. The absolute highest quality mobile valeting in Northern Ireland.",
      date: "April 2026",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-sky-400 text-xs font-bold uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full">
            <MessageSquare className="w-3.5 h-3.5" /> 5-Star Reviews
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Loved by Belfast Locals
          </h2>
          <p className="font-sans text-slate-400 text-base sm:text-lg">
            Don&apos;t just take our word for it—read reviews from home owners and car enthusiasts across Northern Ireland.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-8 bg-slate-900/40 rounded-2xl border border-slate-800/80 hover:border-sky-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote icon water-mark */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-slate-800/30 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-300 leading-relaxed italic font-sans">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Client Info Bar */}
              <div className="border-t border-slate-800/80 pt-6 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-teal-500 flex items-center justify-center text-slate-950 font-bold font-display text-sm shadow-md">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {rev.name}
                      <CheckCircle className="w-3.5 h-3.5 text-teal-400 fill-teal-400/10" />
                    </h4>
                    <p className="text-xs text-slate-400">{rev.location}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-sky-400 block tracking-wide">
                    {rev.service}
                  </span>
                  <span className="text-[10px] text-slate-500 font-sans block">{rev.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregated Rating Section */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 max-w-lg mx-auto flex flex-col sm:flex-row gap-6 items-center justify-center">
          <div className="text-center sm:text-left">
            <div className="text-3xl font-display font-black text-white">4.9 / 5.0</div>
            <div className="flex justify-center sm:justify-start items-center gap-1 my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-400">Based on 140+ local client reviews</p>
          </div>
          
          <div className="hidden sm:block h-12 w-px bg-slate-800" />

          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-sm font-bold text-white">Guaranteed Satisfaction</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              If you aren&apos;t 100% happy with any aspect of our clean, we&apos;ll do everything we can to make it right.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
