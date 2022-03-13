import { render, screen } from '@testing-library/react';

import { Programmings } from './Programmings';

describe('<Contracts />', () => {
  it('should render the component', () => {
    render(<Programmings text="Test" />);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
