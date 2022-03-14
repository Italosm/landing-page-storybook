import { screen } from '@testing-library/react';
import Home from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../styles/render-theme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
