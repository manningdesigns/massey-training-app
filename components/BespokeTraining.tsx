
import React from 'react';
import { BESPOKE_SERVICES } from '../constants';

const BespokeTraining: React.FC = () => {
  return (
    <section id="bespoke" className="training-section bg-navy text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-pear font-bold uppercase tracking-[0.3em] mb-4 text-xs">Tailored Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-serif">Bespoke Contracts Training</h3>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            When standard modules aren't enough. We design and deliver training specific to your company's risk profile and project requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BESPOKE_SERVICES.map((service, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-sm hover:bg-white/10 transition-all group">
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {/* Fix: Cast icon to React.ReactElement<any> to allow overriding className via cloneElement */}
                {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-10 h-10 text-pear" })}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 font-serif">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <a 
                href="#enquire" 
                className="inline-block w-full text-center py-3 border border-pear/30 text-pear text-[10px] font-bold uppercase tracking-widest hover:bg-pear hover:text-navy transition-all"
              >
                Request Proposal
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BespokeTraining;
