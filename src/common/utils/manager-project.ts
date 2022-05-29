import { ProjectModel } from 'models/Projects';

export const timeConclusion = (ProjectUse: ProjectModel) => {
  const { bScore, wScore } = ProjectUse;
  const scoreNeed = bScore - wScore;
  const time = (scoreNeed * 3600) / ProjectUse.programmings[0].production;
  return Math.floor(time);
};

export class ProjectManager {
  readonly ProjectUse: ProjectModel;

  constructor(ProjectUse: ProjectModel) {
    const validatorProject = ProjectUse;
    const pontuation = ProjectUse.contracts[0].dependencies.reduce(
      (previous, current) => previous + current.value,
      0,
    );
    validatorProject.bScore = pontuation;
    validatorProject.payload = ProjectUse.contracts[0].reward;

    this.ProjectUse = validatorProject;
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

  tick() {
    console.log(this.production);
    const productionBySecond = this.production / 3600;
    this.ProjectUse.wScore += productionBySecond;
    // console.log(this.ProjectUse);
    return this.ProjectUse;
  }
}
