import { ReactElement, useContext } from 'react';

import { ContractsProvider } from './Contracts';
import { EnterpriseProvider } from './Enterprise';
import { ProgrammingProvider } from './Programming';
import { ProjectsProvider } from './Projects';

interface AppProviderProps {
  children: ReactElement;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <EnterpriseProvider>
      <ProgrammingProvider>
        <ProjectsProvider>
          <ContractsProvider>{children}</ContractsProvider>
        </ProjectsProvider>
      </ProgrammingProvider>
    </EnterpriseProvider>
  );
}
