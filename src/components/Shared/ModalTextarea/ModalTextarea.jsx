import React from 'react';
import styles from './ModalTextarea.module.css';

export const ModalTextarea = ({
  className,
  errorClassName,
  register,
  errors,
  name,
  errorMessage,
  ...rest
}) => {
  const error = errors && errors[name];
  const inputProps = register ? register(name, {
    required: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
    minLength: {
      value: 10,
      message: `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least 10 characters long`
    },
    maxLength: {
      value: 100,
      message: `${name.charAt(0).toUpperCase() + name.slice(1)} must be less than 100 characters`
    }
  }) : {};
  
  return (
    <div className={styles.inputContainer}>
      <textarea
        className={`${styles.input} ${className} ${error ? styles.error : ''} `}
        {...inputProps}
        {...rest}
      />
      {error && (<div className={styles.errorMessage}>{errorMessage || error.message}</div>)}
    </div>
  );
};
