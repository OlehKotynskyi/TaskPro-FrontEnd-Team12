import React, { useState } from 'react';
import styles from './EditColumnModal.module.css';
import { ModalContainer } from "../Shared/ModalContainer/ModalContainer"
import { ModalButton } from "../Shared/ModalButton/ModalButton"

export const EditColumnModal = ({ columnTitle, onClose }) => {
  const [newTitle, setNewTitle] = useState(columnTitle);

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("New Column title is ", newTitle);
      onClose(newTitle === "" ? "Untitled" : newTitle);
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
