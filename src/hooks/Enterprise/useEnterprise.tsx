import { createContext, useContext, useState } from 'react';

import * as C from 'common/utils/constants/storage';

import { IEnterpriseContext, IEnterpriseProvider } from './interface';

const EnterpriseContext = createContext<IEnterpriseContext>(
  {} as IEnterpriseContext,
);

function EnterpriseProvider({ children }: IEnterpriseProvider) {
  const [contractsLimit, setContractsLimit] = useState<number>(99);
  const [contractsLimitActive, setContractsLimitActive] = useState<number>(99);
  const [projectsLimit, setProjectsLimit] = useState<number>(99);
  const [programmersLimit, setProgrammersLimit] = useState(99);

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
