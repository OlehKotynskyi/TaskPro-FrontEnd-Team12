import React, { useState } from 'react';
// import styles from './AddColumnModal.module.css';
import { ModalContainerReact } from '../Shared/ModalContainerReact/ModalContainerReact';
import { Button } from '../../Shared/Button/Button';
import { ModalInput } from '../../Shared/ModalInput/ModalInput';

export const AddColumnModal = ({ onClose }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (title.trim()) {
      onClose(title);
    } else {
      alert('Please enter a title for the column.');
    }
  };

  return (
    <ModalContainerReact modalTitle="Add column" onClose={() => onClose(null)}>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <ModalInput
          // className={styles.formInput}
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          autoFocus = {true}
        />
        <Button icon="plus" type="submit">Add</Button>
      </form>
    </ModalContainerReact>
  );
};
