import { useRouteMatch } from 'react-router-dom';

const useHeader = () => {
  const match = useRouteMatch();

  return { match };
};

export default useHeader;
