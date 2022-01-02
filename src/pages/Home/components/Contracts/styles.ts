import styled from 'styled-components';

export const Container = styled.div`
  max-height: 150px;
  min-height: 150px;
  background-color: #828069;
  color: #fffbd9;
  border-radius: 1px;
  padding: 16px 16px 16px 16px;
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
  font-size: 28px;
  margin-bottom: 5px;
  text-align: center;
`;

export const ProgrammingPointer = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50rem;
  background-color: #42eaf0;
  margin-right: 5px;
`;

export const DescriptionContract = styled.p`
  font-size: 12px;
  font-weight: bold;
  font-style: italic;
  margin-top: 15px;
  word-spacing: 1px;
  color: #ccc9ad;
  word-break: break;
  text-align: center;
`;
export const ArrowNextContract = styled.div`
  position: absolute;
  top: 65px;
  cursor: pointer;
  right: 12px;
`;
export const ArrowPreviousContract = styled.div`
  position: absolute;
  top: 65px;
  cursor: pointer;
  right: 322px;
`;
