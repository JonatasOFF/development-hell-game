import { useCallback, useState } from 'react';
import { useMemo } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { Dropdown, ItemProject, TextField } from 'components';
import { useContracts, useProgramming, useProjects } from 'hooks';
import { ProgrammingModel, ProjectModel } from 'models';

import * as S from './styles';

export function Projects() {
  const [createNewProject, setCreateNewProject] = useState(false);
  const [nameProject, setNameProject] = useState('');
  const [programming, setProgramming] = useState('');
  const [contract, setContract] = useState('');
  const { programmings } = useProgramming();
  const { contractsActive } = useContracts();
  const { projects, handleCreateProject } = useProjects();

  const listProjects = useMemo(() => projects.list, [projects]);

  const handleCreateNewProject = useCallback(() => {
    const contractUse = contractsActive.list.find(
      contractActive => contractActive.title === contract,
    );
    if (contractUse) {
      const programmingUse = programmings.list.find(
        p => p.name === programming,
      );
      const newProject: ProjectModel = {
        name: nameProject,
        description: '',
        contracts: [contractUse],
        programmings: [programmingUse || ({} as ProgrammingModel)],
        payload: 5,
        bScore: 0,
        wScore: 0,
      };
      handleCreateProject(newProject);
    }
  }, [contract, contractsActive, projects, nameProject, programming]);

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
          onChange={change => setNameProject(change)}
          value={nameProject}
        />
        <Dropdown
          placeholder="Nome do Programador"
          label="Programador que vai atuar"
          onChange={change => setProgramming(change)}
          list={programmings.list.map(programming => programming.name)}
          value={programming}
        />

        <Dropdown
          placeholder="Contrato"
          label="Contrato que o programador vai atuar"
          onChange={change => setContract(change)}
          list={contractsActive.list.map(contract => contract?.title)}
          value={contract}
        />
        <S.InformationProject>
          <p>Tempo: 24h</p>
          <p>Pontos total: 24</p>
          <p>Money win: 24h</p>
        </S.InformationProject>
        <S.FooterInformationProject>
          <button onClick={() => handleCreateNewProject()}>
            Cria sa porra
          </button>
        </S.FooterInformationProject>
      </S.FormCreateProject>
      <S.BorderBrightness />
      <S.List>
        {listProjects.map((project: ProjectModel) => (
          <ItemProject key={project.name} {...project} />
        ))}
      </S.List>
    </S.Container>
  );
}
