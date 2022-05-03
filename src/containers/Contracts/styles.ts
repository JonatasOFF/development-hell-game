import styled from 'styled-components';

export const Container = styled.div`
  max-height: 15rem;
  min-height: 15rem;
  background-color: #23211b;
  color: #fffbd9;
  border-radius: 0.1rem;
  padding: 1.6rem 1.6rem 1.6rem 1.6rem;
`;
export const Attributes = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #42eaf0;
`;

export const Attribute = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #42eaf0;
`;

export const Header = styled.div`
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const ProgrammingPointer = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 5rem;
  background-color: #42eaf0;
  margin-right: 0.5rem;
`;

export const DescriptionContract = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  font-style: italic;
  margin-top: 1.5rem;
  word-spacing: 0.1rem;
  color: #ccc9ad;
  word-break: break;
  text-align: center;
`;
export const ArrowNextContract = styled.div`
  position: absolute;
  top: 6.5rem;
  cursor: pointer;
  right: 1.2rem;
`;
export const ArrowPreviousContract = styled.div`
  position: absolute;
  top: 6.5rem;
  cursor: pointer;
  right: 32.2rem;
`;
