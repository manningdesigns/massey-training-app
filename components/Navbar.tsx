
import React from 'react';

const Navbar: React.FC = () => {
  const logoUrl = "https://masseyoncon.co.za/wp-content/uploads/2025/07/cropped-MasseyONcontracts-Pear-Colourful-Logo.png"; 
  <a href="https://masseyoncon.co.za/" </a>

  return (
    <nav className="fixed w-full z-50 bg-navy/95 backdrop-blur-sm border-b border-pear/20 py-2 px-6 shadow-xl no-print">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo moved to the top left */}
        <div className="flex-shrink-0">
          <img 
            src={logoUrl} 
            alt="Massey On Contracts" 
            className="h-16 w-auto"
          />
        </div>
        
        {/* Navigation menu on the right */}
        <div className="flex space-x-8 items-center text-[10px] font-bold uppercase tracking-widest text-white/90">
          <a href="#standard" className="hover:text-pear transition-colors">Standard Training</a>
          <a href="#bespoke" className="hover:text-pear transition-colors">Bespoke Solutions</a>
          <a 
            href="#enquire" 
            className="bg-pear text-navy px-6 py-2.5 rounded-sm hover:bg-white transition-all font-bold"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
