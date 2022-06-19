import { useProgramming } from 'hooks';

import { Programming } from './components';
import * as S from './styles';

export function Programmings() {
  const { programmings } = useProgramming();

  return (
    <S.Container>
      <S.Title>Lista de Programadores</S.Title>
      <S.Border />
      <S.List>
        {programmings &&
          programmings.list.map(programming => (
            <Programming {...programming} key={programming.name} />
          ))}
      </S.List>
    </S.Container>
  );
}
