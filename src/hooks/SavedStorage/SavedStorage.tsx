import { createContext, useContext, useState } from 'react';

import { ISavedStorageContext, ISavedStorageProvider } from './interfaces';

const SavedStorageContext = createContext<ISavedStorageContext>(
  {} as ISavedStorageContext,
);

function SavedStorageProvider({ children }: ISavedStorageProvider) {
  const [text, setText] = useState<string>('');

  return (
    <SavedStorageContext.Provider
      value={{
        text,
      }}
    >
      {children}
    </SavedStorageContext.Provider>
  );
}

function useSavedStorage(): ISavedStorageContext {
  const context = useContext(SavedStorageContext);

  return context;
}

export { SavedStorageProvider, useSavedStorage };
