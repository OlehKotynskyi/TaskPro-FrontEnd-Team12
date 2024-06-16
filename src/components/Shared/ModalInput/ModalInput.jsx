import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalInput.module.css';

export const ModalInput = ({
  className,
  errorClassName,
  value,
  onChange,
  type = 'text',
  placeholder,
  name,
  id,
  register,
  errors,
  errorMessage,
}) => {
  const error = errors && errors[name];

  return (
    <div>
      <input
        className={`${styles.input} ${className} ${error ? styles.error : ''} ${error ? errorClassName : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        {...(register && register(name))}
      />
      {error && <div className={styles.errorMessage}>{errorMessage || error.message}</div>}
    </div>
  );
};

ModalInput.propTypes = {
  className: PropTypes.string,
  errorClassName: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  errorMessage: PropTypes.string,
};
