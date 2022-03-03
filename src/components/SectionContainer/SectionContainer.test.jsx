import { screen } from '@testing-library/react';
import { SectionContainer } from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionContainer />', () => {
  it('should render SectionContainer', () => {
    renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
