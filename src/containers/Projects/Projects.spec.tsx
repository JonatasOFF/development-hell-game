import { render, screen } from '@testing-library/react';

import { Projects } from './Projects';

describe('<Contracts />', () => {
  it('should render the component', () => {
    render(<Projects text="Test" />);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
