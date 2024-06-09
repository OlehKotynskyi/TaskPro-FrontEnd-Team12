import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import css from './LoginForm.module.css';
import sprite from '../../images/sprite.svg';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    // Імітуємо API виклик та успішний логін
    navigate('/home');
  };

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.formWrap}>
        <input
          className={`${css.formImput} ${errors.email ? css.error : ''}`}
          type="email"
          name="email"
          placeholder="Enter your email"
          {...register('email')}
        />
        {errors.email && <p className={css.errors}>{errors.email.message}</p>}
      </div>
      <div className={css.formWrap}>
        <input
          className={`${css.formImput} ${errors.password ? css.error : ''}`}
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          placeholder="Create a password"
        />
        <svg
          className={css.icon}
          width="20"
          height="20"
          onClick={toggleShowPassword}
        >
          <use
            xlinkHref={`${sprite}#${
              showPassword ? 'icon-eye' : 'icon-eye-off'
            }`}
          ></use>
        </svg>
        {errors.password && (
          <p className={css.errors}>{errors.password.message}</p>
        )}
      </div>
      <button className={css.formBtn} type="submit">
        Log In Now
      </button>
    </form>
  );
};
