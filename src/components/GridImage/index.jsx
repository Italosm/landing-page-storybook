import * as Styled from './styles';
import P from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImage = ({ background = false, title, description, grid }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase fontDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
      </Styled.Container>
      <Styled.Grid>
        {grid.map((el) => (
          <Styled.GridElement key={`${el.srcImg}${el.altText}`}>
            <Styled.Image src={el.srcImg} alt={el.altText} />
          </Styled.GridElement>
        ))}
      </Styled.Grid>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
};
