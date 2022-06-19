import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { useMemo } from 'react';

import { FieldArray } from 'common/utils';
import { ProjectManager } from 'common/utils/manager-project';
import { useSavedStorage } from 'hooks';
import { ProjectModel } from 'models';

import { IProjectsContext, IProjectsProvider } from './interface';

const ProjectsContext = createContext<IProjectsContext>({} as IProjectsContext);

function ProjectsProvider({ children }: IProjectsProvider) {
  const { savedStorage } = useSavedStorage();
  const [projects, setProjects] = useState<FieldArray<ProjectModel>>(
    savedStorage.projectsStorage,
  );

  const [att, SetAtt] = useState(1);

  const handleCreateProject = useCallback(
    (project: ProjectModel) => {
      setProjects(projects.append(project));
    },
    [projects, setProjects, useState],
  );

  useEffect(() => {
    const processProjects = setInterval(() => {
      if (projects.length === 0) return null;

      const projectManager = new ProjectManager(projects.get(0));
      setProjects(projects.update(0, projectManager.tick()));
      SetAtt(att + 1);
    }, 1000);
    return () => clearInterval(processProjects);
  }, [att]);

  const values = useMemo(
    () => ({
      projects,
      handleCreateProject,
    }),
    [projects, handleCreateProject, setProjects, att],
  );

  return (
    <ProjectsContext.Provider value={values}>
      {children}
    </ProjectsContext.Provider>
  );
}

function useProjects(): IProjectsContext {
  const context = useContext(ProjectsContext);
  return context;
}

export { ProjectsProvider, useProjects };
