import { render, screen } from '@testing-library/react';

import { Contracts } from './Contracts';

describe('<Contracts />', () => {
  it('should render the component', () => {
    render(<Contracts text="Test" />);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
