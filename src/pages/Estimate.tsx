import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { servicesList } from '../data/services';
import { ArrowRight, CheckCircle2, Phone, MapPin, Mail } from 'lucide-react';

export default function Estimate() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col lg:flex-row">
      {/* Left Panel - Dark */}
      <div className="lg:w-5/12 bg-stone-950 text-stone-50 p-12 lg:p-24 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNe23SnuluQ14hlPj4xWpOX56HV4gyISJUdEfz8bIg0Z06A9eF')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-stone-950/80"></div>
        
        <div className="relative z-10 pt-20">
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-8 leading-[1.1]">
            Let's build <br/>
            <span className="text-emerald-500 italic">something</span> <br/>
            beautiful.
          </h1>
          <p className="text-xl text-stone-400 font-light max-w-md leading-relaxed">
            Fill out the form to request a free, no-obligation estimate for your property. We typically respond within 24 hours.
          </p>
        </div>

        <div className="relative z-10 mt-20 lg:mt-0 space-y-10 pb-10">
          <div className="flex items-center text-stone-300">
            <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center mr-6 border border-stone-800">
              <Phone className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
              <p className="text-xs text-stone-500 font-medium uppercase tracking-widest mb-1">Call Us</p>
              <p className="text-lg font-serif">+1 737-510-1441</p>
            </div>
          </div>
          <div className="flex items-center text-stone-300">
            <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center mr-6 border border-stone-800">
              <Mail className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
              <p className="text-xs text-stone-500 font-medium uppercase tracking-widest mb-1">Email Us</p>
              <p className="text-lg font-serif">trlawncare.us@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center text-stone-300">
            <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center mr-6 border border-stone-800">
              <MapPin className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
              <p className="text-xs text-stone-500 font-medium uppercase tracking-widest mb-1">Location</p>
              <p className="text-lg font-serif">Serving Local & Surrounding Areas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="lg:w-7/12 p-12 lg:p-24 bg-white flex items-center justify-center pt-32 lg:pt-24">
        <div className="w-full max-w-2xl">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-10">
                <CheckCircle2 className="w-10 h-10 text-emerald-800" />
              </div>
              <h2 className="text-4xl font-serif font-medium text-stone-950 mb-6 tracking-tight">Request Received</h2>
              <p className="text-xl text-stone-500 font-light mb-12 leading-relaxed">
                Thank you for reaching out. Our team will review your request and get back to you shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-emerald-800 font-medium hover:text-emerald-900 transition-colors uppercase tracking-widest text-sm border-b border-emerald-200 pb-1 hover:border-emerald-800"
              >
                Submit another request
              </button>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit} 
              className="space-y-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <input type="text" id="firstName" required className="peer w-full border-b border-stone-300 bg-transparent py-4 text-lg text-stone-950 placeholder-transparent focus:border-emerald-800 focus:outline-none transition-colors" placeholder="First Name" />
                  <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-xs font-medium text-stone-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-placeholder-shown:font-light peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-emerald-800 peer-focus:font-medium uppercase tracking-widest">First Name</label>
                </div>
                <div className="relative">
                  <input type="text" id="lastName" required className="peer w-full border-b border-stone-300 bg-transparent py-4 text-lg text-stone-950 placeholder-transparent focus:border-emerald-800 focus:outline-none transition-colors" placeholder="Last Name" />
                  <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-xs font-medium text-stone-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-placeholder-shown:font-light peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-emerald-800 peer-focus:font-medium uppercase tracking-widest">Last Name</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <input type="email" id="email" required className="peer w-full border-b border-stone-300 bg-transparent py-4 text-lg text-stone-950 placeholder-transparent focus:border-emerald-800 focus:outline-none transition-colors" placeholder="Email Address" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-medium text-stone-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-placeholder-shown:font-light peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-emerald-800 peer-focus:font-medium uppercase tracking-widest">Email Address</label>
                </div>
                <div className="relative">
                  <input type="tel" id="phone" required className="peer w-full border-b border-stone-300 bg-transparent py-4 text-lg text-stone-950 placeholder-transparent focus:border-emerald-800 focus:outline-none transition-colors" placeholder="Phone Number" />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs font-medium text-stone-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-placeholder-shown:font-light peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-emerald-800 peer-focus:font-medium uppercase tracking-widest">Phone Number</label>
                </div>
              </div>

              <div className="relative">
                <input type="text" id="address" required className="peer w-full border-b border-stone-300 bg-transparent py-4 text-lg text-stone-950 placeholder-transparent focus:border-emerald-800 focus:outline-none transition-colors" placeholder="Property Address" />
                <label htmlFor="address" className="absolute left-0 -top-3.5 text-xs font-medium text-stone-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-placeholder-shown:font-light peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-emerald-800 peer-focus:font-medium uppercase tracking-widest">Property Address</label>
              </div>

              <div className="relative pt-6">
                <label className="block text-xs font-medium text-stone-400 uppercase tracking-widest mb-8">Services Interested In</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {servicesList.map((service) => (
                    <label key={service.id} className="flex items-center space-x-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" className="peer appearance-none w-5 h-5 border border-stone-300 rounded-sm checked:bg-emerald-800 checked:border-emerald-800 transition-colors cursor-pointer" />
                        <CheckCircle2 className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                      </div>
                      <span className="text-base text-stone-600 font-light group-hover:text-stone-950 transition-colors">{service.title}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="relative pt-6">
                <textarea id="details" rows={3} className="peer w-full border-b border-stone-300 bg-transparent py-4 text-lg text-stone-950 placeholder-transparent focus:border-emerald-800 focus:outline-none transition-colors resize-none" placeholder="Project Details"></textarea>
                <label htmlFor="details" className="absolute left-0 -top-3.5 text-xs font-medium text-stone-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-placeholder-shown:font-light peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-emerald-800 peer-focus:font-medium uppercase tracking-widest">Project Details (Optional)</label>
              </div>

              <button
                type="submit"
                className="w-full bg-stone-950 text-stone-50 px-8 py-5 rounded-sm font-medium text-sm uppercase tracking-widest hover:bg-emerald-900 transition-all duration-500 flex items-center justify-center group mt-12"
              >
                Submit Request <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
}
