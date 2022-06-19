import { Story, Meta } from '@storybook/react/types-6-0';

import { ProgrammingsProps } from './interfaces';
import { Programmings } from './Programmings';

export default {
  title: 'Components/Contracts',
  component: Programmings,
} as Meta;

export const Default: Story<ProgrammingsProps> = () => <Programmings />;

Default.args = {
  text: 'Hello Storybook',
};
