import React, { useState } from 'react';
import styles from './AddCardModal.module.css';
import { ModalContainer } from '../Shared/ModalContainer/ModalContainer';
import { Button } from '../../Shared/Button/Button';
import { Calendar } from '../Calendar/Calendar';

export const AddCardModal = ({ onClose, existingCard }) => {
  const [title, setTitle] = useState(existingCard ? existingCard.title : '');
  const [description, setDescription] = useState(
    existingCard ? existingCard.description : ''
  );
  const [labelColor, setLabelColor] = useState(
    existingCard ? existingCard.labelColor : 'without'
  );
  const [deadline, setDeadline] = useState(
    existingCard ? new Date(existingCard.deadline) : new Date()
  );

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      const newCard = { title, description, labelColor, deadline };
      onClose(newCard);
    } else {
      alert('Please enter a title for the card.');
    }
  };

  return (
    <ModalContainer
      modalTitle={existingCard ? 'Edit card' : 'Add card'}
      onClose={() => onClose(null)}
    >
      <div className={styles.form}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className={styles.textareaInput}
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>

        <div className={styles.labelContainer}>
          <span className={styles.labelTitle}>Label color</span>
          <div className={styles.radioGroup}>
            {['low', 'medium', 'high', 'without'].map(color => (
              <label className={styles.radioLabel} key={color}>
                <input
                  type="radio"
                  value={color}
                  checked={labelColor === color}
                  onChange={() => setLabelColor(color)}
                  className={styles.radioInput}
                />
                <span
                  className={`${styles.customRadio} ${
                    styles[`${color}Label`]
                  } ${labelColor === color ? styles.selected : ''}`}
                ></span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.deadlineContainer}>
          <span className={styles.labelTitle}>Deadline</span>
          <Calendar deadline={deadline} setDeadline ={setDeadline} />
        </div>
        <Button icon="plus" onClick={handleSubmit}>
          {existingCard ? 'Save' : 'Add'}
        </Button>
      </div>
    </ModalContainer>
  );
};
