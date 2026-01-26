
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-navy">
      <div className="absolute inset-0 opacity-20 pointer-events-none no-print">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070" 
          alt="Construction Site Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
      </div>
      
      {/* Print-only background color for PDF clarity */}
      <div className="hidden print:block absolute inset-0 bg-navy z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Description & CTAs */}
        <div className="lg:col-span-8">
          <h2 className="text-pear font-semibold uppercase tracking-[0.3em] mb-4 text-sm">Expert-Led Legal Training</h2>
          <h1 className="text-5xl md:text-7xl text-white leading-tight mb-6 font-serif">
            Master the <br/> <span className="text-pear">Contracts</span> that <br/> Build the Future.
          </h1>
          
          <p className="text-gray-300 text-lg mb-10 max-w-2xl leading-relaxed">
            Professional training for FIDIC, NEC, JBCC, and GCC. From standard suite workshops to bespoke startup alignment, we ensure your team is project-ready.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 no-print">
            <a 
              href="#standard" 
              className="px-8 py-4 bg-pear text-navy font-bold rounded-sm text-center transition-transform hover:scale-105"
            >
              Standard Training
            </a>
            <a 
              href="#bespoke" 
              className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-sm text-center transition-all hover:bg-white/10"
            >
              Bespoke Workshops
            </a>
          </div>
        </div>
        
        {/* Right Column: Straightened 30+ Years Box with bounce hover */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="bg-pear p-8 shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-default">
            <p className="text-navy font-black text-6xl font-serif leading-none">30+</p>
            <p className="text-navy/80 font-bold uppercase tracking-widest text-[10px] mt-3 whitespace-nowrap">Years of Expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
