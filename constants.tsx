
import React from 'react';
import { ContractSuite, ContractEdition, PricingBracket, TrainingType } from './types';
import { Briefcase, Users, Video, GraduationCap } from 'lucide-react';

export const CONTRACT_EDITIONS: ContractEdition[] = [
  { id: 'fidic-99', suite: ContractSuite.FIDIC, name: 'FIDIC 1999 Suite', year: '1999', description: 'Red, Yellow, and Silver books training for traditional international projects.' },
  { id: 'fidic-17', suite: ContractSuite.FIDIC, name: 'FIDIC 2017 Suite', year: '2017', description: 'Deep dive into the updated 2nd editions for modern contract management.' },
  { id: 'nec-3', suite: ContractSuite.NEC, name: 'NEC 3', year: '3', description: 'Standard industry training for NEC3 Engineering and Construction Contracts.' },
  { id: 'nec-4', suite: ContractSuite.NEC, name: 'NEC 4', year: '4', description: 'Advanced training on the NEC4 suite including the latest project management tools.' },
  { id: 'jbcc', suite: ContractSuite.JBCC, name: 'JBCC Series 6', year: 'Latest', description: 'South African Building Industry standards (PBA & N/S Subcontract).' },
  { id: 'gcc-15', suite: ContractSuite.GCC, name: 'GCC 2015', year: '2015', description: 'General Conditions of Contract for Civil Engineering Works.' },
  { id: 'gcc-23', suite: ContractSuite.GCC, name: 'GCC 2023', year: '2023', description: 'Training on the latest revision of the GCC for modern infrastructure.' },
];

export const PRICING_BRACKETS: PricingBracket[] = [
  { minPeople: 1, maxPeople: 5, pricePerPerson: 4950, label: 'Small Team / Public' },
  { minPeople: 6, maxPeople: 15, pricePerPerson: 4200, label: 'Standard Group' },
  { minPeople: 16, maxPeople: 30, pricePerPerson: 3600, label: 'Professional Tier' },
  { minPeople: 31, maxPeople: 1000, pricePerPerson: 2900, label: 'Full In-House' },
];

export const BESPOKE_SERVICES = [
  {
    type: TrainingType.BESPOKE_STARTUP,
    icon: <Users className="w-8 h-8 text-charcoal" />,
    title: 'Startup Workshops',
    description: 'Alignment sessions for up to 30 people to mitigate risk from project inception.',
  },
  {
    type: TrainingType.BESPOKE_WEBINAR,
    icon: <Video className="w-8 h-8 text-charcoal" />,
    title: 'Professional Webinars',
    description: 'Focused digital training on specific high-value clauses and legal updates.',
  },
  {
    type: TrainingType.BESPOKE_INHOUSE,
    icon: <GraduationCap className="w-8 h-8 text-charcoal" />,
    title: 'In-house Training',
    description: 'Customized curriculum delivered at your office, tailored to your specific project needs.',
  },
];
