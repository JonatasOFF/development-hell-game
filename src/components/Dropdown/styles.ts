import styled, { css } from 'styled-components';

import { DropdownStyleProps } from './interfaces';

const modifier = {
  openIcon: () => css`
    transform: rotate(90deg);
  `,
  openDropDown: () => css`
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  `,
};

export const Dropdown = styled.div``;

export const BodyInput = styled.div`
  display: flex;
  background-color: #dededd;
  cursor: pointer;
  flex-direction: column;
  padding-top: 8px;
  padding: 8px;
  border: 4px solid #1c1c1c;
`;

export const Value = styled.div`
  padding: 0px 8px;
  background-color: #dededd;
  font-size: 16px;
  font-style: italic;
  width: 100%;
  border: 0 solid black;
  padding-left: 8px;
  padding-top: 8px;
`;

export const Placeholder = styled.div`
  color: grey;
  padding-top: 8px;
  font-style: italic;
  padding-left: 8px;
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

export const List = styled.ul<DropdownStyleProps>`
  padding-left: 0px;
  margin-top: 5px;
  display: block;
  position: absolute;
  border-radius: 6px;
  min-width: 200px;
  color: #717171;
  background-color: white;
  font-weight: bold;
  border: 1px solid #dededd;
  text-align: start;
  transition: opacity 0.4s ease-out;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  > :last-child {
    border-bottom: 0px solid #dededd;
  }

  ${({ open }) => css`
    ${!!open && modifier.openDropDown()}
  `}
`;

export const Item = styled.li`
  text-align: start;
  padding: 8px;
  display: block;
  border-bottom: 1px solid #dededd;
  :hover {
    background-color: #e6e6e6;
  }
`;

export const BodyIcon = styled.div<DropdownStyleProps>`
  margin-left: auto;
  align-self: center;
  margin-top: 2px;
  ${({ open }) => css`
    > svg {
      transition: transform 0.4s ease-out;
      transform: rotate(0deg);
      ${!!open && modifier.openIcon()}
    }
  `}
`;
