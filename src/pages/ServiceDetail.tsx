import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { servicesList } from '../data/services';
import { ArrowLeft, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesList.find(s => s.id === serviceId);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-stone-50 min-h-screen pb-32">
      {/* Breadcrumb & Back */}
      <div className="bg-stone-50/90 backdrop-blur-md border-b border-stone-200 py-6 sticky top-[88px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-stone-500 hover:text-stone-950 transition-colors text-xs font-medium uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-3" /> Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section for Service */}
      <div className="relative bg-stone-950 text-stone-50 h-[60vh] lg:h-[70vh] overflow-hidden flex items-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y1 }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center justify-center p-5 bg-stone-900/50 backdrop-blur-xl rounded-sm mb-10 border border-stone-800">
              <div className="text-emerald-500 opacity-80">{service.icon}</div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-stone-50 mb-8 tracking-tight leading-none">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed max-w-2xl">
              {service.shortDesc}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl font-serif font-medium text-stone-950 mb-10 tracking-tight">The TR Approach</h2>
            <div className="prose prose-xl text-stone-600 mb-20 max-w-none font-light leading-relaxed">
              <p>{service.fullDesc}</p>
            </div>
            
            <div className="bg-white rounded-sm p-12 border border-stone-200">
              <h3 className="text-3xl font-serif font-medium text-stone-950 mb-10 tracking-tight">Why choose us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {['Reliable, on-time service', 'Professional-grade equipment', 'Attention to detail', 'Satisfaction guaranteed', 'Fully insured', 'Local family-owned'].map((item, i) => (
                  <div key={i} className="flex items-start text-stone-700">
                    <div className="text-emerald-700 mr-4 shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-light text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sticky Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="sticky top-40 bg-stone-950 rounded-sm p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/20 blur-[80px] rounded-full"></div>
              <h3 className="text-3xl font-serif font-medium text-stone-50 mb-6 tracking-tight relative z-10">Ready to get started?</h3>
              <p className="text-stone-400 mb-12 font-light text-lg relative z-10 leading-relaxed">Contact us today for a free, no-obligation quote for your {service.title.toLowerCase()} needs.</p>
              
              <div className="space-y-6 relative z-10">
                <Link
                  to="/estimate"
                  className="w-full bg-stone-50 text-stone-950 px-8 py-5 rounded-sm font-medium text-sm uppercase tracking-widest hover:bg-stone-200 transition-colors flex items-center justify-center group"
                >
                  Request a Free Quote <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-stone-800"></div>
                  <span className="flex-shrink-0 mx-4 text-stone-500 text-xs font-medium uppercase tracking-widest">or</span>
                  <div className="flex-grow border-t border-stone-800"></div>
                </div>
                <a
                  href="tel:+17375101441"
                  className="w-full bg-transparent text-stone-50 border border-stone-700 px-8 py-5 rounded-sm font-medium text-sm uppercase tracking-widest hover:bg-stone-900 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-3 text-emerald-600" /> Call 737-510-1441
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
