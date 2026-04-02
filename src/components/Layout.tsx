import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Leaf, MapPin, Mail, Instagram, ChevronDown, ArrowRight, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesList } from '../data/services';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-stone-50">
      {/* Main Navigation */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-700 ${scrolled ? 'bg-stone-50/90 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="https://i.imgur.com/nuQDId4.png" 
                alt="TR Lawn Care" 
                className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-14 md:h-16' : 'h-16 md:h-24'}`} 
                referrerPolicy="no-referrer"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/" className={`text-sm tracking-wide transition-all duration-300 ${location.pathname === '/' ? 'text-emerald-900 font-medium' : 'text-stone-900 font-medium hover:text-emerald-800'}`}>Home</Link>
              
              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                <Link to="/services" className={`text-sm tracking-wide transition-all duration-300 flex items-center ${location.pathname.includes('/services') ? 'text-emerald-900 font-medium' : 'text-stone-900 font-medium hover:text-emerald-800'}`}>
                  Services <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </Link>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px]">
                      <div className="bg-stone-50 rounded-xl shadow-2xl border border-stone-200/50 overflow-hidden p-8 grid grid-cols-2 gap-x-10 gap-y-4 relative">
                        <div className="col-span-2 mb-2 pb-4 border-b border-stone-200 flex justify-between items-center">
                          <span className="text-xs font-medium text-stone-400 uppercase tracking-widest">Our Expertise</span>
                          <Link to="/services" className="text-xs font-medium text-emerald-800 hover:text-emerald-900 flex items-center group uppercase tracking-widest">
                            Explore All <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                        {servicesList.map((service) => (
                          <Link key={service.id} to={`/services/${service.id}`} className="group flex items-start py-2 transition-all duration-300">
                            <div className="text-emerald-800 mr-4 mt-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                              {service.icon}
                            </div>
                            <div>
                              <div className="font-serif font-medium text-stone-900 group-hover:text-emerald-800 transition-colors text-base mb-1">{service.title}</div>
                              <div className="text-xs text-stone-500 line-clamp-1 font-light">{service.shortDesc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/about" className={`text-sm tracking-wide transition-all duration-300 ${location.pathname === '/about' ? 'text-emerald-900 font-medium' : 'text-stone-900 font-medium hover:text-emerald-800'}`}>About</Link>
              <Link to="/faq" className={`text-sm tracking-wide transition-all duration-300 ${location.pathname === '/faq' ? 'text-emerald-900 font-medium' : 'text-stone-900 font-medium hover:text-emerald-800'}`}>FAQ</Link>
            </nav>

            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+17375101441" className="text-sm font-medium text-stone-900 hover:text-emerald-800 transition-colors flex items-center">
                <Phone className="w-4 h-4 mr-2" /> 737-510-1441
              </a>
              <Link to="/estimate" className="bg-stone-900 text-stone-50 px-6 py-3 rounded-sm text-sm font-medium hover:bg-emerald-900 transition-all duration-500 flex items-center">
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-900 focus:outline-none p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: '100vh' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="md:hidden bg-stone-50 absolute w-full top-full left-0 overflow-y-auto">
              <div className="px-6 pt-8 pb-24 space-y-6">
                <Link to="/" className="block text-3xl font-serif font-medium text-stone-900">Home</Link>
                
                <div>
                  <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="w-full flex justify-between items-center text-3xl font-serif font-medium text-stone-900">
                    Services <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                        <div className="pt-4 pb-2 space-y-4 border-l border-stone-200 ml-2 pl-6 mt-2">
                          <Link to="/services" className="block text-sm uppercase tracking-widest font-medium text-emerald-800">View All Services</Link>
                          {servicesList.map(service => (
                            <Link key={service.id} to={`/services/${service.id}`} className="block text-lg font-serif text-stone-600">{service.title}</Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/about" className="block text-3xl font-serif font-medium text-stone-900">About</Link>
                <Link to="/faq" className="block text-3xl font-serif font-medium text-stone-900">FAQ</Link>
                
                <div className="pt-12 mt-8 border-t border-stone-200 space-y-4">
                  <a href="tel:+17375101441" className="flex items-center w-full text-xl font-serif text-stone-900">
                    <Phone className="w-5 h-5 mr-3" /> 737-510-1441
                  </a>
                  <Link to="/estimate" className="block w-full text-center px-6 py-4 bg-stone-900 text-stone-50 rounded-sm text-lg font-medium">
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow pt-24 md:pt-0"><Outlet /></main>

      {/* Mega Pre-Footer CTA */}
      <section className="bg-stone-950 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNe23SnuluQ14hlPj4xWpOX56HV4gyISJUdEfz8bIg0Z06A9eF')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-stone-950/70"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif font-medium text-stone-50 tracking-tight mb-8 text-balance"
          >
            Ready to transform your property?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-stone-300 font-light mb-12 max-w-2xl mx-auto"
          >
            Join hundreds of happy homeowners. Get your free, no-obligation estimate today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link to="/estimate" className="w-full sm:w-auto bg-stone-50 text-stone-950 px-10 py-4 rounded-sm font-medium text-lg hover:bg-stone-200 transition-all duration-500 flex items-center justify-center">
              Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="tel:+17375101441" className="w-full sm:w-auto bg-transparent border border-stone-50/30 text-stone-50 px-10 py-4 rounded-sm font-medium text-lg hover:bg-stone-50/10 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
              <Phone className="w-5 h-5 mr-2" /> Call 737-510-1441
            </a>
          </motion.div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-stone-950 text-stone-400 py-20 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Link to="/" className="flex items-center mb-8 group inline-flex">
                <img 
                  src="https://i.imgur.com/nuQDId4.png" 
                  alt="TR Lawn Care" 
                  className="h-20 md:h-28 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="text-sm text-stone-400 mb-8 leading-relaxed max-w-sm font-light">
                Elevating outdoor spaces with precision, reliability, and unparalleled quality. A luxurious approach to property maintenance.
              </p>
              <div className="flex space-x-3">
                <a href="https://www.instagram.com/trlawncare.us/" target="_blank" rel="noreferrer" className="bg-stone-900 border border-stone-800 p-3 rounded-full text-stone-300 hover:bg-emerald-900 hover:border-emerald-900 hover:text-stone-50 transition-all duration-500"><Instagram className="w-4 h-4" /></a>
                <a href="https://web.facebook.com/people/TR-Lawn-Care/61588098105941/?utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" rel="noreferrer" className="bg-stone-900 border border-stone-800 p-3 rounded-full text-stone-300 hover:bg-emerald-900 hover:border-emerald-900 hover:text-stone-50 transition-all duration-500"><Facebook className="w-4 h-4" /></a>
              </div>
            </div>
            
            <div className="lg:col-span-2 lg:col-start-6">
              <h3 className="text-stone-50 font-serif font-medium text-lg mb-6 tracking-tight">Company</h3>
              <ul className="space-y-4 text-sm font-light">
                <li><Link to="/" className="hover:text-stone-50 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-stone-50 transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-stone-50 transition-colors">Services</Link></li>
                <li><Link to="/faq" className="hover:text-stone-50 transition-colors">FAQ</Link></li>
                <li><Link to="/estimate" className="hover:text-stone-50 transition-colors">Free Estimate</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-stone-50 font-serif font-medium text-lg mb-6 tracking-tight">Services</h3>
              <ul className="space-y-4 text-sm font-light">
                {servicesList.slice(0, 5).map(service => (
                  <li key={service.id}><Link to={`/services/${service.id}`} className="hover:text-stone-50 transition-colors">{service.title}</Link></li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-stone-50 font-serif font-medium text-lg mb-6 tracking-tight">Contact</h3>
              <ul className="space-y-5 text-sm font-light">
                <li className="flex items-start group">
                  <div className="mt-0.5 mr-3"><MapPin className="w-4 h-4 text-emerald-700" /></div>
                  <span className="leading-relaxed">Serving Local & Surrounding Areas</span>
                </li>
                <li className="flex items-center group">
                  <div className="mr-3"><Phone className="w-4 h-4 text-emerald-700" /></div>
                  <a href="tel:+17375101441" className="hover:text-stone-50 transition-colors">+1 737-510-1441</a>
                </li>
                <li className="flex items-center group">
                  <div className="mr-3"><Mail className="w-4 h-4 text-emerald-700" /></div>
                  <a href="mailto:trlawncare.us@gmail.com" className="hover:text-stone-50 transition-colors">trlawncare.us@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs text-stone-500 mb-4 md:mb-0 font-light tracking-wide">
              &copy; {new Date().getFullYear()} TR Lawn Care. All rights reserved.
            </div>
            <div className="flex space-x-6 text-xs font-light">
              <Link to="#" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
