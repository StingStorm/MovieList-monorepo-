import { useSelector } from 'react-redux';
// import { selectAuthState } from '../../redux/auth/selectors';

import css from './AppBar.module.css';
import Navigation from '@components/Navigation';
import UserMenu from '@components/UserMenu';
import AuthNav from '@components/AuthNav';
import { Container } from '@mui/material';

const AppBar = () => {
  //   const { isLoggedIn } = useSelector(selectAuthState);

  return (
    <header className={css.header}>
      <Container maxWidth="lg" className={css.container}>
        <Navigation />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </Container>
    </header>
  );
};

export default AppBar;
