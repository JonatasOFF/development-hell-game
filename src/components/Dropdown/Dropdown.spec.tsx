import { render, screen } from '@testing-library/react';

import { Dropdown } from './Dropdown';

describe('<Dropdown />', () => {
  it('should render the component', () => {
    render(<Dropdown text="Test" />);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
