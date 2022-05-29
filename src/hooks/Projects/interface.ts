import { ReactElement } from 'react';

import { ProjectModel } from 'models/Projects';

export interface IProjectsContext {
  projects: ProjectModel[];
  handleCreateProject: (project: ProjectModel) => void;
}

export interface IProjectsProvider {
  children: ReactElement;
}
