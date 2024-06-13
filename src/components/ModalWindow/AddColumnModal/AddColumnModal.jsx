import React, { useState } from 'react';
import styles from './AddColumnModal.module.css';
import { ModalContainer } from "../Shared/ModalContainer/ModalContainer"
import { Button } from "../../Shared/Button/Button"

export const AddColumnModal = ({ onClose }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
      console.log({ title });
      onClose();
  };

  return (
    <ModalContainer modalTitle="Add column" onClose={onClose}>
      <form>
        <input
            className={styles.formInput}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        <Button icon="plus" onClick={handleSubmit}>Add</Button>
      </form>
    </ModalContainer>
  );
};
