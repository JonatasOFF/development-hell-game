import { ReactElement } from 'react';

import { SavedStorage } from './SavedStorage';

export interface ISavedStorageContext {
  savedStorage: SavedStorage;
}

export interface ISavedStorageProvider {
  children: ReactElement;
}
