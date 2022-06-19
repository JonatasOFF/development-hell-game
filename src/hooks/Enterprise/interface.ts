import { ReactElement, SetStateAction, Dispatch } from 'react';

import { FieldArray } from 'common/utils';

export interface IEnterpriseContext {
  callbackfn: FieldArray<Callbackfn>;
  time: number;
  setCallbackfn: Dispatch<SetStateAction<FieldArray<Callbackfn>>>;
}

export type Callbackfn = () => void;
export interface IEnterpriseProvider {
  children: ReactElement;
}
