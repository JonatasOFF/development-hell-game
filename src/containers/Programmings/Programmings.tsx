import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { Dropdown, ItemProject, TextField } from 'components';
import { useProgramming } from 'hooks';

import { Programming } from './components';
import { ProgrammingsProps } from './interfaces';
import * as S from './styles';

export function Programmings({ text }: ProgrammingsProps) {
  const { programmings } = useProgramming();

  return (
    <S.Container>
      <S.Title>Lista de Programadores</S.Title>
      <S.Border />
      <S.List>
        {programmings &&
          programmings.map(programming => (
            <Programming {...programming} key={programming.name} />
          ))}
      </S.List>
    </S.Container>
  );
}
