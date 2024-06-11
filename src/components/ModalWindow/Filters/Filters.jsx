import React, { useState } from 'react';
import { ModalContainer } from '../Shared/ModalContainer/ModalContainer';
import styles from './Filters.module.css';

export const Filters = ({ onClose }) => {
  const [labelColor, setLabelColor] = useState('black');

  const getLabel = (value) => {
    if (value === 'black') {
      return 'Without priority';
    } else if (value === 'blue') {
      return 'Low';
    } else if (value === 'pink') {
      return 'Medium';
    } else if (value === 'green') {
      return 'High';
    }
    return "Unexpected priority";
  };

  return (
    <ModalContainer modalTitle="Filters" onClose={onClose}>
      <h3 className={styles.labelTitle}>Label color</h3>
      <div className={styles.radioGroup}>
        {['blue', 'pink', 'green', 'black'].map((color) => (
          <label className={styles.radioLabel} key={color}>
            <input
              type="radio"
              value={color}
              checked={labelColor === color}
              onChange={() => setLabelColor(color)}
              className={styles.radioInput}
            />
            <span className={`${styles.customRadio} ${styles[`${color}Label`]}`}></span>
            <span className={styles.labelText}>{getLabel(color)}</span>
          </label>
        ))}
      </div>
    </ModalContainer>
  );
};