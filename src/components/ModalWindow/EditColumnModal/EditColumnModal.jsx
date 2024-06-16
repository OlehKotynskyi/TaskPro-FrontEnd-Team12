import React from 'react';
import { useForm } from 'react-hook-form';
import { ModalContainerReact } from '../../Shared/ModalContainerReact/ModalContainerReact';
import { Button } from '../../Shared/Button/Button';
import { ModalInput } from '../../Shared/ModalInput/ModalInput';

export const EditColumnModal = ({ columnTitle, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: columnTitle,
    },
  });

  const onSubmit = data => {
    console.log('New Column title is ', data.title);
    onClose(data.title);
  };

  return (
    <ModalContainerReact
      modalTitle="Edit column"
      onClose={() => onClose(columnTitle)}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalInput
          name="title"
          register={register}
          errors={errors}
          type="text"
          placeholder="Title"
          autoFocus={true}
          errorMessage="Title is required"
        />
        <Button icon="plus" type="submit">
          Save
        </Button>
      </form>
    </ModalContainerReact>
  );
};
