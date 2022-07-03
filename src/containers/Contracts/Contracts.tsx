import { useCallback, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';
import Modal from 'react-modal';

import { useContracts } from 'hooks';

import * as S from './styles';

export function Contracts() {
  const { handleActiveContract, contractsFree } = useContracts();
  const [select, setSelect] = useState(0);
  const [openModalContract, setOpenModalContract] = useState(false);
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
        {contractsFree.get(select) !== undefined && (
          <div>
            <S.Header>{contractsFree.get(select)?.title}</S.Header>
            <S.DescriptionContract>
              {contractsFree.get(select)?.descriptionAbout}
            </S.DescriptionContract>
            <S.Attributes>
              {contractsFree
                .get(select)
                ?.dependencies.map((dependecie, index) => (
                  <S.Attribute
                    type={dependecie.type}
                    key={dependecie.type + index + 9999}
                  >
                    <S.Pointer />
                    <p>{dependecie.type}</p>
                  </S.Attribute>
                ))}
            </S.Attributes>
            <S.About onClick={() => setOpenModalContract(true)}>
              Visualizar{' '}
            </S.About>
          </div>
        )}
        {contractsFree.length === 0 && 'sem contratos'}
      </S.ContainerContracts>
      {contractsFree.length > 1 && (
        <S.ArrowButton onClick={handleNext}>
          <ImArrowRight2 />
        </S.ArrowButton>
      )}

      <Modal
        ariaHideApp={false}
        isOpen={openModalContract && contractsFree.get(select) !== undefined}
        style={S.ModalStyles}
      >
        <S.ContainerModal>
          <S.CloseModal
            onClick={() => {
              setOpenModalContract(false);
            }}
          >
            <AiFillCloseCircle />
          </S.CloseModal>
          <S.Header>{contractsFree.get(select)?.title}</S.Header>
          <S.DescriptionContract>
            {'" ' + contractsFree.get(select)?.description + ' "'}
          </S.DescriptionContract>
          <S.ContainerModalAtribbutes>
            {contractsFree
              .get(select)
              ?.dependencies.map((dependecie, index) => (
                <S.Attribute
                  type={dependecie.type}
                  key={dependecie.type + index + 9999}
                >
                  <S.Pointer />
                  <p>
                    {dependecie.type} {dependecie.value}
                  </p>
                </S.Attribute>
              ))}
          </S.ContainerModalAtribbutes>

          <S.About
            onClick={() => {
              handleActiveContract(select);

              setOpenModalContract(false);
            }}
          >
            Aceitar
          </S.About>
          <S.About onClick={() => setOpenModalContract(false)}>Recusar</S.About>
        </S.ContainerModal>
      </Modal>
    </S.Container>
  );
}
