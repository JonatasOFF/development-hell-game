import { ContractModel } from './Contracts';

export interface ProjectModel {
  name: string;
  description: string;
  contracts: ContractModel[];
  programmings: string[];
  bScore: number;
  wScore: number;
  payload: number;
}
