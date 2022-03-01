import { AiOutlinePlus } from 'react-icons/ai';

import { Dropdown, ItemProject, TextField } from 'components';

import { ProjectsProps } from './interfaces';
import * as S from './styles';

export function Projects({ text }: ProjectsProps) {
  console.log('q2w');
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

        <S.PlusProject>
          <AiOutlinePlus />
        </S.PlusProject>
      </S.Header>
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
      <S.BorderBrightness />
      <S.List>
        <ItemProject {...projectExample} />
      </S.List>
    </S.Container>
  );
}
