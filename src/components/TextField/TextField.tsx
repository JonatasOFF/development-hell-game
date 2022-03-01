import { ChangeEvent, useCallback } from 'react';

import { TextFieldProps } from './interfaces';
import * as S from './styles';

export function TextField({
  value,
  label,
  placeholder,
  icon,
  onChange,
}: TextFieldProps) {
  const handleChangeTextField = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(value);
    },

    [onChange],
  );
  return (
    <S.TextField>
      <S.BodyInput>
        <S.Label htmlFor={`input-${label}`}>{label}</S.Label>
        <S.AlignInputAndIcon>
          <S.Input
            id={`input-${label}`}
            value={value}
            placeholder={placeholder}
            onChange={handleChangeTextField}
            type="text"
          />
          {!!icon && <S.BodyIcon>{icon}</S.BodyIcon>}
        </S.AlignInputAndIcon>
      </S.BodyInput>
    </S.TextField>
  );
}
