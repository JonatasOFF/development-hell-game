import { useCallback, useState, useEffect, useRef } from 'react';

import { Canvas } from './Canvas/Canvas';
import * as S from './styles';

export function Enterprise() {
  return <Canvas styles={{ backgroundColor: 'red' }} id="canvas" />;
}
