import { render, screen } from '@testing-library/react';

import { Enterprise } from './Enterprise';

describe('<Enterprise />', () => {
  it('should render the component', () => {
    render(<Enterprise />);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
