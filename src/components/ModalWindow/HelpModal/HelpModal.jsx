import React from 'react';
import { useForm } from 'react-hook-form';
// import css from './HelpModal.module.css';

import axios from 'axios';

import { Button } from '../../Shared/Button/Button';
import { ModalInput } from '../../Shared/ModalInput/ModalInput';
import { ModalTextarea } from '../../Shared/ModalTextarea/ModalTextarea';
import { ModalContainerReact } from '../../Shared/ModalContainerReact/ModalContainerReact';

export const HelpModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    try {
      const payload = {
        email: data.email,
        text: data.comment,
      };
      await axios.post('/api/users/help', payload);
      onClose();
    } catch (error) {
      console.log(error);
      onClose();
    }
  };

  return (
    <ModalContainerReact onClose={onClose} modalTitle="Need help">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <ModalInput
          name="email"
          placeholder="Email address"
          type="email"
          errors={errors}
          register={register}
          id="email"
        />
        <ModalTextarea 
          name="comment"
          placeholder="Comment"
          errors={errors}
          register={register}
          id="comment"
        />
        <Button>Send</Button>
      </form>
    </ModalContainerReact>
  );
};
