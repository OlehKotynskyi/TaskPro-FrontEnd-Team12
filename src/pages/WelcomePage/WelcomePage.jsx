import { Link } from 'react-router-dom';

const WelcomePage = () => (
  <div>
    <h1>Welcome</h1>
    <Link to="/auth/login">
      <button>Log In</button>
    </Link>
    <Link to="/auth/register">
      <button>Register</button>
    </Link>
  </div>
);

export default WelcomePage;
