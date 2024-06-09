//import { useState } from 'react';
import css from './AddColumnModal.module.css';

export const AddColumnModal = ({ onClose }) => {
  //  const [inputValue, setInputValue] = useState("");

  const saveValue = e => {
    console.log(e);
  };

  return (
    <div className={css.modalBackdrop}>
      <div className={css.header} onClick={e => e.stopPropagation()}>
        <div className={css.container}>
          <h2>Add Column</h2>
          <div className={css.closeContainer}>
            <button className={css.onCloseButton} onClick={onClose}>
              <svg width={9} height={9}>
                <use href="../../../images/sprite.svg#icon-x-close"></use>
              </svg>
            </button>
          </div>
          <form className={css.form} onSubmit={saveValue()} action="">
            <input className={css.formInput} type="text" placeholder="Title" />
            <button className={css.formButton} type="submit">
              <svg width={28} height={28}>
                <use href="../../../images/sprite.svg#icon-plus"></use>
              </svg>
              <p className={css.submitButtonText}>Add</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
