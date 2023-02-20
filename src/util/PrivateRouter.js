import { useQuery } from '@apollo/client';
import { Navigate } from 'react-router-dom';
import { IS_LOGGED_IN } from '../resolvers/query';

const PrivateRouter = ({ Component }) => {
  const { data, client } = useQuery(IS_LOGGED_IN);
  return <>{data.isLoggedIn ? <Component /> : <Navigate to="/signin" />}</>;
};

export default PrivateRouter;
