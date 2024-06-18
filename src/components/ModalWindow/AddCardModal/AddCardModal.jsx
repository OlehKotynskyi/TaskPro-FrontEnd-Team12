import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddCardModal.module.css';
import { ModalContainerReact } from '../../Shared/ModalContainerReact/ModalContainerReact';
import { Button } from '../../Shared/Button/Button';
import { Calendar } from '../Calendar/Calendar';
import { ModalInput } from '../../Shared/ModalInput/ModalInput';
import { format } from 'date-fns';

export const AddCardModal = ({ onClose, existingCard }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: existingCard ? existingCard.title : '',
      description: existingCard ? existingCard.description : '',
      priority: existingCard ? existingCard.priority : 'Without priority',
      deadline: existingCard ? new Date(existingCard.deadline) : new Date(),
    },
  });

  const deadline = watch('deadline'); // Додамо watch для динамічного відображення дати

  const onSubmit = data => {
      const formattedDeadline = format(new Date(data.deadline), 'yyyy-MM-dd');
      const newCard = { ...data, deadline: formattedDeadline };
      onClose(newCard); // Close the modal and pass the new card data
  };

  const getPriorityClass = priority => {
    let formattedPriority = priority.replace(/\s+/g, '').toLowerCase();
    if(priority === "Without priority") {
      formattedPriority = "without";
    }
    return styles[`${formattedPriority}Label`];
  };

  return (
    <ModalContainerReact
      modalTitle={existingCard ? 'Edit card' : 'Add card'}
      onClose={() => onClose(null)}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <ModalInput
            placeholder="Title"
            name="title"
            errors={errors}
            autoFocus={!existingCard}
            register={register}
          />
          <textarea
            className={styles.textareaInput}
            placeholder="Description"
            {...register('description')}
          ></textarea>

          <div className={styles.labelContainer}>
            <span className={styles.labelTitle}>Priority</span>
            <div className={styles.radioGroup}>
              {['Low', 'Medium', 'High', 'Without priority'].map(priority => (
                <label className={styles.radioLabel} key={priority}>
                  <input
                    type="radio"
                    value={priority}
                    {...register('priority')}
                    defaultChecked={
                      priority ===
                      (existingCard
                        ? existingCard.priority
                        : 'Without priority')
                    }
                    className={styles.radioInput}
                  />
                  <span
                    className={`${styles.customRadio} ${getPriorityClass(
                      priority
                    )} ${
                      priority ===
                      (existingCard
                        ? existingCard.priority
                        : 'Without priority')
                        ? styles.selected
                        : ''
                    }`}
                  ></span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.deadlineContainer}>
            <span className={styles.labelTitle}>Deadline</span>
            <Calendar
              deadline={deadline} // Використовуємо watch для динамічного відображення
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
