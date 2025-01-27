// import { useSelector } from 'react-redux';
// import { selectAuthState } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { SecureRouteProps } from './types/types';

const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
}: SecureRouteProps): JSX.Element => {
  // const { isLoggedIn } = useSelector(selectAuthState);
  const isLoggedIn = true;

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
