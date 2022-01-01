import { Story, Meta } from '@storybook/react/types-6-0';

import { Contracts } from './Contracts';
import { ContractsProps } from './interfaces';

export default {
  title: 'Components/Contracts',
  component: Contracts,
} as Meta;

export const Default: Story<ContractsProps> = args => <Contracts {...args} />;

Default.args = {
  text: 'Hello Storybook',
};
