import { createContext, useContext, useState } from 'react';

import { FieldArray } from 'common/utils';
import { ProgrammingModel, ProjectModel, SavedStorageModel } from 'models';
import { ContractModel, ContractSavedStorage } from 'models/Contracts';

import { ISavedStorageContext, ISavedStorageProvider } from './interfaces';

const SavedStorageContext = createContext<ISavedStorageContext>(
  {} as ISavedStorageContext,
);

class SavedStorage {
  readonly programmings: ProgrammingModel[];
  readonly contracts: ContractSavedStorage;
  readonly projects: ProjectModel[];
  readonly time: number;
  readonly upgrades: unknown;
  readonly money: unknown;
  readonly enterprise: unknown;

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
      time: 0,
      contracts: {
        contractsActive: [
          {
            title: 'OpaEae',
            dependencies: [{ type: 'programming', value: 5 }],
            description: 'Tudo bom e teste irmao !!',
            reward: 1000,
          },
        ],
        contractsFree: [
          {
            title: 'FODASE',
            dependencies: [{ type: 'programming', value: 5 }],
            description: 'Tudo bom e teste irmao !!',
            reward: 1000,
          },
        ],
      },
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
    this.time = data.time;
    this.money = data.money;
    this.enterprise = data.enterprise;
    if (!load) this.save(data);
  }

  get contractsFree(): FieldArray<ContractModel> {
    return new FieldArray<ContractModel>([...this.contracts.contractsFree]);
  }

  get contractsActive(): FieldArray<ContractModel> {
    return new FieldArray<ContractModel>([...this.contracts.contractsActive]);
  }

  get programmingsStorage(): FieldArray<ProgrammingModel> {
    return new FieldArray<ProgrammingModel>([...this.programmings]);
  }

  get projectsStorage(): FieldArray<ProjectModel> {
    return new FieldArray<ProjectModel>([...this.projects]);
  }

  save(data: SavedStorageModel): string {
    const saved = JSON.stringify(data);
    localStorage.setItem('@development-hell:storage', saved);
    return saved;
  }

  load(): SavedStorageModel | null {
    const data = JSON.parse(
      localStorage.getItem('@development-hell:storage') || 'null',
    ) as SavedStorageModel;

    return data;
  }
}

function SavedStorageProvider({ children }: ISavedStorageProvider) {
  const [savedStorage] = useState<SavedStorage>(new SavedStorage());

  return (
    <SavedStorageContext.Provider
      value={{
        savedStorage,
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

export { SavedStorageProvider, useSavedStorage, SavedStorage };
