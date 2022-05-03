import { createContext, useContext, useState, useCallback } from 'react';

import { FieldArray } from 'common/utils';
import { ProjectModel } from 'models';

import { IProjectsContext, IProjectsProvider } from './interface';

const ProjectsContext = createContext<IProjectsContext>({} as IProjectsContext);

function ProjectsProvider({ children }: IProjectsProvider) {
  const [projects, setProjects] = useState<ProjectModel[]>([]);

  const handleActiveProject = useCallback(
    (project: ProjectModel) => {
      const projectsField = new FieldArray<ProjectModel>([...projects]);

      setProjects(projectsField.append(project));
      console.log(projects);
    },
    [projects, setProjects, useState],
  );

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        handleActiveProject,
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
