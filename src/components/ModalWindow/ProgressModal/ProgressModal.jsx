import { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import styles from './ProgressModal.module.css';

const StatusButton = ({ isActive, onClick, text }) => (
  <button onClick={onClick} className={styles.button}>
    <span className={`${styles.text} ${isActive ? styles.done : styles.progress}`}>{text}</span>
    <svg className={`${styles.icon} ${isActive ? styles.done : styles.progress}`}>
      <use xlinkHref={`${sprite}#icon-arrow-circle-broken`} />
    </svg>
  </button>
);

export const ProgressModal = ({ doneStatus = false, onClose }) => {
  const [isDone, setIsDone] = useState(doneStatus);

  const handleWrapClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleStatusChange = (status) => {
    setIsDone(status);
    console.log('Current isDone value:', isDone);
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleWrapClick}>
      <div className={styles.modalContainer}>
        <ul>
          <li className={styles.listItem}>
            <StatusButton 
              isActive={!isDone} 
              onClick={() => handleStatusChange(false)} 
              text="In progress" 
            />
          </li>
          <li className={styles.listItem}>
            <StatusButton 
              isActive={isDone} 
              onClick={() => handleStatusChange(true)} 
              text="Done" 
            />
          </li>
        </ul>   
      </div>
    </div>
  );
};