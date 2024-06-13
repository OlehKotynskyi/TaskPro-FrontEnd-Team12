import React from 'react';
import { ModalContainer } from '../Shared/ModalContainer/ModalContainer';
import { useForm } from 'react-hook-form';
import css from './HelpModal.module.css';
import clsx from 'clsx';
import { ModalButton } from '../Shared/ModalButton/ModalButton';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
        <div className={css.formWrapImput}>
          <input
            className={css.input}
            {...register('email', { onBlur: handleEmailValidation })}
            type="text"
            name="email"
            placeholder="Email address "
            id="email"
          />
          {errors.email && <p className={css.errors}>{errors.email.message}</p>}
        </div>
        <textarea
          className={clsx(css.input, css.textarea)}
          {...register('text')}
          name="text"
          placeholder="Comment"
        />
        <ModalButton>Send</ModalButton>
      </form>
    </ModalContainer>
  );
};
