import { useEffect } from 'react';

import { Contracts, Projects } from 'containers';
import { Programmings } from 'containers';
import { useContracts } from 'hooks';

import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <S.LeftComponents>
        <Programmings text="" />
        <S.Upgrades>Lista de Upgrades</S.Upgrades>
      </S.LeftComponents>
      <S.CenterComponents>
        <S.Company>
          <S.Time>999:99:99</S.Time>
          company
        </S.Company>
      </S.CenterComponents>
      <S.RightComponents>
        <Contracts text="" />
        <Projects text="" />
      </S.RightComponents>
    </S.Container>
  );
}
