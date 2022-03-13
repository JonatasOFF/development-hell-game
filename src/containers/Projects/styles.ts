import styled, { css } from 'styled-components';

import { FormCreateProjectStyleProps, ProjectsStyleProps } from './interfaces';

const modifier = {
  createProject: () => css``,
  showForm: () => css`
    height: 23rem;
    scale: 1;
    opacity: 1;
  `,
};

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

export const CreateProject = styled.div<ProjectsStyleProps>`
  ${({ createProject }) => css`
    ${!!createProject && modifier.createProject()}
  `}
`;

export const List = styled.ul``;

export const ItemProject = styled.li``;

export const FooterInformationProject = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: end;
`;

export const InformationProject = styled.div`
  color: white;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const FormCreateProject = styled.div<FormCreateProjectStyleProps>`
  transition: all 0.2s cubic-bezier(0.28, 0.42, 0.52, 0.69);
  scale: 0;
  padding: 0.8rem;
  opacity: 0;
  height: 0rem;

  ${({ open }) => css`
    ${!!open && modifier.showForm()}
  `}
`;
