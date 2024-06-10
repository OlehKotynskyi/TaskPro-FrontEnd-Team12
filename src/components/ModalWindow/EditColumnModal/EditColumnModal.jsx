import React, { useState } from 'react';
import styles from './EditColumnModal.module.css';
import { ModalContainer } from "../Shared/ModalContainer/ModalContainer"
import { ModalButton } from "../Shared/ModalButton/ModalButton"

export const EditColumnModal = ({ title = "Current title", onClose }) => {
  const [newTitle, setNewTitle] = useState(title);

  const handleSubmit = () => {
      console.log({ newTitle });
      onClose();
  };

  return (
    <ModalContainer modalTitle="Edit column" onClose={onClose}>
      <form>
        <input
            className={styles.formInput}
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        <ModalButton icon="plus" onClick={handleSubmit}>Add</ModalButton>
      </form>
    </ModalContainer>
  );
};
