import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
// import { selectAuthState } from '../../redux/auth/selectors';
import logo from '../../assets/logo.png';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import css from './Navigation.module.css';

const Navigation = () => {
  //   const { isLoggedIn } = useSelector(selectAuthState);
  const isLoggedIn = true;

  return (
    <div className={css.nav}>
      <Button
        component={NavLink}
        to="/"
        endIcon={<HomeIcon sx={{ marginTop: '-4px' }} />}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          endIcon={<ContactPhoneIcon sx={{ marginTop: '-4px' }} />}
        >
          Contacts
        </Button>
      )}
    </div>
  );
};

export default Navigation;
