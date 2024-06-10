import React from 'react';
import { useFormContext } from 'react-hook-form';
import css from './UserEditModal.module.css';

const PasswordField = () => {
  const { register } = useFormContext();

  return (
    <input
      type="password"
      name="password"
      className={css.formInput}
      placeholder="Password"
      {...register("password")}
    />
  );
};

export default PasswordField;
