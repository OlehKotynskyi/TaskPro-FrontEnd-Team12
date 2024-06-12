import React, { useState } from 'react';
import styles from './EditColumnModal.module.css';
import { ModalContainer } from "../Shared/ModalContainer/ModalContainer"
import { Button } from "../../Shared/Button/Button"

export const EditColumnModal = ({ columnTitle, onClose }) => {
  const [newTitle, setNewTitle] = useState(columnTitle);

  const handleSubmit = () => {
      console.log("New Column title is ", newTitle);
      onClose(newTitle);
  };

  return (
    <ModalContainer modalTitle="Edit column" onClose={() => onClose(columnTitle)}>
      <form>
        <input
            className={styles.formInput}
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        <Button icon="plus" onClick={handleSubmit}>Add</Button>
      </form>
    </ModalContainer>
  );
};
