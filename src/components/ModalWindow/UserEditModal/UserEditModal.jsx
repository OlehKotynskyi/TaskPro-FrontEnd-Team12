import React, { useRef, useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import css from './UserEditModal.module.css';
import sprite from '../../../images/sprite.svg';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectAccessToken,
} from '../../../redux/auth/authSelectors';
import { userCurrent, updateUser } from '../../../redux/auth/authOperations';
import { LoaderButton } from 'components/Loaders/LoaderButton';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  password: Yup.string().min(7, 'Too short').max(256, 'Too long'),
});

const modalVariants = {
  open: {
    clipPath: `circle(1000px at 50% 50%)`,
    transition: {
      type: 'spring',
      stiffness: 52,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(30px at 50% 50%)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function UserEditModal({ onClose }) {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectAccessToken);
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    resolver: yupResolver(ValidationSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      password: '',
    },
  });
  const { handleSubmit, reset, setValue } = methods;
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (isLoggedIn && !isRefreshing) {
      dispatch(userCurrent());
    }
  }, [dispatch, isLoggedIn, isRefreshing]);

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('email', user.email);
      setValue('password', user.password);
    }
  }, [user, setValue]);

  const onSubmit = async userData => {
    setIsLoading(true);
    const formData = new FormData();

    for (const key in userData) {
      if (userData.hasOwnProperty(key)) {
        formData.append(key, userData[key]);
      }
    }

    formData.append('theme', user.theme);

    if (file) {
      formData.append('avatar', file);
    }
    try {
      await dispatch(updateUser({ formData, token })).unwrap();
      reset();
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMenuClick = ev => {
    ev.stopPropagation();
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = event => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <>
      <div className={css.backdrop} onClick={() => onClose()}>
        <motion.div
          className={`${css.container} ${css.cont}`}
          onClick={handleMenuClick}
          initial="closed"
          animate="open"
          exit="closed"
          variants={modalVariants}
        >
          <div className={css.wrap}>
            <button className={css.closeBtn} onClick={() => onClose()}>
              <svg width="18" height="18" stroke="currentColor">
                <use href={`${sprite}#icon-x-close`} />
              </svg>
            </button>
          </div>
          <p className={css.txt}>Edit Profile</p>
          <div className={css.avatarContainer}>
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                alt="avatar"
                className={css.avatar}
              />
            ) : user?.avatarURL ? (
              <img src={user.avatarURL} alt="avatar" className={css.avatar} />
            ) : (
              <svg className={css.avatar}>
                <use href={`${sprite}#icon-user`} />
              </svg>
            )}
            <button
              type="button"
              className={css.plusBtn}
              onClick={handleButtonClick}
            >
              <svg width="10" height="10" stroke="currentColor">
                <use href={`${sprite}#icon-plus`}></use>
              </svg>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </button>
          </div>
          <FormProvider {...methods}>
            <form
              className={css.forma}
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <div className={css.formGroup}>
                <label htmlFor="name" className={css.formLabel}></label>
                <input
                  type="text"
                  name="name"
                  className={css.formInput}
                  placeholder="Name"
                  {...methods.register('name')}
                />
                {methods.formState.errors.name && (
                  <span className={css.error}>
                    {methods.formState.errors.name.message}
                  </span>
                )}
              </div>
              <div className={css.formGroup}>
                <label htmlFor="email" className={css.formLabel}></label>
                <input
                  type="text"
                  name="email"
                  className={css.formInput}
                  placeholder="Email"
                  {...methods.register('email')}
                />
                {methods.formState.errors.email && (
                  <span className={css.error}>
                    {methods.formState.errors.email.message}
                  </span>
                )}
              </div>
              <div className={css.formGroup}>
                <label htmlFor="password" className={css.formLabel}></label>
                <input
                  type="password"
                  name="password"
                  className={css.formInput}
                  placeholder="Password"
                  {...methods.register('password')}
                />
                {methods.formState.errors.password && (
                  <span className={css.error}>
                    {methods.formState.errors.password.message}
                  </span>
                )}
              </div>
              <button type="submit" className={css.btn} disabled={isLoading}>
                {isLoading ? <LoaderButton /> : 'Send'}
              </button>
            </form>
          </FormProvider>
        </motion.div>
      </div>
    </>
  );
}
