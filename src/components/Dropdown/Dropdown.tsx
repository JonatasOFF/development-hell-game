import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { DropdownProps } from './interfaces';
import * as S from './styles';

export function Dropdown({
  label,
  placeholder,
  list,
  value,
  onChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <S.Dropdown>
      <S.BodyInput onClick={() => setOpen(!open)}>
        <S.Label>{label}</S.Label>
        <S.AlignInputAndIcon>
          {!!value && <S.Value>{value}</S.Value>}
          {!value && <S.Placeholder>{placeholder}</S.Placeholder>}
          <S.BodyIcon open={open}>
            <AiOutlineArrowRight size={19} />
          </S.BodyIcon>
        </S.AlignInputAndIcon>
      </S.BodyInput>
      {!!list && (
        <S.List open={open}>
          {list.map(item => (
            <S.Item
              onClick={() => {
                if (onChange) onChange(item);
              }}
              key={item}
            >
              {item}
            </S.Item>
          ))}
        </S.List>
      )}
    </S.Dropdown>
  );
}
