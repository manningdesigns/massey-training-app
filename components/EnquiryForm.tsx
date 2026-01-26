
import React, { useState } from 'react';
import { ContractSuite, TrainingType, EnquiryData } from '../types';
import { PRICING_BRACKETS } from '../constants';
import { CreditCard, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

interface Props {
  initialType?: TrainingType;
}

const EnquiryForm: React.FC<Props> = ({ initialType }) => {
  const [formData, setFormData] = useState<EnquiryData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    peopleCount: 1,
    contractSuites: [],
    trainingType: initialType || TrainingType.STANDARD,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const calculateEstimate = () => {
    const bracket = PRICING_BRACKETS.find(
      b => formData.peopleCount >= b.minPeople && formData.peopleCount <= b.maxPeople
    );
    return bracket ? bracket.pricePerPerson * formData.peopleCount : 0;
  };

  const handleSuiteToggle = (suite: ContractSuite) => {
    setFormData(prev => ({
      ...prev,
      contractSuites: prev.contractSuites.includes(suite)
        ? prev.contractSuites.filter(s => s !== suite)
        : [...prev.contractSuites, suite]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowPayment(true);
    }, 1200);
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-12 rounded-sm shadow-2xl border border-pear/20 text-center">
        <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-3xl font-bold mb-4 font-serif">Enquiry Received</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Thank you, {formData.firstName}. One of our expert trainers will reach out shortly to finalize your details.
        </p>
        <button 
          onClick={() => { setIsSuccess(false); setShowPayment(false); }}
          className="bg-navy text-white px-10 py-3 rounded-sm font-bold uppercase tracking-widest text-[10px]"
        >
          Close Confirmation
        </button>
      </div>
    );
  }

  if (showPayment) {
    return (
      <div className="bg-white rounded-sm shadow-2xl border border-gray-100 overflow-hidden max-w-2xl mx-auto">
        <div className="bg-navy p-8 text-white">
          <h3 className="text-2xl font-bold font-serif mb-1">Secure Your Training</h3>
          <p className="text-pear uppercase text-[10px] font-bold tracking-widest">Estimated Value for {formData.peopleCount} Attendees</p>
        </div>
        <div className="p-10">
          <div className="flex justify-between items-end mb-10 border-b pb-6 border-gray-100">
            <div>
              <p className="text-gray-400 uppercase text-[9px] font-bold tracking-[0.2em] mb-1">Total Quote</p>
              <p className="text-4xl font-bold text-navy">R {calculateEstimate().toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-navy font-bold text-sm">{formData.trainingType}</p>
              <p className="text-gray-500 text-xs">Massey On Contracts</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Cardholder Name" className="w-full border p-4 rounded-sm text-sm outline-none focus:border-pear" />
              <input type="text" placeholder="Card Number" className="w-full border p-4 rounded-sm text-sm outline-none focus:border-pear" />
            </div>
            <button 
              onClick={handleFinalSubmit}
              disabled={isSubmitting}
              className="w-full bg-pear text-navy py-4 rounded-sm font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-navy hover:text-white transition-all"
            >
              {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin mx-auto" /> : 'Confirm Workshop Booking'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="enquire" className="bg-white p-10 md:p-16 rounded-sm shadow-2xl border border-gray-100">
      <div className="flex items-center gap-3 mb-10">
        <Sparkles className="w-5 h-5 text-pear" />
        <h3 className="text-3xl font-bold text-navy font-serif">Enquiry Details</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">First Name</label>
            <input required value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full border-b-2 border-gray-100 p-3 focus:border-pear outline-none transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Last Name</label>
            <input required value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full border-b-2 border-gray-100 p-3 focus:border-pear outline-none transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
            <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border-b-2 border-gray-100 p-3 focus:border-pear outline-none transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Contact Number</label>
            <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border-b-2 border-gray-100 p-3 focus:border-pear outline-none transition-colors" />
          </div>
        </div>

        <div className="space-y-5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Required Contracts</label>
          <div className="flex flex-wrap gap-3">
            {Object.values(ContractSuite).map(suite => (
              <button
                key={suite}
                type="button"
                onClick={() => handleSuiteToggle(suite)}
                className={`px-6 py-2 rounded-full border text-[11px] font-bold uppercase tracking-widest transition-all ${
                  formData.contractSuites.includes(suite) 
                    ? 'bg-navy text-white border-navy shadow-lg' 
                    : 'bg-white text-gray-400 border-gray-200 hover:border-pear'
                }`}
              >
                {suite}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Training Format</label>
            <select 
              value={formData.trainingType}
              onChange={e => setFormData({...formData, trainingType: e.target.value as TrainingType})}
              className="w-full border-b-2 border-gray-100 p-3 focus:border-pear outline-none bg-white text-sm"
            >
              {Object.values(TrainingType).map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Number of Attendees</label>
              <span className="text-navy font-bold">{formData.peopleCount}</span>
            </div>
            <input 
              type="range" min="1" max="50" value={formData.peopleCount}
              onChange={e => setFormData({...formData, peopleCount: parseInt(e.target.value)})}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-pear"
            />
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Estimated Base Price</p>
            <p className="text-4xl font-bold text-navy">R {calculateEstimate().toLocaleString()}</p>
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto flex-1 bg-pear text-navy px-12 py-5 rounded-sm font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-navy hover:text-white transition-all flex items-center justify-center gap-3"
          >
            {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Request Proposal & Book'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
