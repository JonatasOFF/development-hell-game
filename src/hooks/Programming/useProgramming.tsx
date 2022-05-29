import { createContext, useContext, useState } from 'react';

import * as C from 'common/utils/constants/storage';
import { ProgrammingModel } from 'models';

import { IProgrammingContext, IProgrammingProvider } from './interface';

const ProgrammingContext = createContext<IProgrammingContext>(
  {} as IProgrammingContext,
);

function ProgrammingProvider({ children }: IProgrammingProvider) {
  const [programmings, setProgrammings] = useState([
    {
      name: 'Carlos',
      age: 45,
      production: 12,
    },
    {
      name: 'Roberto',
      age: 22,
      production: 2,
    },
  ]);

  return (
    <ProgrammingContext.Provider
      value={{
        programmings,
      }}
    >
      {children}
    </ProgrammingContext.Provider>
  );
}

function useProgramming(): IProgrammingContext {
  const context = useContext(ProgrammingContext);
  return context;
}

export { ProgrammingProvider, useProgramming };
