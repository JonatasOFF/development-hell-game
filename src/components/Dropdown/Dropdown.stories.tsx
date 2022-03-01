import { Story, Meta } from '@storybook/react/types-6-0';

import { Dropdown } from './Dropdown';
import { DropdownProps } from './interfaces';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

export const Default: Story<DropdownProps> = args => <Dropdown {...args} />;

let value;

Default.args = {
  value,
  placeholder: 'Click Never',
  label: 'Nome do projeto',

  onChange: event => (value = event),
};
