import styled, { css } from 'styled-components';

const modifier = {};

export const Container = styled.div`
  display: flex;
  height: 5.5rem;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  color: white;
`;

export const Age = styled.div`
  color: white;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  margin-left: auto;
`;

export const Production = styled.div`
  color: white;
`;

export const Photograph = styled.img`
  height: 5rem;
  width: 5rem;
`;
