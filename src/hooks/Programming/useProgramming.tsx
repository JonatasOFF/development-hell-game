import { createContext, useContext, useState } from 'react';

import { FieldArray } from 'common/utils';
import { useSavedStorage } from 'hooks';
import { ProgrammingModel } from 'models';

import { IProgrammingContext, IProgrammingProvider } from './interface';

const ProgrammingContext = createContext<IProgrammingContext>(
  {} as IProgrammingContext,
);

function ProgrammingProvider({ children }: IProgrammingProvider) {
  const { savedStorage } = useSavedStorage();
  const [programmings] = useState<FieldArray<ProgrammingModel>>(
    savedStorage.programmingsStorage,
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
