import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, Clock, ThumbsUp, Users, ArrowRight } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Always on Time",
      desc: "We respect your schedule. When we say we'll be there, we're there. Consistency is our hallmark."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fully Insured",
      desc: "Complete peace of mind. We carry comprehensive insurance to protect your property and our team."
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Unmatched Quality",
      desc: "We don't cut corners. We use commercial-grade equipment to deliver clean, crisp results every time."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Locally Owned",
      desc: "Treating every client like a neighbor, not just another stop on a route."
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Editorial Header */}
      <div className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h2 className="text-emerald-800 font-medium tracking-widest uppercase text-xs mb-8">Who we are</h2>
          <h1 className="text-6xl md:text-8xl font-serif font-medium text-stone-950 tracking-tight mb-10 leading-[1.05] text-balance">
            About us.
          </h1>
          <p className="text-2xl text-stone-500 font-light leading-relaxed max-w-3xl">
            My name is Tyler and I am the owner and operator of a locally based lawn care company called TR Lawn Care that is committed to quality, reliability, and professional service.
          </p>
        </motion.div>
      </div>

      {/* Large Image Break */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32"
      >
        <div className="w-full h-[70vh] rounded-sm overflow-hidden shadow-2xl relative">
          <img 
            src="https://lh3.googleusercontent.com/sitesv/APaQ0SSGFpZBub4z0Vy5h-tVeHS052hshz57Y_eMWczrxyIqiyq4IQjKR6gF1mqU0EGVsOi8eabagLvr-ZTMkZ13NuZLruOauWzUjOF5S9tWswur3bDAR7zgJbLOO_ARA52bQpZ07RUzYFtF3O0F05W-8SNI32MFQAzsjyDp0KqTSaWCCopuU9OlD3hMNkxDYuS5W65zYafLZdFsicLsmlh2kH5Z-DgKckOR3lz4=w1280" 
            alt="TR Lawn Care Team" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-950/10"></div>
        </div>
      </motion.div>

      {/* Split Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-stone-950 tracking-tight mb-8 leading-tight">More than just a mowing service.</h2>
                <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed mb-10">
                  <p>
                    We started this business with the goal of providing consistent, detail-oriented lawn care that homeowners can depend on.
                  </p>
                  <p>
                    We believe great lawn care goes beyond routine maintenance. It requires proper techniques, attention to detail, and respect for each property. Every service is performed with care, precision, and a focus on long-term lawn health.
                  </p>
                  <p>
                    When you choose my company, you can expect clear communication, dependable scheduling, and work that is done correctly and efficiently. We take pride in standing behind our services and building long-lasting relationships with customers throughout the community.
                  </p>
                </div>
                <Link
                  to="/estimate"
                  className="inline-flex items-center justify-center px-10 py-4 bg-stone-950 text-stone-50 rounded-sm font-medium text-sm uppercase tracking-widest hover:bg-emerald-900 transition-colors duration-500"
                >
                  Work With Us <ArrowRight className="w-4 h-4 ml-3" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 1 }}
                    className="bg-stone-50 p-12 rounded-sm border border-stone-200"
                  >
                    <div className="text-emerald-800 mb-8 opacity-80">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-medium text-stone-950 mb-4">{feature.title}</h3>
                    <p className="text-stone-500 leading-relaxed font-light">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Banner */}
      <section className="py-32 bg-emerald-900 text-stone-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-12 leading-tight">When you choose TR Lawn Care, you're choosing a local partner dedicated to keeping our community beautiful.</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Honesty', 'Hard Work', 'Reliability', 'Community'].map((val, i) => (
              <span key={i} className="px-8 py-3 bg-emerald-800/50 rounded-sm font-medium tracking-widest uppercase text-xs border border-emerald-700/50">
                {val}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
