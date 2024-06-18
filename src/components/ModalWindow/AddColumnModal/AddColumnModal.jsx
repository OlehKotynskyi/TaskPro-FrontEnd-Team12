import React from 'react';
import { useForm } from 'react-hook-form';
import { ModalContainerReact } from '../../Shared/ModalContainerReact/ModalContainerReact';
import { Button } from '../../Shared/Button/Button';
import { ModalInput } from '../../Shared/ModalInput/ModalInput';

export const AddColumnModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    if (data.title.trim()) {
      onClose(data.title);
    } else {
      alert('Please enter a title for the column.');
    }
  };

  return (
    <ModalContainerReact modalTitle="Add column" onClose={() => onClose(null)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalInput
          name="title"
          register={register}
          errors={errors}
          placeholder="Title"
          autoFocus={true}
        />
        <Button icon="plus" type="submit">
          Add
        </Button>
      </form>
    </ModalContainerReact>
  );
};
