import React from 'react';
import styles from './ModalInput.module.css';

export const ModalInput = ({
  className,
  errorClassName,
  register,
  errors,
  name,
  errorMessage,
  autoFocus = false,
  ...rest
}) => {
  const error = errors && errors[name];
  return (
    <div>
      <input
        className={`${styles.input} ${className} ${error ? styles.error : ''} ${
          error ? errorClassName : ''
        }`}
        {...register(name)}
        {...rest}
      />
      {error && (
        <div className={styles.errorMessage}>
          {errorMessage || error.message}
        </div>
      )}
    </div>
  );
};
