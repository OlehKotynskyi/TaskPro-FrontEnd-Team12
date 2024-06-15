import React from 'react';
import { ModalContainer } from '../Shared/ModalContainer/ModalContainer';
import { useForm } from 'react-hook-form';
import css from './HelpModal.module.css';
import clsx from 'clsx';
import { Button } from "../../Shared/Button/Button"

export const HelpModal = ({ onClose }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <ModalContainer onClose={onClose} modalTitle="Need help">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={css.input}
          {...register('email')}
          type="text"
          name="email"
          placeholder="Email address "
          id="email"
        />
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
