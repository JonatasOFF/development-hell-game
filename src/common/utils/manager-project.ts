import { ProjectModel } from 'models/Projects';

export const timeConclusion = (ProjectUse: ProjectModel) => {
  const { bScore, wScore } = ProjectUse;
  const scoreNeed = bScore - wScore;

  const time = (scoreNeed * 3600) / ProjectUse.programmings[0].production;
  return Math.floor(time);
};

export class ProjectManager {
  ProjectUse: ProjectModel;

  constructor(ProjectUse?: ProjectModel) {
    if (ProjectUse) {
      this.ProjectUse = this.validatorProject(ProjectUse);
      return;
    }
    this.ProjectUse = {} as ProjectModel;
  }

  private validatorProject(project: ProjectModel): ProjectModel {
    const validatorProject = project;
    const pontuation = project.contracts[0].dependencies.reduce(
      (previous, current) => previous + current.value,
      0,
    );
    validatorProject.bScore = pontuation;
    validatorProject.payload = project.contracts[0].reward;
    return validatorProject;
  }

  get project(): ProjectModel {
    return this.ProjectUse;
  }

  get production(): number {
    const production = this.ProjectUse.programmings[0].production;
    return production;
  }

  get timeConclusion(): number {
    return timeConclusion(this.ProjectUse);
  }

  set setProject(project: ProjectModel) {
    this.ProjectUse = project;
  }

  tick() {
    const productionBySecond = this.production / 3600;

    this.ProjectUse.wScore += productionBySecond;
    return this.ProjectUse;
  }
}
