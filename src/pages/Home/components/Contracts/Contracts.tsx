import { useState, useCallback } from 'react';
import { ImArrowRight2, ImArrowLeft2 } from 'react-icons/im';

import { ContractsProps } from './interfaces';
import * as S from './styles';

export function Contracts({ text }: ContractsProps) {
  const contracts = [
    {
      title: 'Cobras Ajato',
      dependencies: [
        {
          type: 'Programming',
          value: 9,
        },
      ],
      description:
        '"Uma empresa precisa TE CHUPARKKKKK E EU NÃO TO NEM BRINCANDO OLHA ELA AQUI ME CH#PAN"',
    },
    {
      title: 'Mulhers',
      dependencies: [
        {
          type: 'Programming',
          value: 5,
        },
      ],
      description: '"Imagine, elas semen Nuas..."',
    },
    {
      title: 'Comunismo Idealizado',
      dependencies: [
        {
          type: 'Programming',
          value: 8,
        },
      ],
      description: '"Pode parecer estranho, mas já somos comunistas ☭"',
    },
  ];
  const [select, setSelect] = useState(0);
  const handleVerifySelect = useCallback(
    (toBeSelect: number) => {
      if (toBeSelect > contracts.length - 1) return setSelect(0);
      if (toBeSelect < 0) return setSelect(contracts.length - 1);

      setSelect(toBeSelect);
    },
    [select],
  );

  const handleNext = useCallback(() => {
    handleVerifySelect(select + 1);
  }, [select]);

  const handlePrevious = useCallback(() => {
    handleVerifySelect(select - 1);
  }, [select]);
  return (
    <S.Container>
      {text}
      <S.Header>{contracts[select].title}</S.Header>
      <S.Attributes>
        {contracts[select].dependencies.map(dependency => (
          <S.Attribute key={dependency.type}>
            <S.ProgrammingPointer />
            <p>
              {dependency.value} {dependency.type}
            </p>
          </S.Attribute>
        ))}
      </S.Attributes>
      <S.DescriptionContract>
        {contracts[select].description}
      </S.DescriptionContract>
      <S.ArrowNextContract onClick={() => handleNext()}>
        <ImArrowRight2 />
      </S.ArrowNextContract>
      <S.ArrowPreviousContract onClick={() => handlePrevious()}>
        <ImArrowLeft2 />
      </S.ArrowPreviousContract>
    </S.Container>
  );
}
