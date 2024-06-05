import { Route, Routes, Link } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

const AuthPage = () => (
  <div>
    <nav>
      <Link to="/auth/login">Log In</Link>
      <Link to="/auth/register">Register</Link>
    </nav>
    <Routes>
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />
    </Routes>
  </div>
);

export default AuthPage;
