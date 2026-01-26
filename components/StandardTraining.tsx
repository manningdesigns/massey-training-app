
import React from 'react';
import { CONTRACT_EDITIONS } from '../constants';
import { ArrowRight, Book } from 'lucide-react';

const StandardTraining: React.FC = () => {
  return (
    <section id="standard" className="training-section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-pear font-bold uppercase tracking-[0.3em] mb-4 text-xs">Pre-Developed Courses</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy font-serif">Standard Form Construction Contracts</h3>
          </div>
          <p className="text-gray-500 max-w-sm text-sm font-medium"> 
            Comprehensive modules for the industry's most widely used legal frameworks, updated for the latest revisions. 
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTRACT_EDITIONS.map((contract) => (
            <div 
              key={contract.id} 
              className="group p-10 border border-gray-100 hover:border-pear transition-all duration-300 hover:shadow-xl bg-gray-50/50"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white rounded-sm shadow-sm">
                  <Book className="w-6 h-6 text-pear" />
                </div>
                <span className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">{contract.suite} Suite</span>
              </div>
              <h4 className="text-xl font-bold text-navy mb-3 font-serif group-hover:text-pear transition-colors">{contract.name}</h4>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                {contract.description}
              </p>
              <a 
                href="#enquire" 
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-navy group-hover:text-pear transition-all"
              >
                Enquire Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardTraining;
