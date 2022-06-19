import { createContext, useContext, useEffect, useMemo } from 'react';

import { useContracts } from 'hooks/Contracts';
import { useEnterprise } from 'hooks/Enterprise';
import { useProgramming } from 'hooks/Programming';
import { useProjects } from 'hooks/Projects';
import { useSavedStorage } from 'hooks/SavedStorage';

import { IStorageContext, IStorageProvider } from './interfaces';

const StorageContext = createContext<IStorageContext>({} as IStorageContext);

function StorageProvider({ children }: IStorageProvider) {
  const { savedStorage } = useSavedStorage();
  const { contractsActive, contractsFree } = useContracts();
  const { time } = useEnterprise();
  const { programmings } = useProgramming();
  const { projects } = useProjects();

  const data = useMemo(() => {
    return {
      programmings: programmings.list,
      contracts: {
        contractsActive: contractsActive.list,
        contractsFree: contractsFree.list,
      },
      projects: projects.list,
      upgrades: [],
      money: 0,
      time: time,
      enterprise: [],
    };
  }, [time]);

  useEffect(() => {
    if (time % 10 === 0) savedStorage.save(data);
  }, [time]);

  return (
    <StorageContext.Provider value={{}}>{children}</StorageContext.Provider>
  );
}

function useStorage(): IStorageContext {
  const context = useContext(StorageContext);

  return context;
}

export { StorageProvider, useStorage };
