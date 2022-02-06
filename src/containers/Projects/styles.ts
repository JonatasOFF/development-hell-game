import styled from 'styled-components';

export const Container = styled.div`
  background-color: #23211b;
  height: 100%;
`;

export const Title = styled.h1`
  text-shadow: 0rem 0rem 0.4rem #afaeae;
  color: white;
`;

export const PlusProject = styled.div`
  border-radius: 5rem;
  border: 0.4rem solid white;

  filter: brightness(2);
  cursor: pointer;
  height: 4.4rem;
  box-shadow: 0rem 0rem 0.4rem #afaeae;
  margin-left: auto;

  > svg {
    font-size: 3.6rem;
    fill: white;
  }
`;

export const Header = styled.div`
  display: flex;
  padding: 0.8rem;
`;

export const BorderBrightness = styled.div`
  width: 100%;
  height: 0.5rem;
  filter: brightness(2);
  background-color: white;
  box-shadow: 0rem 0rem 0.4rem white;
`;

export const List = styled.ul``;

export const ItemProject = styled.li``;
