import { Story, Meta } from '@storybook/react/types-6-0';

import { ItemProjectProps } from './interfaces';
import { ItemProject } from './ItemProject';

export default {
  title: 'Components/ItemProject',
  component: ItemProject,
} as Meta;

export const Default: Story<ItemProjectProps> = args => (
  <ItemProject {...args} />
);

Default.args = {
  name: 'arroz',
  description: 'feijao',
  contracts: {} as any,
  programmings: ['fodase'],
  payload: 123,
  bScore: 123,
  wScore: 0,
};
