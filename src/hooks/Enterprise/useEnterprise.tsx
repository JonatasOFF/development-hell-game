import { createContext, useContext, useState } from 'react';

import * as C from 'common/utils/constants/storage';

import { IEnterpriseContext, IEnterpriseProvider } from './interface';

const EnterpriseContext = createContext<IEnterpriseContext>(
  {} as IEnterpriseContext,
);

function EnterpriseProvider({ children }: IEnterpriseProvider) {
  const text = '123';
  return (
    <EnterpriseContext.Provider value={{ text }}>
      {children}
    </EnterpriseContext.Provider>
  );
}

function useEnterprise(): IEnterpriseContext {
  const context = useContext(EnterpriseContext);
  return context;
}

export { EnterpriseProvider, useEnterprise };
