import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { Dropdown, ItemProject, TextField } from 'components';

import { ProjectsProps } from './interfaces';
import * as S from './styles';

export function Projects({ text }: ProjectsProps) {
  console.log('q2w');
  const [createNewProject, setCreateNewProject] = useState(false);
  const projectExample = {
    name: 'Projeto 1',
    description: 'Projeto 1',
    contracts: {} as any,
    programmings: ['fodase'],
    payload: 123,
    bScore: 123,
    wScore: 0,
  };
  return (
    <S.Container>
      <S.Header>
        <S.Title>Lista de Projetos</S.Title>

        <S.PlusProject onClick={() => setCreateNewProject(!createNewProject)}>
          <AiOutlinePlus />
        </S.PlusProject>
      </S.Header>
      <S.FormCreateProject open={createNewProject}>
        <TextField
          placeholder="Coloca um bem ruim"
          label="Nome do projeto"
          value=""
        />
        <Dropdown
          placeholder="Nome do Programador"
          label="Programador que vai atuar"
          value=""
        />
        <Dropdown
          placeholder="Contrato"
          label="Contrato que o programador vai atuar"
          value=""
        />
        <S.InformationProject>
          <p>Tempo: 24h</p>
          <p>Pontos total: 24</p>
          <p>Money win: 24h</p>
        </S.InformationProject>
        <S.FooterInformationProject>
          <button onClick={() => console.log('13')}>Cria sa porra</button>
        </S.FooterInformationProject>
      </S.FormCreateProject>
      <S.BorderBrightness />
      <S.List>
        <ItemProject {...projectExample} />
      </S.List>
    </S.Container>
  );
}
