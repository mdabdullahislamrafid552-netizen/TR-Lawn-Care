import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import { servicesList } from '../data/services';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity1 = useTransform(scrollY, [0, 600], [1, 0]);

  const testimonials = [
    {
      text: "TR Lawn Care completely transformed our property. Their attention to detail is unmatched, and they always show up exactly when promised. Worth every penny.",
      author: "Sarah M.",
      role: "Homeowner",
      location: "Burnet, TX"
    },
    {
      text: "The most professional landscaping service we've used. They handle our commercial property and the curb appeal has noticeably improved our foot traffic.",
      author: "James T.",
      role: "Business Owner",
      location: "Burnet, TX"
    },
    {
      text: "Dependable, affordable, and incredibly thorough. It's rare to find a local business that operates with this level of polish and consistency.",
      author: "Linda K.",
      role: "Homeowner",
      location: "Burnet, TX"
    }
  ];

  return (
    <div className="bg-stone-50">
      {/* Ultra-Premium Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-50">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y1, opacity: opacity1 }}
        >
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/481236338_1150561203748222_7807592689304842359_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PfNl4nRlxj4Q7kNvwFcRZsL&_nc_oc=AdoTt8CS28XGQUZqkr9uQsmrrCTb1CfCR2eRpFh4M_e1JOXmJUSL11jCNqcUVou4mfk&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=uupIKe7f6JR07AbFTEgOfQ&_nc_ss=7a389&oh=00_Af2kT9tGX4L6bjRSzuJ5T_JuT9XC02Fr9WmLzQE1bctuwg&oe=69D482B7"
            alt="Beautifully manicured lawn"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center space-x-2 bg-stone-900/50 backdrop-blur-md px-5 py-2 rounded-full border border-stone-800 mb-10 shadow-sm">
              <Star className="w-3.5 h-3.5 text-emerald-500 fill-current" />
              <span className="text-xs font-medium text-stone-200 tracking-widest uppercase">Premium Property Maintenance</span>
            </div>
            
            <div className="overflow-hidden mb-8">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.05] text-white text-balance drop-shadow-lg"
              >
                The standard for <br/>
                <span className="text-emerald-400 italic">lawn care.</span>
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl text-stone-100 mb-12 font-medium max-w-2xl leading-relaxed drop-shadow-md"
            >
              Elevating properties with precision maintenance, expert landscaping, and uncompromising reliability.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto"
            >
              <Link
                to="/estimate"
                className="bg-stone-50 text-stone-950 px-10 py-4 rounded-sm font-medium text-sm tracking-wide uppercase hover:bg-stone-200 transition-all duration-500 text-center flex items-center justify-center group shadow-xl"
              >
                Get Your Free Quote <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+17375101441"
                className="bg-stone-950/50 backdrop-blur-md text-stone-50 border border-stone-500 px-10 py-4 rounded-sm font-medium text-sm tracking-wide uppercase hover:bg-stone-900 transition-all duration-500 text-center flex items-center justify-center shadow-lg"
              >
                Call 737-510-1441
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is TR Lawn Care? */}
      <section className="py-32 bg-stone-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-emerald-800 font-medium tracking-widest uppercase text-xs mb-6">Our Story</h2>
              <h3 className="text-5xl md:text-6xl font-serif font-medium text-stone-950 tracking-tight leading-tight mb-10">
                What is TR Lawn Care?
              </h3>
              <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
                <p>
                  Founded by a high schooler committed to delivering fair, reliable, and high-quality lawn care services throughout the Hill Country.
                </p>
                <p>
                  I take pride in honest communication, attention to detail, and consistent results our customers can depend on.
                </p>
                <p>
                  Our goal is to build long-term relationships by treating every property with care and respect, ensuring landscapes stay healthy, clean, and well-maintained year-round.
                </p>
              </div>
              <div className="mt-12">
                <Link to="/about" className="inline-flex items-center text-stone-950 font-medium hover:text-emerald-800 transition-colors text-sm uppercase tracking-widest group border-b border-stone-300 pb-1 hover:border-emerald-800">
                  Read Our Full Story <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SR2FaqiAa1YBoasyL-FDyLb9ZaXHEQXk7Jxh4WtOIHh6M4I65YLjFbmk6X6yCnV6OCumRTiKQCPaqv0pYfW1022cRUAGOueBqDwUibexYSRSum1k7dER4nKSShdpY18smLNTgRpOmSXLBbzjSCtO1vu_0m8ETI9P70FkDybDI3Y4htd9pOy8-uBX6UGkeTXoT0v-D1gUK8MXDGYgBRaR-Fe5Nq-BpEGs2d3y6Q=w1280" alt="TR Lawn Care" className="relative z-10 rounded-sm shadow-2xl object-cover h-[600px] w-full" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-stone-200 rounded-sm -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose TR Lawn Care Section */}
      <section className="py-32 bg-stone-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 md:mb-32 max-w-3xl">
            <h2 className="text-emerald-800 font-medium tracking-widest uppercase text-xs mb-6">Our Expertise</h2>
            <h3 className="text-5xl md:text-6xl font-serif font-medium text-stone-950 tracking-tight leading-tight mb-8">
              Why Choose TR Lawn Care
            </h3>
            <p className="text-xl text-stone-500 font-light leading-relaxed">
              We handle the hard work so you don't have to. Here is exactly how we take care of your property.
            </p>
          </div>

          <div className="space-y-32">
            {servicesList.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-sm shadow-xl">
                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                    <img src={service.image} alt={service.title} className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="text-emerald-800 mb-8 opacity-80">
                    {service.icon}
                  </div>
                  <h4 className="text-4xl font-serif font-medium text-stone-950 mb-6 tracking-tight">{service.title}</h4>
                  <p className="text-lg text-stone-600 leading-relaxed font-light mb-10">
                    {service.fullDesc}
                  </p>
                  <Link to={`/services/${service.id}`} className="inline-flex items-center text-stone-950 font-medium hover:text-emerald-800 transition-colors text-sm uppercase tracking-widest group border-b border-stone-300 pb-1 hover:border-emerald-800">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The TR Difference (Stats/Process) */}
      <section className="py-32 bg-stone-950 text-stone-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-emerald-600 font-medium tracking-widest uppercase text-xs mb-6">The TR Difference</h2>
              <h3 className="text-5xl md:text-6xl font-serif font-medium tracking-tight mb-8 leading-tight text-balance">
                Why we're the top choice.
              </h3>
              <p className="text-xl text-stone-400 font-light leading-relaxed mb-16">
                We don't just cut grass; we manage properties. Our commitment to punctuality, communication, and flawless execution sets us apart.
              </p>
              
              <div className="space-y-10">
                {[
                  { icon: <Clock className="w-6 h-6" />, title: "Punctual & Reliable", desc: "We show up on your scheduled day, every time. No excuses." },
                  { icon: <Award className="w-6 h-6" />, title: "Uncompromising Quality", desc: "Crisp edges, even cuts, and spotless cleanups." },
                  { icon: <ShieldCheck className="w-6 h-6" />, title: "Professional Team", desc: "Uniformed, insured, and trained to respect your property." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="text-emerald-600 mr-6 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-medium mb-2 tracking-tight text-stone-50">{item.title}</h4>
                      <p className="text-stone-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6 mt-12">
                <div className="bg-stone-900 border border-stone-800 rounded-sm p-10">
                  <div className="text-5xl font-serif font-medium text-stone-50 mb-3">500+</div>
                  <div className="text-emerald-600 font-medium tracking-widest uppercase text-xs">Happy Clients</div>
                </div>
                <img src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=2072&auto=format&fit=crop" alt="Lawn" className="w-full h-64 lg:h-80 object-cover rounded-sm opacity-80" />
              </div>
              <div className="space-y-6">
                <img src="https://images.unsplash.com/photo-1592424001806-6131f4e1503c?q=80&w=2070&auto=format&fit=crop" alt="Lawn" className="w-full h-64 lg:h-80 object-cover rounded-sm opacity-80" />
                <div className="bg-emerald-900 rounded-sm p-10">
                  <div className="text-5xl font-serif font-medium text-stone-50 mb-3">100%</div>
                  <div className="text-emerald-200 font-medium tracking-widest uppercase text-xs">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial Testimonials */}
      <section className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-emerald-800 font-medium tracking-widest uppercase text-xs mb-6">Client Stories</h2>
            <h3 className="text-5xl md:text-6xl font-serif font-medium text-stone-950 tracking-tight">Don't just take our word for it.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-12 rounded-sm border border-stone-200 shadow-sm flex flex-col"
              >
                <div className="flex space-x-1 mb-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-emerald-700 fill-current" />
                  ))}
                </div>
                <p className="text-stone-600 mb-12 text-lg leading-relaxed flex-grow font-light italic">"{testimonial.text}"</p>
                <div className="flex items-center pt-8 border-t border-stone-100">
                  <div>
                    <p className="font-serif font-medium text-stone-950 text-lg">{testimonial.author}</p>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">{testimonial.role}, {testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
