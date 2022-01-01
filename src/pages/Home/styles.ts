import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

export const Contracts = styled.div`
  display: flex;
  height: 100px;
  width: 350px;
  justify-self: end;
  border: 5px solid black;
  text-align: center;
`;

export const Projects = styled.div`
  height: calc(100% - 100px);
  width: 350px;
  justify-self: end;
  border: 5px solid black;
  text-align: center;
`;

export const Programming = styled.div`
  display: flex;
  height: 150px;
  width: 350px;
  justify-self: end;
  border: 5px solid black;
  text-align: center;
`;

export const Upgrades = styled.div`
  height: calc(100% - 150px);
  width: 350px;
  justify-self: end;
  border: 5px solid black;
  text-align: center;
`;

export const RightComponents = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: end;
  margin-left: auto;
  border-left: 2px solid black;
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
