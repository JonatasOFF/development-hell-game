import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { Dropdown, ItemProject, TextField } from 'components';

import { ProgrammingProps } from './interfaces';
import * as S from './styles';

export function Programming({ name, age, production }: ProgrammingProps) {
  return (
    <S.Container>
      <S.Photograph
        src={
          'https://static5.depositphotos.com/1020482/535/i/600/depositphotos_5354415-stock-photo-3d-businessman-with-dollar-currency.jpg'
        }
        alt="foto do amiguinho"
      />
      <S.Information>
        <S.Name>{name}</S.Name>
        <S.Age>Age: {age}</S.Age>
        <S.Production>
          Produz quanto: <b>{production}/h</b>
        </S.Production>
      </S.Information>
    </S.Container>
  );
}
