import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html="<p> Página não encontrada. <a href='/'>Clique para voltar</a></p>"
    />
  );
};
