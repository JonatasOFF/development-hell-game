import { ImMoveDown } from 'react-icons/im';

import { Story, Meta } from '@storybook/react/types-6-0';

import { TextFieldProps } from './interfaces';
import { TextField } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;

export const Default: Story<TextFieldProps> = args => <TextField {...args} />;

let value;

Default.args = {
  value,
  placeholder: 'Click Never',
  label: 'Nome do projeto',
  icon: <ImMoveDown />,
  onChange: event => (value = event),
};
