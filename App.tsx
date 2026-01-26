
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StandardTraining from './components/StandardTraining';
import BespokeTraining from './components/BespokeTraining';
import Pricing from './components/Pricing';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <Hero />
        
        {/* STANDARD TRAINING MODULES */}
        <StandardTraining />
        
        {/* BESPOKE TRAINING SOLUTIONS */}
        <BespokeTraining />
        
        {/* PRICING TABLE */}
        <Pricing />
        
        {/* ENQUIRY & BOOKING SECTION */}
        <section className="training-section bg-[#F8F9FA] px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-navy font-bold text-4xl mb-4 font-serif">Align Your Project Team</h2>
              <p className="text-gray-500 max-w-md mx-auto text-sm">Submit your team size and contract preference below to receive a customized training proposal.</p>
            </div>
            <EnquiryForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
