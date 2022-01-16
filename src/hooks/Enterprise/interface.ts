import { ReactElement } from 'react';

export interface IEnterpriseContext {
  contractsLimit: number;
  projectsLimit: number;
  programmersLimit: number;
}

export interface IEnterpriseProvider {
  children: ReactElement;
}
