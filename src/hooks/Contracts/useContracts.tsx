import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { FieldArray } from 'common/utils';
import * as C from 'common/utils/constants/storage';
import { useEnterprise } from 'hooks';
import { ContractModel } from 'models';

import { IContractsContext, IContractsProvider } from './interface';

const ContractsContext = createContext<IContractsContext>(
  {} as IContractsContext,
);

function ContractsProvider({ children }: IContractsProvider) {
  const [contractsActive, setContractsActive] = useState<ContractModel[]>([]);
  const [contractsFree, setContractsFree] = useState<ContractModel[]>([]);

  useEffect(() => {
    const generatorContracts = setInterval(() => {
      if (2 > contractsFree.length) {
        const field = new FieldArray<ContractModel>([...contractsFree]);
        const newContractsFree: ContractModel = {
          title: 'OpaEae',
          dependencies: [
            { type: 'programming', value: Math.floor(Math.random() * 10) },
          ],
          description: 'Tudo bom e teste irmao !!',
          reward: 1000,
        };

        setContractsFree(field.append(newContractsFree));
      }
    }, 1000);
    return () => clearInterval(generatorContracts);
  }, [contractsFree]);

  const handleActiveContract = useCallback(
    (index: number) => {
      if (2 > contractsActive.length) {
        const field = new FieldArray<ContractModel>([...contractsFree]);

        setContractsActive([...contractsActive, field.get(index)]);
        setContractsFree(field.remove(index));
      }
    },
    [2, contractsActive, contractsFree],
  );

  return (
    <ContractsContext.Provider
      value={{
        contractsActive,
        contractsFree,
        handleActiveContract,
      }}
    >
      {children}
    </ContractsContext.Provider>
  );
}

function useContracts(): IContractsContext {
  const context = useContext(ContractsContext);
  return context;
}

export { ContractsProvider, useContracts };
