import { createContext, useContext, useState } from 'react';

import * as C from 'common/utils/constants/storage';
import { ProgrammingModel } from 'models';

import { IProgrammingContext, IProgrammingProvider } from './interface';

const ProgrammingContext = createContext<IProgrammingContext>(
  {} as IProgrammingContext,
);

function ProgrammingProvider({ children }: IProgrammingProvider) {
  if (JSON.parse(localStorage.getItem(C.programmers) || '[]')) {
    const mockProgrammings: ProgrammingModel[] = [
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
    ];
    localStorage.setItem(C.programmers, JSON.stringify(mockProgrammings));
  }

  const [programmings, setProgrammings] = useState(
    JSON.parse(localStorage.getItem(C.programmers) || '{}'),
  );

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
