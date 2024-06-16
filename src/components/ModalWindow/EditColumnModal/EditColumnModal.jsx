import React, { useState } from 'react';
// import styles from './EditColumnModal.module.css';
import { ModalContainerReact } from "../Shared/ModalContainerReact/ModalContainerReact";
import { Button } from "../../Shared/Button/Button";
import { ModalInput } from '../../Shared/ModalInput/ModalInput';


export const EditColumnModal = ({ columnTitle, onClose }) => {
  const [newTitle, setNewTitle] = useState(columnTitle);

  const handleSubmit = () => {
    console.log("New Column title is ", newTitle);
    onClose(newTitle);
  };

  return (
    <ModalContainerReact modalTitle="Edit column" onClose={() => onClose(columnTitle)}>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <ModalInput
          // className={styles.formInput}
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Button icon="plus" type="submit">Save</Button>
      </form>
    </ModalContainerReact>
  );
};
