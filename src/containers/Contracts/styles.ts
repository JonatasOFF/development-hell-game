import styled, { css } from 'styled-components';

interface AttributtesPropsStyles {
  type?: 'programming' | 'frontend' | 'backend';
}

const modifier = {
  attributes: {
    programming: () => css`
      > p {
        color: #42eaf0;
      }

      > div {
        background-color: #42eaf0;
      }
    `,
    frontend: () => css`
      > p {
        color: #f7df25;
      }

      > div {
        background-color: #f7df25;
      }
    `,
    backend: () => css`
      > p {
        color: #33ff33;
      }

      > div {
        background-color: #33ff33;
      }
    `,
  },
};

export const ModalStyles = {
  content: {
    background: '#32302c',
    width: '55rem',
    height: 'fit-content',
    margin: 'auto auto',
    border: 0,
    padding: '0rem',
    borderRadius: '2rem',
    boxShadow: '0rem 0.3rem 1.2rem #00000029',
  },
  overlay: {
    background: '#70707033',

    backdropFilter: 'blur(0.3rem)',
    zIndex: 15,
  },
};

export const ContainerModal = styled.div`
  padding: 1.6rem;
`;

export const ContainerModalAtribbutes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
  margin-bottom: 4rem;
  margin-top: 3rem;
`;

export const Container = styled.div`
  max-height: 20rem;
  min-height: 20rem;
  background-color: #23211b;
  display: flex;
  color: #fffbd9;
  border-radius: 0.1rem;
`;

export const ContainerContracts = styled.div`
  padding: 1.6rem;
  width: 100%;
`;

export const Attributes = styled.div`
  margin-top: 1.5rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  > div {
    margin-right: 1rem;
    margin-bottom: 0.6rem;
  }
`;

export const Attribute = styled.div`
  ${({ type }: AttributtesPropsStyles) => css`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    ${!!type && modifier.attributes[type]()}
  `}
`;

export const Header = styled.div`
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const Pointer = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 5rem;
  margin-right: 0.5rem;
`;

export const DescriptionContract = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  font-style: italic;
  margin-top: 0.5rem;
  word-spacing: 0.1rem;
  color: #ccc9ad;
  word-break: break;
  text-align: center;
`;

export const ArrowButton = styled.div`
  height: 100%;
  background-color: #23211b;
  display: grid;
  padding: 0 0.6rem;
  justify-items: center;
  align-content: center;
  cursor: pointer;
  :hover {
    background-color: #c6c2a7;
    color: black;
  }
`;

export const About = styled.div`
  background-color: #23211b;
  color: #ffffff;
  text-align: center;
  width: 50%;
  font-size: 1.6rem;
  cursor: pointer;
  padding: 0.3rem 0.4rem;
  border: 0.2rem solid white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  transition: all 0.2s ease-out;
  :hover {
    background-color: #c6c2a7;
    color: black;
  }
`;

export const CloseModal = styled.span`
  position: absolute;
  right: 1.5rem;
  cursor: pointer;
  > svg {
    fill: white;
  }
`;
