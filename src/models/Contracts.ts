export interface ContractModel {
  title: string;
  dependencies: ContractDepenncies[];
  description: string;
  reward: number;
}

export interface ContractDepenncies {
  type: 'programming';
  value: number;
}
