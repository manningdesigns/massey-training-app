
import React from 'react';

const Footer: React.FC = () => {
  const logoUrl = "https://masseyoncon.co.za/wp-content/uploads/2025/07/cropped-MasseyONcontracts-Pear-Colourful-Logo.png";

  return (
    <footer className="bg-navy pt-20 pb-10 px-6 text-white border-t border-pear/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <img 
              src={logoUrl}
              alt="Massey On Contracts Logo" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Professional consultancy specializing in construction law, contract administration, and project turnaround strategies with over 30 years of industry experience.
            </p>
          </div>
          
          <div>
            <h5 className="text-pear font-bold uppercase tracking-widest text-[10px] mb-6">Contract Suites</h5>
            <ul className="space-y-3 text-gray-400 text-[11px] font-medium uppercase tracking-widest">
              <li><a href="#standard" className="hover:text-pear">FIDIC Training</a></li>
              <li><a href="#standard" className="hover:text-pear">NEC Management</a></li>
              <li><a href="#standard" className="hover:text-pear">JBCC Series</a></li>
              <li><a href="#standard" className="hover:text-pear">GCC Standards</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-pear font-bold uppercase tracking-widest text-[10px] mb-6">Bespoke</h5>
            <ul className="space-y-3 text-gray-400 text-[11px] font-medium uppercase tracking-widest">
              <li><a href="#bespoke" className="hover:text-pear">Startup Alignment</a></li>
              <li><a href="#bespoke" className="hover:text-pear">In-house Mentoring</a></li>
              <li><a href="#bespoke" className="hover:text-pear">Custom Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-pear font-bold uppercase tracking-widest text-[10px] mb-6">Contact</h5>
            <ul className="space-y-3 text-gray-400 text-[11px] font-medium tracking-widest">
              <li>training@masseyoncon.co.za</li>
              <li>+27 (0) 82 555 1234</li>
              <li>Sandton, South Africa</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">© 2025 Massey On Contracts (PTY) LTD. All rights reserved.</p>
          <div className="flex space-x-6 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
