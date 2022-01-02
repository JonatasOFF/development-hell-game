import { createContext, useCallback, useContext, useState } from 'react';

import * as C from 'common/utils/constants/storage';

import { IEnterpriseContext, IEnterpriseProvider } from './interface';

const EnterpriseContext = createContext<IEnterpriseContext>(
  {} as IEnterpriseContext,
);

function EnterpriseProvider({ children }: IEnterpriseProvider) {
  if (!localStorage.getItem(C.limitContracts)) {
    localStorage.setItem(C.limitContracts, '2');
    localStorage.setItem(C.limitProjects, '1');
  }
  const [contractsLimit, setContractsLimit] = useState<number>(
    parseInt(localStorage.getItem(C.limitContracts) || '0', 10),
  );
  const [projectsLimit, setProjectsLimit] = useState(
    parseInt(localStorage.getItem(C.limitProjects) || '0', 10),
  );

  return (
    <EnterpriseContext.Provider
      value={{
        context: 'Empata foda',
      }}
    >
      {children}
    </EnterpriseContext.Provider>
  );
}

function useEnterprise(): IEnterpriseContext {
  const context = useContext(EnterpriseContext);
  return context;
}

export { EnterpriseProvider, useEnterprise };
