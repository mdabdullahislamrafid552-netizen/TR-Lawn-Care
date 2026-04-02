import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesList } from '../data/services';

export default function Services() {
  return (
    <div className="bg-stone-50 min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-emerald-800 font-medium tracking-widest uppercase text-xs mb-6"
        >
          Our Services
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-medium text-stone-950 tracking-tight leading-none"
        >
          Expertise.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-stone-500 font-light mt-10 max-w-2xl leading-relaxed"
        >
          A comprehensive suite of property maintenance services designed to elevate your outdoor space.
        </motion.p>
      </div>

      <div className="border-t border-stone-200">
        {servicesList.map((service, index) => (
          <Link 
            key={service.id}
            to={`/services/${service.id}`}
            className="group block border-b border-stone-200 hover:bg-white transition-colors duration-700 relative overflow-hidden"
          >
            {/* Hover Image Reveal (Desktop) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none z-0 scale-95 group-hover:scale-100 hidden lg:block rounded-sm overflow-hidden shadow-2xl">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-stone-900/10"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center mb-8 md:mb-0">
                <span className="text-sm font-medium text-stone-300 w-16 hidden md:block font-serif italic">0{index + 1}</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-stone-300 group-hover:text-stone-950 transition-colors duration-700 tracking-tight">
                  {service.title}
                </h2>
              </div>
              <div className="flex items-center justify-between md:w-1/3">
                <p className="text-stone-500 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block font-light leading-relaxed">
                  {service.shortDesc}
                </p>
                <div className="w-16 h-16 rounded-full border border-stone-200 group-hover:bg-emerald-900 group-hover:border-emerald-900 flex items-center justify-center transition-all duration-700 shrink-0">
                  <ArrowRight className="w-6 h-6 text-stone-300 group-hover:text-stone-50 transform -rotate-45 group-hover:rotate-0 transition-all duration-700" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
