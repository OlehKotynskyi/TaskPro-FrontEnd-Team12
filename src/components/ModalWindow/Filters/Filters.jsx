import React, { useState } from 'react';
import { ModalContainer } from '../Shared/ModalContainer/ModalContainer';
import styles from './Filters.module.css';

// showPriority - значення фільтру відображення карток певного пріорітету

export const Filters = ({ showPriority = 'all', onClose }) => {
  const [priority, setPriority] = useState(showPriority);

  const handleShowAll = () => {
    setPriority('all');
    onClose();
  }
  
  const getLabel = (value) => {
    const labels = {
      without: 'Without priority',
      low: 'Low',
      medium: 'Medium',
      high: 'High',
    };
    return labels[value];
  };

  return (
    <ModalContainer width={300} modalTitle="Filters" onClose={onClose}>
      <div className={styles.container}>
        <div>
          <h3 className={styles.labelTitle}>Label color</h3>
          <div className={styles.radioGroup}>
            {['without', 'low', 'medium', 'high'].map((color) => (
              <label className={styles.radioLabel} key={color}>
                <input
                  type="radio"
                  value={color}
                  checked={priority === color}
                  onChange={() => setPriority(color)}
                  className={styles.radioInput}
                />
                <span className={`${styles.customRadio} ${styles[`${color}Label`]}`}></span>
                <span className={styles.labelText}>{getLabel(color)}</span>
              </label>
            ))}
          </div>
        </div>
        <button className={styles.showAll} onClick={handleShowAll}>Show all</button>
      </div>
    </ModalContainer>
  );
};