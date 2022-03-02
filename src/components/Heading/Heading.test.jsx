import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>The text</Heading>);
    const heading = screen.getByRole('heading', { name: 'The text' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading fontDark={false}>The text</Heading>);
    const heading = screen.getByRole('heading', { name: 'The text' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">The text</Heading>);
    const heading = screen.getByRole('heading', { name: 'The text' });
    //expect small
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">The text</Heading>
      </ThemeProvider>,
    );
    //expect medium
    expect(screen.getByRole('heading', { name: 'The text' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">The text</Heading>
      </ThemeProvider>,
    );
    //expect big
    expect(screen.getByRole('heading', { name: 'The text' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">The text</Heading>
      </ThemeProvider>,
    );
    //expect huge
    expect(screen.getByRole('heading', { name: 'The text' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });
  it('should render correct font-size when mobile screen', () => {
    const { rerender } = renderTheme(<Heading size="huge">The text</Heading>);
    const heading = screen.getByRole('heading', { name: 'The text' });
    expect(screen.getByRole('heading', { name: 'The text' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>The text</Heading>);
    const heading = screen.getByRole('heading', { name: 'The text' });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element h1', () => {
    const { container } = renderTheme(<Heading as="h1">The text</Heading>);
    const heading = screen.getByRole('heading', { name: 'The text' });
    const h1 = container.querySelector('h1');
    expect(h1.tagName.toLowerCase()).toBe('h1');
  });

  it('should render correct heading element h6', () => {
    const { container } = renderTheme(<Heading as="h6">The text</Heading>);
    const heading = screen.getByRole('heading', { name: 'The text' });
    const h6 = container.querySelector('h6');
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
