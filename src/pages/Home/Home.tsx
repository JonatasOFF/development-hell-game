import { useEffect } from 'react';

import { useContracts } from 'hooks';

import { Contracts } from './components';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <S.LeftComponents>
        <S.Programming>Lista de Programadores</S.Programming>
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
        <S.Projects>Lista de Projetos</S.Projects>
      </S.RightComponents>
    </S.Container>
  );
}
