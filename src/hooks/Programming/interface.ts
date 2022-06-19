import { ReactElement } from 'react';

import { FieldArray } from 'common/utils';
import { ProgrammingModel } from 'models';

export interface IProgrammingContext {
  programmings: FieldArray<ProgrammingModel>;
}

export interface IProgrammingProvider {
  children: ReactElement;
}
