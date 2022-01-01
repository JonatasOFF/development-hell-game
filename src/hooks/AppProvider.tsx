import { ReactElement } from 'react';

interface AppProviderProps {
  children: ReactElement;
}

export function AppProvider({ children }: AppProviderProps) {
  return <div>{children}</div>;
}
