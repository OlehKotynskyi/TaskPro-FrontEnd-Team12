import React from 'react';
import { ModalContainerReact } from '../../Shared/ModalContainerReact/ModalContainerReact';
import { useForm } from 'react-hook-form';
import css from './HelpModal.module.css';
import clsx from 'clsx';
import { Button } from '../../Shared/Button/Button';
import axios from 'axios';

export const HelpModal = ({ onClose }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async data => {
    try {
      const payload = {
        email: data.email,
        comment: data.text,
      };
      await axios.post('/api/users/help', payload);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ModalContainerReact onClose={onClose} modalTitle="Need help">
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
    </ModalContainerReact>
  );
};
