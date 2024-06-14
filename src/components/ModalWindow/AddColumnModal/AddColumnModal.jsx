import React, { useState } from 'react';
import styles from './AddColumnModal.module.css';
import { ModalContainer } from '../Shared/ModalContainer/ModalContainer';
import { Button } from '../../Shared/Button/Button';

export const AddColumnModal = ({ onClose }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      onClose(title);
    } else {
      alert('Please enter a title for the column.');
    }
  };

  return (
    <ModalContainer modalTitle="Add column" onClose={() => onClose(null)}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Button icon="plus" type="submit">
          Add
        </Button>
      </form>
    </ModalContainer>
  );
};
