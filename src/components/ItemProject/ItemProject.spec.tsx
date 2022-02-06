import { render, screen } from '@testing-library/react';

import { ItemProject } from './ItemProject';

describe('<ItemProject />', () => {
  it('should render the component', () => {
    render(<ItemProject text="Test" />);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
