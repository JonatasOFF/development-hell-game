import { ReactElement } from 'react';

export interface ISavedStorageContext {
  text?: string;
}

export interface ISavedStorageProvider {
  children: ReactElement;
}
