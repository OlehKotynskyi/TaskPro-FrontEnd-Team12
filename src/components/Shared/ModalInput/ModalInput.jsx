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
  const inputProps = register ? register('title', {
    required: 'Title required',
  }) : {};
  return (
    <div className={styles.inputContainer}>
      <input
        className={`${styles.input} ${className} ${error ? styles.error : ''} `}
        {...inputProps}
        {...rest}
      />
      {error && (<div className={styles.errorMessage}>{errorMessage || error.message}</div>)}
    </div>
  );
};