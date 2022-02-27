import { render, screen } from '@testing-library/react';

import { TextField } from './TextField';

describe('<TextField />', () => {
  it('should render the component', () => {
    render(<TextField text="Test" />);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
