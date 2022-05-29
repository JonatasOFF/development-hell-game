import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { FieldArray } from 'common/utils';
import { ProjectManager } from 'common/utils/manager-project';
import { ProjectModel } from 'models';

import { IProjectsContext, IProjectsProvider } from './interface';

const ProjectsContext = createContext<IProjectsContext>({} as IProjectsContext);

function ProjectsProvider({ children }: IProjectsProvider) {
  const [projects, setProjects] = useState<ProjectModel[]>([]);

  const handleCreateProject = useCallback(
    (project: ProjectModel) => {
      const projectsField = new FieldArray<ProjectModel>([...projects]);

      setProjects(projectsField.append(project));
      console.log(projects);
    },
    [projects, setProjects, useState],
  );

  useEffect(() => {
    const processProjects = setInterval(() => {
      if (projects.length === 0) return null;
      const projectManager = new ProjectManager(projects[0]);

      const projectsField = new FieldArray<ProjectModel>([...projects]);

      setProjects(projectsField.update(0, projectManager.tick()));
    }, 1000);
    return () => clearInterval(processProjects);
  }, [projects, setProjects, useState]);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        handleCreateProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

function useProjects(): IProjectsContext {
  const context = useContext(ProjectsContext);
  return context;
}

export { ProjectsProvider, useProjects };
