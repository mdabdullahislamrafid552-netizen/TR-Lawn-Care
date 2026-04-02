import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: "Are you a local company?",
      a: "Yes! We are a locally owned and operated company proudly serving the Burnet community. Being local means we care about our neighbors, our reputation, and the quality of every job we do. When you hire us, you’re supporting a business that truly values the community it serves."
    },
    {
      q: "Do you offer scheduled services?",
      a: "Absolutely. Many of our services, including mowing, dog waste pickup, and yard maintenance, can be scheduled on a weekly or recurring basis. We work with you to create a schedule that keeps your property consistently clean, healthy, and well-maintained without you having to think about it."
    },
    {
      q: "How does the trash can cleaning work?",
      a: "Our trash can cleaning service thoroughly washes, sanitizes, and deodorizes your bins. We remove built-up grime, spills, and odors using cleaning solutions and power washers. The result is clean, fresh bins that are safe to use. We handle all the waste disposal properly, so you don’t have to deal with the mess or smell."
    },
    {
      q: "Do you guarantee your work?",
      a: "Yes. We take pride in every job we do and stand behind the quality of our work. If you’re ever unsatisfied with a service, we’ll address it promptly to make it right. Our goal is to deliver consistent, professional results that you can trust every time."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Premium Header */}
      <div className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-emerald-800 font-medium tracking-widest uppercase text-xs mb-8">Got Questions?</h2>
          <h1 className="text-6xl md:text-8xl font-serif font-medium text-stone-950 tracking-tight mb-10 leading-[1.05] text-balance">
            Frequently Asked <br/>
            <span className="text-stone-400 italic">Questions.</span>
          </h1>
          <p className="text-2xl text-stone-500 font-light leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our services, scheduling, and how we operate.
          </p>
        </motion.div>
      </div>

      {/* FAQ Accordion Section */}
      <section className="py-12 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-white rounded-sm border overflow-hidden transition-all duration-700 ${openIndex === index ? 'border-stone-300 shadow-xl' : 'border-stone-200 shadow-sm hover:shadow-md'}`}
              >
                <button
                  className="w-full px-10 py-10 text-left flex justify-between items-center focus:outline-none group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`text-2xl font-serif font-medium tracking-tight transition-colors duration-500 pr-8 ${openIndex === index ? 'text-emerald-900' : 'text-stone-950 group-hover:text-emerald-800'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500 ${openIndex === index ? 'bg-stone-100' : 'bg-stone-50 group-hover:bg-stone-100'}`}>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-700 ${openIndex === index ? 'rotate-180 text-emerald-900' : 'text-stone-400 group-hover:text-emerald-800'}`} 
                    />
                  </div>
                </button>
                
                <div 
                  className={`px-10 overflow-hidden transition-all duration-700 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-lg text-stone-600 font-light leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
