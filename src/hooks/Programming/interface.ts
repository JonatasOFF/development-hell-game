import { ReactElement } from 'react';

import { ProgrammingModel } from 'models';

export interface IProgrammingContext {
  programmings: ProgrammingModel[];
}

export interface IProgrammingProvider {
  children: ReactElement;
}
