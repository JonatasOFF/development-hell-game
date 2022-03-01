import { BarIron } from 'common/assets/images';
import styled from 'styled-components';

export const TextField = styled.div``;

export const BodyInput = styled.div`
  display: flex;
  background-color: #dededd;
  flex-direction: column;
  padding: 8px;
  border: 4px solid #1c1c1c;
`;

export const Input = styled.input`
  outline: none;
  :focus {
    outline: none;
  }

  padding: 0px 8px;
  padding-top: 8px;
  background-color: #dededd;
  font-size: 16px;
  font-style: italic;
  width: 100%;
  border: 0 solid black;
`;

export const AlignInputAndIcon = styled.div`
  display: flex;
`;

export const Label = styled.label`
  position: absolute;
  background-color: white;
  background-color: #6c6363;
  border: 3px solid #3f3f3f;
  margin-top: -18px;
  border-radius: 8px;
  padding: 1px 16px;
  font-size: 14px;
  color: white;
`;

export const BodyIcon = styled.div`
  margin-left: auto;
  align-self: center;
`;
