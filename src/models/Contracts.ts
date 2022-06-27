export interface ContractModel {
  title: string;
  dependencies: ContractDepenncies[];
  description: string;
  descriptionAbout: string;
  reward: number;
}

export interface ContractDepenncies {
  type: 'programming' | 'frontend' | 'backend';
  value: number;
}

export interface ContractSavedStorage {
  contractsActive: ContractModel[];
  contractsFree: ContractModel[];
}
