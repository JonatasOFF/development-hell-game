import { useEffect, useMemo } from 'react';

import { clock } from 'common/utils/clock';
import { Contracts, Programmings, Projects } from 'containers';
import { Enterprise } from 'containers/Enterprise';
import { useEnterprise, useStorage } from 'hooks';

import * as S from './styles';

export function Home() {
  const storage = useStorage();
  const { callbackfn, time, setCallbackfn } = useEnterprise();

  const { second, minute, hour, day } = useMemo(() => clock(time), [time]);

  return (
    <S.Container>
      <S.LeftComponents>
        <Programmings />
        <S.Upgrades>Lista de Upgrades</S.Upgrades>
      </S.LeftComponents>
      <S.CenterComponents>
        <S.Company>
          <S.Time>
            {hour}:{minute}:{second}
          </S.Time>
          Day: {day}
          <Enterprise />
        </S.Company>
      </S.CenterComponents>
      <S.RightComponents>
        <Contracts />
        <Projects />
      </S.RightComponents>
    </S.Container>
  );
}
