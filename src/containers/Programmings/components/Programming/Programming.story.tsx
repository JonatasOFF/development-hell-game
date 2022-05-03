import { Story, Meta } from '@storybook/react/types-6-0';

import { ProgrammingProps } from './interfaces';
import { Programming } from './Programming';

export default {
  title: 'Components/Contracts',
  component: Programming,
} as Meta;

export const Default: Story<ProgrammingProps> = args => (
  <Programming {...args} />
);

Default.args = {
  name: 'Eae vei blz aqui é content',
  age: 22,
  production: 1,
};
