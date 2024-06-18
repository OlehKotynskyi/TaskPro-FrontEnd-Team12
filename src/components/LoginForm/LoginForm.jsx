import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import css from './LoginForm.module.css';
import sprite from '../../images/sprite.svg';
import { logIn } from '../../redux/auth/authOperations.js';
import { useDispatch } from 'react-redux';
import { LoaderButton } from 'components/Loaders/LoaderButton';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    try {
      setIsLoading(true);
      await dispatch(logIn(data)).unwrap();
      toast.success('Login successful!');
      navigate('/home');
    } catch (error) {
      console.error('Failed to log in:', error);
      setError('server', {
        type: 'manual',
        message: 'Failed to log in. Please try again.',
      });
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleEmailValidation = e => {
    const email = e.target.value;
    if (!email) {
      clearErrors('email');
      return;
    }
    const isValid = schema.fields.email.isValidSync(email);
    if (!isValid) {
      setError('email', { type: 'manual', message: 'Invalid email' });
    } else {
      clearErrors('email');
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={css.formWrap}>
        <div className={css.formWrapImput}>
          <input
            className={`${css.formImput} ${errors.email ? css.error : ''}`}
            type="email"
            name="email"
            placeholder="Enter your email"
            {...register('email', { onBlur: handleEmailValidation })}
          />
          {errors.email && <p className={css.errors}>{errors.email.message}</p>}
        </div>
        <div className={css.formWrapImput}>
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
      </div>
      <button className={css.formBtn} type="submit" disabled={isLoading}>
        {isLoading ? <LoaderButton /> : 'Log In Now'}
      </button>
    </form>
  );
};
