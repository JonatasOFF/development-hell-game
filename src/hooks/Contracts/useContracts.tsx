import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import * as C from 'common/utils/constants/storage';
import { useEnterprise } from 'hooks';
import { ContractModel } from 'models';

import { IContractsContext, IContractsProvider } from './interface';

const ContractsContext = createContext<IContractsContext>(
  {} as IContractsContext,
);

function ContractsProvider({ children }: IContractsProvider) {
  const storageContractsActive = JSON.parse(
    localStorage.getItem(C.contractsActive) || '[]',
  );
  const storageContractsFree = JSON.parse(
    localStorage.getItem(C.contractsActive) || '[]',
  );
  const { contractsLimit } = useEnterprise();

  const [contractsActive, setContractsActive] = useState<ContractModel[]>(
    storageContractsActive,
  );
  const [contractsFree, setContractsFree] =
    useState<ContractModel[]>(storageContractsFree);
  const handleActiveContract = useCallback(() => {
    console.log('contrato novo Ativo !');
  }, []);
  useEffect(() => {
    const generatorContracts = setInterval(() => {
      if (contractsLimit > contractsFree.length) {
        const newContractsFree: ContractModel = {
          title: 'OpaEae',
          dependencies: [{ type: 'programming', value: 4 }],
          description: 'Tudo bom e teste irmao !!',
          reward: 1000,
        };
        const contractsFreeNow = [...contractsFree];
        console.log(contractsFree);
        contractsFreeNow.push(newContractsFree);
        setContractsFree(contractsFreeNow);
      }
    }, 5000);
    return () => clearInterval(generatorContracts);
  }, [contractsFree]);
  const handleGenerateContracts = useCallback(() => {
    console.log('asd');
  }, [contractsFree]);

  return (
    <ContractsContext.Provider
      value={{
        context: 'katarina',
        contractsActive,
        contractsFree,
        handleGenerateContracts,
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
