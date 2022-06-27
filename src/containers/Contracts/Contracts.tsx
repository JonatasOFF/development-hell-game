import { useCallback, useState } from 'react';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';
import Modal from 'react-modal';

import { uniqByKeepLast } from 'common/utils/uniqByKeepLast';
import { useContracts } from 'hooks';

import * as S from './styles';

export function Contracts() {
  const { handleActiveContract, contractsFree } = useContracts();
  const [select, setSelect] = useState(0);
  const handleVerifySelect = useCallback(
    (toBeSelect: number) => {
      if (toBeSelect > contractsFree.length - 1) return setSelect(0);

      if (toBeSelect < 0) return setSelect(contractsFree.length - 1);

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
      {contractsFree.length > 1 && (
        <S.ArrowButton onClick={handlePrevious}>
          <ImArrowLeft2 />
        </S.ArrowButton>
      )}

      <S.ContainerContracts>
        {contractsFree.length > 0 && (
          <div>
            <S.Header>{contractsFree.get(select).title}</S.Header>
            <S.DescriptionContract>
              {contractsFree.get(select).descriptionAbout}
            </S.DescriptionContract>
            <S.Attributes>
              {contractsFree
                .get(select)
                .dependencies.map((dependecie, index) => (
                  <S.Attribute
                    type={dependecie.type}
                    key={dependecie.type + index + 9999}
                  >
                    <S.Pointer />
                    <p>{dependecie.type}</p>
                  </S.Attribute>
                ))}
            </S.Attributes>
            <S.About>Visualizar </S.About>
          </div>
        )}
        {contractsFree.length === 0 && 'sem contratos'}
      </S.ContainerContracts>
      {contractsFree.length > 1 && (
        <S.ArrowButton onClick={handleNext}>
          <ImArrowRight2 />
        </S.ArrowButton>
      )}

      <Modal isOpen={false}>Abre a rola</Modal>
    </S.Container>
  );
}
