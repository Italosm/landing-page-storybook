import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="The text" />);
    const textLogo = screen.getByRole('link', { name: 'The text' });
    expect(textLogo).toHaveAttribute('href', '#target');
    const heading = screen.getByRole('heading', { name: 'The text' });
    expect(heading).toBeInTheDocument();
  });

  it('should render img logo', () => {
    renderTheme(<LogoLink link="#target" text="The text" srcImg="img.jpg" />);
    const logo = screen.getByAltText('The text');
    expect(logo).toHaveAttribute('src', 'img.jpg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="The text" srcImg="img.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
