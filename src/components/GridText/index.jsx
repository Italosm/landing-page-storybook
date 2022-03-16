import * as Styled from './styles';
import P from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({
  background = false,
  title,
  description,
  grid,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase fontDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
      </Styled.Container>
      <Styled.Grid>
        {grid.map((el) => (
          <Styled.GridElement key={el.title}>
            <Heading size="medium" fontDark={!background} as="h3">
              {el.title}
            </Heading>
            <TextComponent>{el.description}</TextComponent>
          </Styled.GridElement>
        ))}
      </Styled.Grid>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
  sectionId: P.string,
};
