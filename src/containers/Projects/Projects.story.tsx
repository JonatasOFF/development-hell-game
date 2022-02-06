import { Story, Meta } from '@storybook/react/types-6-0';

import { ProjectsProps } from './interfaces';
import { Projects } from './Projects';

export default {
  title: 'Components/Contracts',
  component: Projects,
} as Meta;

export const Default: Story<ProjectsProps> = args => <Projects {...args} />;

Default.args = {
  text: 'Hello Storybook',
};
