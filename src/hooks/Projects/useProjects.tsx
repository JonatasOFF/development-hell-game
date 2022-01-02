import { createContext, useCallback, useContext, useState } from 'react';

import { IProjectsContext, IProjectsProvider } from './interface';

const ProjectsContext = createContext<IProjectsContext>({} as IProjectsContext);

function ProjectsProvider({ children }: IProjectsProvider) {
  return (
    <ProjectsContext.Provider
      value={{
        context: 'katarina',
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
