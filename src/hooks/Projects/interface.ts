import { ReactElement } from 'react';

import { FieldArray } from 'common/utils';
import { ProjectModel } from 'models/Projects';

export interface IProjectsContext {
  projects: FieldArray<ProjectModel>;
  handleCreateProject: (project: ProjectModel) => void;
}

export interface IProjectsProvider {
  children: ReactElement;
}
