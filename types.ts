
export enum ContractSuite {
  FIDIC = 'FIDIC',
  NEC = 'NEC',
  JBCC = 'JBCC',
  GCC = 'GCC'
}

export enum TrainingType {
  STANDARD = 'Standard Form Training',
  BESPOKE_STARTUP = 'Contract Startup Workshop',
  BESPOKE_WEBINAR = 'Webinar',
  BESPOKE_INHOUSE = 'In-house Training'
}

export interface ContractEdition {
  id: string;
  suite: ContractSuite;
  name: string;
  year?: string;
  description: string;
}

export interface EnquiryData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  peopleCount: number;
  contractSuites: ContractSuite[];
  trainingType: TrainingType;
  message: string;
}

export interface PricingBracket {
  minPeople: number;
  maxPeople: number;
  pricePerPerson: number;
  label: string;
}
