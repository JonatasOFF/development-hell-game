import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

export const Contracts = styled.div`
  display: flex;
  height: 10rem;
  width: 35rem;
  justify-self: end;
  border: 0.5rem solid black;
  text-align: center;
`;

export const Projects = styled.div`
  height: calc(100% - 10rem);
  width: 35rem;
  justify-self: end;
  border: 0.5rem solid black;
  text-align: center;
`;

export const Programming = styled.div`
  display: flex;
  height: 15rem;
  width: 35rem;
  justify-self: end;
  border: 0.5rem solid black;
  text-align: center;
`;

export const Upgrades = styled.div`
  height: calc(100% - 15rem);
  width: 35rem;
  justify-self: end;
  border: 0.5rem solid black;
  text-align: center;
`;

export const RightComponents = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: end;
  min-width: 35rem;
  margin-left: auto;
  border-left: 0.2rem solid black;
`;

export const CenterComponents = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 100%;
  text-align: center;
`;

export const Company = styled.div``;

export const LeftComponents = styled.div`
  position: relative;
  justify-self: start;
`;

export const Time = styled.div`
  display: flex;
  justify-self: start;
  align-self: start;
`;
