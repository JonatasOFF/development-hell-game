import { Story, Meta } from '@storybook/react/types-6-0';

import { TestProps } from './interfaces';
import { Test } from './Test';

export default {
  title: 'Components/Test',
  component: Test,
} as Meta;

export const Default: Story<TestProps> = args => <Test {...args} />;

Default.args = {
  text: 'Hello Storybook',
};
