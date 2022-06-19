import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { FieldArray } from 'common/utils';
import { useSavedStorage } from 'hooks';
import { ContractModel } from 'models';

import { IContractsContext, IContractsProvider } from './interface';

const ContractsContext = createContext<IContractsContext>(
  {} as IContractsContext,
);

function ContractsProvider({ children }: IContractsProvider) {
  const { savedStorage } = useSavedStorage();
  const [att, setAtt] = useState(0);
  const [contractsActive, setContractsActive] = useState<
    FieldArray<ContractModel>
  >(savedStorage.contractsActive);
  const [contractsFree, setContractsFree] = useState<FieldArray<ContractModel>>(
    savedStorage.contractsFree,
  );

  useEffect(() => {
    const generatorContracts = setInterval(() => {
      if (1 > contractsFree.length) {
        const newContractsFree: ContractModel = {
          title: 'FODASE 2',
          dependencies: [
            { type: 'programming', value: Math.floor(Math.random() * 10) },
          ],
          description: 'Tudo bom e teste irmao !!',
          reward: 1000,
        };

        setContractsFree(contractsFree.append(newContractsFree));
      }
      setAtt(att + 1);
    }, 5200);
    return () => clearInterval(generatorContracts);
  }, [att]);

  const handleActiveContract = useCallback(
    (index: number) => {
      if (3 > contractsActive.length) {
        setContractsActive(contractsActive.append(contractsFree.get(index)));
        setContractsFree(contractsFree.remove(index));
        setAtt(att + 1);
      }
    },
    [att],
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
