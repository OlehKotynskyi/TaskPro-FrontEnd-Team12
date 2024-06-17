import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddCardModal.module.css';
import { ModalContainerReact } from '../../Shared/ModalContainerReact/ModalContainerReact';
import { Button } from '../../Shared/Button/Button';
import { Calendar } from '../Calendar/Calendar';

export const AddCardModal = ({ onClose, existingCard }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: existingCard ? existingCard.title : '',
      description: existingCard ? existingCard.description : '',
      labelColor: existingCard ? existingCard.labelColor : 'without',
      deadline: existingCard ? new Date(existingCard.deadline) : new Date(),
    },
  });

  const onSubmit = data => {
    const newCard = { ...data, deadline: new Date(data.deadline) };
    onClose(newCard); // Close the modal and pass the new card data
  };

  return (
    <ModalContainerReact
      modalTitle={existingCard ? 'Edit card' : 'Add card'}
      onClose={() => onClose(null)}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <input
            className={`${styles.input} ${errors.title && styles.error}`}
            {...register('title', {
              required: 'Title required',
            })}
            type="text"
            name="title"
            placeholder="Title"
            id="title"
            autoFocus={existingCard ? false : true}
          />
          {errors.title && <p className={styles.errors}>{errors.title.message}</p>}

          <textarea
            className={styles.textareaInput}
            placeholder="Description"
            {...register('description')}
          ></textarea>

          <div className={styles.labelContainer}>
            <span className={styles.labelTitle}>Label color</span>
            <div className={styles.radioGroup}>
              {['low', 'medium', 'high', 'without'].map(color => (
                <label className={styles.radioLabel} key={color}>
                  <input
                    type="radio"
                    value={color}
                    {...register('labelColor')}
                    defaultChecked={color === (existingCard ? existingCard.labelColor : 'without')}
                    className={styles.radioInput}
                  />
                  <span
                    className={`${styles.customRadio} ${styles[`${color}Label`]} ${
                      color === (existingCard ? existingCard.labelColor : 'without')
                        ? styles.selected : ''}`}
                  ></span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.deadlineContainer}>
            <span className={styles.labelTitle}>Deadline</span>
            <Calendar
              deadline={new Date()}
              setDeadline={date => setValue('deadline', date)}
            />
          </div>
          <Button icon="plus" type="submit">
            {existingCard ? 'Save' : 'Add'}
          </Button>
        </div>
      </form>
    </ModalContainerReact>
  );
};
