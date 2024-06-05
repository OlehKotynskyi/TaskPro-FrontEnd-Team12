import { NavLink } from 'react-router-dom';

const WelcomePage = () => (
  <section>
    <div>
      <h1>Task Pro</h1>
      <NavLink to="/auth/login">
        <button>Log In</button>
      </NavLink>
      <NavLink to="/auth/register">
        <button>Register</button>
      </NavLink>
    </div>
  </section>
);

export default WelcomePage;
