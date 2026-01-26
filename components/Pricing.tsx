
import React from 'react';
import { PRICING_BRACKETS } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="training-section bg-[#FDFDFD] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-pear font-bold uppercase tracking-[0.3em] mb-4 text-xs">Transparent Investment</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-navy font-serif">Pricing Brackets</h3>
          <p className="text-gray-500 mt-4 text-sm">Ballpark investment per person based on project group size.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_BRACKETS.map((bracket, idx) => (
            <div key={idx} className="p-10 bg-white border border-gray-100 rounded-sm hover:shadow-2xl hover:border-pear transition-all group relative overflow-hidden">
              {idx === 2 && (
                <div className="absolute top-0 right-0 bg-pear text-navy font-bold text-[8px] px-3 py-1 uppercase tracking-tighter">
                  Most Popular
                </div>
              )}
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{bracket.label}</p>
              <div className="mb-8">
                <p className="text-4xl font-bold text-navy font-serif">R {bracket.pricePerPerson.toLocaleString()}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">Per Attendee</p>
              </div>
              <ul className="space-y-4 mb-10 text-sm text-gray-500 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pear" /> {bracket.minPeople}-{bracket.maxPeople === 1000 ? '30+' : bracket.maxPeople} Attendees</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pear" /> Digital Certification</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-pear" /> Reference Materials</li>
              </ul>
              <a href="#enquire" className="block w-full text-center py-3 bg-navy text-white text-[10px] font-bold uppercase tracking-widest hover:bg-pear hover:text-navy transition-all">Select Tier</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
