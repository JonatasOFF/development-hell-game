import { ReactElement } from 'react';

import { ContractModel } from 'models';
export interface IContractsContext {
  context: string;
  contractsActive: ContractModel[];
  contractsFree: ContractModel[];

  handleGenerateContracts: () => void;
  handleActiveContract: () => void;
}

export interface IContractsProvider {
  children: ReactElement;
}
