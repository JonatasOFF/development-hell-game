import { createContext, useContext, useEffect, useState } from 'react';

import { FieldArray } from 'common/utils';
import { useSavedStorage } from 'hooks/SavedStorage';

import {
  Callbackfn,
  IEnterpriseContext,
  IEnterpriseProvider,
} from './interface';

const EnterpriseContext = createContext<IEnterpriseContext>(
  {} as IEnterpriseContext,
);

function EnterpriseProvider({ children }: IEnterpriseProvider) {
  const { savedStorage } = useSavedStorage();
  const [callbackfn, setCallbackfn] = useState<FieldArray<Callbackfn>>(
    new FieldArray<Callbackfn>([]),
  );
  const [time, setTime] = useState(savedStorage.time);

  useEffect(() => {
    const tick = setInterval(() => {
      callbackfn.list.forEach(fun => fun());
      setTime(time + 1);
    }, 1000);

    return () => clearInterval(tick);
  }, [callbackfn, time]);
  return (
    <EnterpriseContext.Provider value={{ callbackfn, time, setCallbackfn }}>
      {children}
    </EnterpriseContext.Provider>
  );
}

function useEnterprise(): IEnterpriseContext {
  const context = useContext(EnterpriseContext);
  return context;
}

export { EnterpriseProvider, useEnterprise };
