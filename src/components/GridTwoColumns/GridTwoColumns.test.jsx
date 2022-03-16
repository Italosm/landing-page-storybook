import { screen } from '@testing-library/react';
import { GridTwoColumn } from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridTwoColum />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
