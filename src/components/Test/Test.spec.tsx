import { render, screen } from '@testing-library/react';

import { Test } from './Test';

describe('<Test />', () => {
  it('should render the component', () => {
    render(<Test text="Test" />);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
