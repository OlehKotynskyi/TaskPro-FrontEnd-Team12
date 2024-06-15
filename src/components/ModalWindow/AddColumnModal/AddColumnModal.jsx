import React, { useState } from 'react';
import styles from './AddColumnModal.module.css';
import { ModalContainerEffect } from '../Shared/ModalContainerEffect/ModalContainerEffect';
import { Button } from '../../Shared/Button/Button';

export const AddColumnModal = ({ onClose }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (triggerClose) => {
    if (title.trim()) {
      triggerClose(() => onClose(title)); // smooth close
    } else {
      alert('Please enter a title for the column.');
    }
  };

  return (
    <ModalContainerEffect modalTitle="Add column" onClose={() => onClose(null)} handleSubmit={handleSubmit}>
      <div>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Button icon="plus" type="submit">Add</Button>
      </div>
    </ModalContainerEffect>
  );
};
