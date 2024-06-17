import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ModalContainerReact } from '../../Shared/ModalContainerReact/ModalContainerReact';
import { Button } from '../../Shared/Button/Button';
import { ModalInput } from '../../Shared/ModalInput/ModalInput';

export const EditColumnModal = ({ column, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: column?.title || '',
    },
  });

  useEffect(() => {
    reset({ title: column?.title || '' });
  }, [column, reset]);

  const onSubmit = data => {
    onClose(data.title);
  };

  return (
    <ModalContainerReact modalTitle="Edit column" onClose={() => onClose(null)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalInput
          name="title"
          register={register}
          errors={errors}
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
