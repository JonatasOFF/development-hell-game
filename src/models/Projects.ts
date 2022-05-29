import { ContractModel } from './Contracts';
import { ProgrammingModel } from './Programmings';

export interface ProjectModel {
  name: string;
  description: string;
  contracts: ContractModel[];
  programmings: ProgrammingModel[];
  bScore: number;
  wScore: number;
  payload: number;
}
