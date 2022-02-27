import { BarIron } from 'common/assets/images';
import styled from 'styled-components';

export const TextField = styled.div``;

export const BodyInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-image-slice: 18 14 18 18;
  border-image-width: 5px 5px 5px 5px;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: round round;
  border-image-source: url(${BarIron});
  border-radius: 16px;
`;

export const Input = styled.input`
  outline: none;
  :focus {
    outline: none;
  }
  height: 36px;
  padding: 0px 8px;

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

  border: 3px solid #3f3f3f;
  margin-top: -18px;
  padding: 1px 16px;
  font-size: 14px;
  color: #676566;
`;

export const BodyIcon = styled.div`
  margin-left: auto;
  align-self: center;
`;
