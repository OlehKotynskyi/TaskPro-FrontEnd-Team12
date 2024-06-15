import React from 'react';
import { ModalContainer } from '../Shared/ModalContainer/ModalContainer';
import { useForm } from 'react-hook-form';
import css from './HelpModal.module.css';
import clsx from 'clsx';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Shared/Button/Button';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

export const HelpModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    console.log(data);
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
    <ModalContainer onClose={onClose} modalTitle="Need help">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`${css.input} ${errors.email ? css.error : ''}`}
          type="text"
          name="email"
          placeholder="Email address "
          id="email"
          {...register('email', { onBlur: handleEmailValidation })}
        />
        {errors.email && <p className={css.errors}>{errors.email.message}</p>}
        <textarea
          className={clsx(css.input, css.textarea)}
          {...register('text')}
          name="text"
          placeholder="Comment"
        />
        <Button>Send</Button>
      </form>
    </ModalContainer>
  );
};
