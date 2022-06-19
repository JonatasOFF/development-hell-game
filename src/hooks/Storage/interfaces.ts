import { ReactElement } from 'react';

export interface IStorageContext {
  text?: string;
}

export interface IStorageProvider {
  children: ReactElement;
}
