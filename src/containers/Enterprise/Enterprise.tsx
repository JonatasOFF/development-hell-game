import { useRef } from 'react';

import { Canvas } from './Canvas/Canvas';
import * as S from './styles';

export function Enterprise() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <S.Container ref={containerRef}>
      <Canvas containerRef={containerRef} />
    </S.Container>
  );
}
