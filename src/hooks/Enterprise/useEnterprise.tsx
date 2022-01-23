import { createContext, useContext, useState } from 'react';

import * as C from 'common/utils/constants/storage';

import { IEnterpriseContext, IEnterpriseProvider } from './interface';

const EnterpriseContext = createContext<IEnterpriseContext>(
  {} as IEnterpriseContext,
);

function EnterpriseProvider({ children }: IEnterpriseProvider) {
  if (!localStorage.getItem(C.limitContracts)) {
    localStorage.setItem(C.limitContracts, '2');
    localStorage.setItem(C.limitContractsActive, '1');
    localStorage.setItem(C.limitProjects, '1');
    localStorage.setItem(C.programmersLimit, '1');
    localStorage.setItem(C.contractsActive, JSON.stringify([]));
    localStorage.setItem(C.contractsFree, JSON.stringify([]));
    localStorage.setItem(C.projects, JSON.stringify([]));
    localStorage.setItem(C.programmers, JSON.stringify([]));
  }
  const [contractsLimit, setContractsLimit] = useState<number>(
    parseInt(localStorage.getItem(C.limitContracts) || '0', 10),
  );
  const [contractsLimitActive, setContractsLimitActive] = useState<number>(
    parseInt(localStorage.getItem(C.limitContractsActive) || '0', 10),
  );
  const [projectsLimit, setProjectsLimit] = useState<number>(
    parseInt(localStorage.getItem(C.limitProjects) || '0', 10),
  );

  const [programmersLimit, setProgrammersLimit] = useState(
    parseInt(localStorage.getItem(C.programmersLimit) || '0', 10),
  );

  return (
    <EnterpriseContext.Provider
      value={{
        contractsLimitActive,
        contractsLimit,
        projectsLimit,
        programmersLimit,
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
