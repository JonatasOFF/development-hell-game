import { ReactElement } from 'react';

import { FieldArray } from 'common/utils';
import { ContractModel } from 'models';
export interface IContractsContext {
  contractsActive: FieldArray<ContractModel>;
  contractsFree: FieldArray<ContractModel>;
  handleActiveContract: (index: number) => void;
}

export interface IContractsProvider {
  children: ReactElement;
}
