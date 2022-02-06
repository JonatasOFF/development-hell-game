import { ImArrowDown2 } from 'react-icons/im';

import { ItemProjectProps } from './interfaces';
import * as S from './styles';
import { ColumnInfo } from './styles';

export function ItemProject({
  name,
  description,
  contracts,
  programmings,
  payload,
  bScore,
  wScore,
}: ItemProjectProps) {
  return (
    <S.Container>
      <S.Title>
        {name}
        <S.LineAbove>Welcome !!!</S.LineAbove>
      </S.Title>
      <ColumnInfo>
        <S.Info>Conclusion: 123:123</S.Info>
        <S.Info>Payload: R$ {payload}</S.Info>
      </ColumnInfo>
      <S.ArrowExpand>
        <ImArrowDown2 />
      </S.ArrowExpand>
    </S.Container>
  );
}
