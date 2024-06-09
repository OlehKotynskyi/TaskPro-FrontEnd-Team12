import { useState } from 'react';
import css from './ProgressModal.module.css'

export const ProgressModal = ({ onClose }) => {

  const [inputValue, setInputValue] = useState("");


  const saveValue = (e) => {
    console.log(e);
  }

  return (
    <div className={css.modalBackdrop}>
      <div className={css.header} onClick={(e) => e.stopPropagation()}>
        <div className={css.container}>
          <div className={css.closeContainer}>
            <button className={css.onCloseButton} onClick={onClose}>
              <svg width={9} height={9}><use href="../../../images/sprite.svg#icon-x-close"></use></svg>
            </button>
          </div>
          <div className={css.progressContainer}>
                <p>In progress</p>
                <svg width='16px' height='16px'>
                    <use></use>
                </svg>
                  </div>
            <div className={css.progressContainer}>
                <p>Done</p>
                <svg width='16px' height='16px'>
                    <use></use>
                </svg>
            </div>
          </div>
        </div>
      </div>
  );
};
