import React from 'react';
import { useForm } from 'react-hook-form';
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
        comment: data.comment,  
      };
      const response = await axios.post('/api/users/help', payload, {
        headers: {
          'Content-Type': 'application/json'  
        }
      });
      console.log('Response:', response.data); 
      onClose(); 
    } catch (error) {
      console.error("Error submitting form:", error.response ? error.response.data : error.message);
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
