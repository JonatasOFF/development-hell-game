import { ContractModel, ProgrammingModel, ProjectModel } from 'models';
export interface SavedStorageModel {
  programmings: ProgrammingModel[];
  contracts: ContractModel[];
  projects: ProjectModel[];
  upgrades: any;
  money: any;
  enterprise: any;
}
