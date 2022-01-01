import { TestProps } from './interfaces';
import * as S from './styles';

export function Test({ text }: TestProps) {
  return (
    <S.Container>
      <h1>{text}</h1>
    </S.Container>
  );
}
