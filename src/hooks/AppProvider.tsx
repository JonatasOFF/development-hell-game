import { ReactElement } from 'react';

import { ContractsProvider } from './Contracts';
import { EnterpriseProvider } from './Enterprise';
import { ProjectsProvider } from './Projects';

interface AppProviderProps {
  children: ReactElement;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <EnterpriseProvider>
      <ContractsProvider>
        <ProjectsProvider>{children}</ProjectsProvider>
      </ContractsProvider>
    </EnterpriseProvider>
  );
}
