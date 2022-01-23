import { ReactElement } from 'react';

export interface IEnterpriseContext {
  contractsLimit: number;
  projectsLimit: number;
  programmersLimit: number;
  contractsLimitActive: number;
}

export interface IEnterpriseProvider {
  children: ReactElement;
}
