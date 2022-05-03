import { render, screen } from '@testing-library/react';

import { Programming } from './Programming';

describe('<Contracts />', () => {
  it('should render the component', () => {
    render(<Programming text="Test" />);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
