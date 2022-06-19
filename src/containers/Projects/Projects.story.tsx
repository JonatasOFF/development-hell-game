import { Story, Meta } from '@storybook/react/types-6-0';

import { ProjectsProps } from './interfaces';
import { Projects } from './Projects';

export default {
  title: 'Components/Contracts',
  component: Projects,
} as Meta;

export const Default: Story<ProjectsProps> = () => <Projects />;

Default.args = {
  text: 'Hello Storybook',
};
