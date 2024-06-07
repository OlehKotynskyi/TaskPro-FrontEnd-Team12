import { NavLink } from 'react-router-dom';
import css from './WelcomePage.module.css';
import user from '../../images/user/user.png';
import userRetina from '../../images/user/user_@2x.png';
import logo from '../../images/sprite.svg';

const WelcomePage = () => (
  <section className={css.section}>
    <div className={css.wrapper}>
      <div className={css.imgUser}>
        <img src={user} srcSet={`${user} 1x, ${userRetina} 2x`} alt="User" />
      </div>
      <div className={css.wrapLogo}>
        <svg className={css.logoIcon}>
          <use href={`${logo}#icon-logo`} />
        </svg>
        <h1 className={css.titel}>Task Pro</h1>
      </div>
      <p className={css.text}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <NavLink className={css.register} to="/auth/register">
        Register
      </NavLink>
      <NavLink className={css.login} to="/auth/login">
        Log In
      </NavLink>
    </div>
  </section>
);

export default WelcomePage;
