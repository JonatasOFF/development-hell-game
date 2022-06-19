import { ReactElement } from 'react';

import { ContractsProvider } from './Contracts';
import { EnterpriseProvider } from './Enterprise';
import { ProgrammingProvider } from './Programming';
import { ProjectsProvider } from './Projects';
import { SavedStorageProvider } from './SavedStorage';

interface AppProviderProps {
  children: ReactElement;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <SavedStorageProvider>
      <EnterpriseProvider>
        <ProgrammingProvider>
          <ProjectsProvider>
            <ContractsProvider>{children}</ContractsProvider>
          </ProjectsProvider>
        </ProgrammingProvider>
      </EnterpriseProvider>
    </SavedStorageProvider>
  );
}
