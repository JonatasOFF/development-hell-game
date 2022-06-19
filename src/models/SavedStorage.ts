import { ProgrammingModel, ProjectModel } from 'models';

import { ContractSavedStorage } from './Contracts';
export interface SavedStorageModel {
  programmings: ProgrammingModel[];
  contracts: ContractSavedStorage;
  projects: ProjectModel[];
  upgrades: unknown;
  money: unknown;
  time: number;
  enterprise: unknown;
}
