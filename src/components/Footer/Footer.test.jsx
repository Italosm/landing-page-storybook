import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html={'<h1>Hello</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
