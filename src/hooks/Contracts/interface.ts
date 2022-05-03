import { ReactElement } from 'react';

import { ContractModel } from 'models';
export interface IContractsContext {
  contractsActive: ContractModel[];
  contractsFree: ContractModel[];
  handleActiveContract: (index: number) => void;
}

export interface IContractsProvider {
  children: ReactElement;
}
