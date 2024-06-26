import React, { useState } from 'react';
import { ModalContainerReact } from '../../Shared/ModalContainerReact/ModalContainerReact';
import styles from './Filters.module.css';

export const Filters = ({
  showPriority = 'all',
  onClose,
  applyFilter,
  resetFilters,
}) => {
  const [priority, setPriority] = useState(showPriority);

  const handleShowAll = () => {
    setPriority('all');
    applyFilter('all');
    resetFilters();
    onClose();
  };

  const handleFilterChange = value => {
    setPriority(value);
    applyFilter(value);
    onClose();
  };

  const getLabel = value =>
    ({
      without: 'Without priority',
      low: 'Low',
      medium: 'Medium',
      high: 'High',
    }[value]);

  console.log('Current filter priority:', priority);

  return (
    <ModalContainerReact width={300} modalTitle="Filters" onClose={onClose}>
      <div className={styles.container}>
        <div>
          <h3 className={styles.labelTitle}>Label color</h3>
          <div className={styles.radioGroup}>
            {['without', 'low', 'medium', 'high'].map(color => (
              <label className={styles.radioLabel} key={color}>
                <input
                  type="radio"
                  value={color}
                  checked={priority === color}
                  onChange={() => handleFilterChange(color)}
                  className={styles.radioInput}
                />
                <span
                  className={`${styles.customRadio} ${styles[`${color}Label`]}`}
                ></span>
                <span
                  className={`${styles.labelText} ${
                    priority === color ? styles.highlightedText : ''
                  }`}
                >
                  {getLabel(color)}
                </span>
              </label>
            ))}
          </div>
        </div>
        <button className={styles.showAll} onClick={handleShowAll}>
          Show all
        </button>
      </div>
    </ModalContainerReact>
  );
};
