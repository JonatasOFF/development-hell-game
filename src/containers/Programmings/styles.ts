import styled, { css } from 'styled-components';

const modifier = {};

export const Container = styled.div`
  background-color: #23211b;
  display: flex;
  flex-direction: column;
  height: 15rem;
  width: 35rem;
  justify-self: end;
  border: 0.5rem solid black;
  text-align: center;
`;

export const Title = styled.h1`
  text-shadow: 0rem 0rem 0.4rem #afaeae;
  color: #42eaf0;
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
  max-height: 15rem;
  overflow-y: auto;
`;

export const Border = styled.div`
  height: 0.5rem;
  width: 101%;
  background-color: white;
`;

export const Item = styled.li`
  margin-bottom: 0.5rem;
`;
