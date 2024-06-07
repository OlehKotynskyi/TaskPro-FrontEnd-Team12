import { Route, Routes, NavLink } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import clsx from 'clsx';
import css from './AuthPage.module.css';

const AuthPage = () => (
  <section className={css.section}>
    <div className={css.wrapper}>
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.activeLink]: isActive })
          }
          to="/auth/register"
        >
          Register
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.activeLink]: isActive })
          }
          to="/auth/login"
        >
          Log In
        </NavLink>
      </nav>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Routes>
    </div>
  </section>
);

export default AuthPage;
