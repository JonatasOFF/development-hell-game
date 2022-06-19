import { createContext, useContext, useState } from 'react';

import { FieldArray } from 'common/utils';
import {
  ContractModel,
  ProgrammingModel,
  ProjectModel,
  SavedStorageModel,
} from 'models';

import { ISavedStorageContext, ISavedStorageProvider } from './interfaces';

const SavedStorageContext = createContext<ISavedStorageContext>(
  {} as ISavedStorageContext,
);

class SavedStorage {
  readonly programmings: ProgrammingModel[];
  readonly contracts: ContractModel[];
  readonly projects: ProjectModel[];
  readonly upgrades: any;
  readonly money: any;
  readonly enterprise: any;

  constructor() {
    const developmentHellMock: SavedStorageModel = {
      programmings: [
        {
          name: 'Carlos',
          age: 45,
          production: 12,
        },
        {
          name: 'Roberto',
          age: 22,
          production: 2,
        },
      ],
      contracts: [
        {
          title: 'OpaEae',
          dependencies: [{ type: 'programming', value: 5 }],
          description: 'Tudo bom e teste irmao !!',
          reward: 1000,
        },
      ],
      projects: [
        {
          name: '123 Teste SavedStorage',
          description: '',
          contracts: [
            {
              title: 'FODASE',
              dependencies: [{ type: 'programming', value: 5 }],
              description: 'Tudo bom e teste irmao !!',
              reward: 1000,
            },
          ],
          programmings: [
            {
              name: 'Roberto',
              age: 22,
              production: 2,
            },
          ],
          payload: 5,
          bScore: 0,
          wScore: 0,
        },
      ],
      upgrades: [],
      money: 0,
      enterprise: [],
    };
    const load = this.load();
    const data = load || developmentHellMock;
    this.programmings = data.programmings;
    this.contracts = data.contracts;
    this.projects = data.projects;
    this.upgrades = data.upgrades;
    this.money = data.money;
    this.enterprise = data.enterprise;

    if (!load) this.save();
  }

  save(): string {
    const saved = JSON.stringify(this);
    localStorage.setItem('@development-hell:storage', saved);
    return saved;
  }

  load(): SavedStorageModel | null {
    const data = JSON.parse(
      localStorage.getItem('@development-hell:storage') || 'null',
    ) as SavedStorageModel;

    return data;
  }

  get arrayOfProgrammings(): FieldArray<ProgrammingModel> {
    const programmings = new FieldArray<ProgrammingModel>([
      ...this.programmings,
    ]);
    return programmings;
  }
}

function SavedStorageProvider({ children }: ISavedStorageProvider) {
  const [text, setText] = useState<string>('');
  const savedStorage = new SavedStorage();
  console.log(savedStorage.arrayOfProgrammings);

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
