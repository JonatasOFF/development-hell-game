import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { FieldArray } from 'common/utils';
import { useSavedStorage, useEnterprise } from 'hooks';
import { ContractModel } from 'models';

import { IContractsContext, IContractsProvider } from './interface';

const ContractsContext = createContext<IContractsContext>(
  {} as IContractsContext,
);

function ContractsProvider({ children }: IContractsProvider) {
  const { savedStorage } = useSavedStorage();
  const { callbackfn, setCallbackfn } = useEnterprise();

  const [contractsActive, setContractsActive] = useState<
    FieldArray<ContractModel>
  >(savedStorage.contractsActive);
  const [contractsFree, setContractsFree] = useState<FieldArray<ContractModel>>(
    savedStorage.contractsFree,
  );

  const generatorContractsFn = useCallback(
    (time: number) => {
      if (6 > contractsFree.length && time % 100 === 0) {
        const newContractsFree: ContractModel = {
          title: Math.floor(Math.random() * 100) + '123',
          dependencies: [
            { type: 'programming', value: Math.floor(Math.random() * 10) },
            { type: 'frontend', value: Math.floor(Math.random() * 10) },
            { type: 'backend', value: Math.floor(Math.random() * 10) },
          ],
          description: 'Tudo bom e teste irmao !!',
          descriptionAbout: 'é um contrato bom confia',
          reward: 1000,
        };

        setContractsFree(contractsFree.append(newContractsFree));
      }
    },
    [contractsFree, contractsActive],
  );

  useEffect(() => {
    setCallbackfn(callbackfn.append(generatorContractsFn));
  }, []);

  const handleActiveContract = (index: number) => {
    if (999 > contractsActive.length) {
      setContractsActive(contractsActive.append(contractsFree.get(index)));
      setContractsFree(contractsFree.remove(index));
    }
  };

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
