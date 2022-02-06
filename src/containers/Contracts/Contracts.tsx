import { useState, useCallback } from 'react';
import { ImArrowRight2, ImArrowLeft2 } from 'react-icons/im';

import { useContracts } from 'hooks';

import { ContractsProps } from './interfaces';
import * as S from './styles';

export function Contracts({ text }: ContractsProps) {
  const { handleActiveContract, contractsFree } = useContracts();
  const [select, setSelect] = useState(0);
  const handleVerifySelect = useCallback(
    (toBeSelect: number) => {
      if (toBeSelect > contractsFree.length - 1) return setSelect(0);

      if (toBeSelect < 0) return setSelect(contractsFree.length - 1);
      console.log(contractsFree.length - 1);

      setSelect(toBeSelect);
    },
    [select, contractsFree],
  );

  const handleNext = useCallback(() => {
    handleVerifySelect(select + 1);
  }, [select, contractsFree]);

  const handlePrevious = useCallback(() => {
    handleVerifySelect(select - 1);
  }, [select, contractsFree]);
  return (
    <S.Container>
      {contractsFree.length > 0 && (
        <div>
          <S.Header onClick={() => handleActiveContract(select)}>
            {contractsFree[select].title}
          </S.Header>
          <S.Attributes>
            {contractsFree[select].dependencies.map(dependency => (
              <S.Attribute key={dependency.type}>
                <S.ProgrammingPointer />
                <p>
                  {dependency.value} {dependency.type}
                </p>
              </S.Attribute>
            ))}
          </S.Attributes>
          <S.DescriptionContract>
            {contractsFree[select].description}
          </S.DescriptionContract>
          {contractsFree.length !== 1 && (
            <div>
              <S.ArrowNextContract onClick={() => handleNext()}>
                <ImArrowRight2 />
              </S.ArrowNextContract>
              <S.ArrowPreviousContract onClick={() => handlePrevious()}>
                <ImArrowLeft2 />
              </S.ArrowPreviousContract>
            </div>
          )}
        </div>
      )}
      {contractsFree.length === 0 && 'Foi mal ai vei'}
    </S.Container>
  );
}
