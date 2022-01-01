import { render } from '@testing-library/react';

import { AppProvider } from './AppProvider';

const component = <div>arroz</div>;
describe('<AppProvider />', () => {
  it('should render correctly', () => {
    expect(render(<AppProvider>{component}</AppProvider>)).toBeTruthy();
  });
});
