import React, { useState, useEffect } from 'react';
import styles from './ModalContainerEffect.module.css';
import sprite from '../../../../images/sprite.svg';

export const ModalContainerEffect = ({ children, onClose, modalTitle, width, handleSubmit }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWrapClick = (e) => {
    if (e.target === e.currentTarget) {
      triggerClose();
    }
  };

  const triggerClose = (callback) => {
    setIsVisible(false);
    setTimeout(() => {
      if (callback) callback();
      onClose();
    }, 300);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (handleSubmit) {
      handleSubmit(triggerClose);
    } else {
      triggerClose();
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        triggerClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [triggerClose]);

  return (
    <div
      className={`${styles.modalBackdrop} ${isVisible ? styles.fadeIn : styles.fadeOut}`}
      onClick={handleWrapClick}
    >
      <div
        className={`${styles.modalContainer} ${isVisible ? styles.slideIn : styles.slideOut}`}
        style={{ width: width ? `${width}px` : null }}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{modalTitle}</h2>
          <button onClick={() => triggerClose()} className={styles.closeButton}>
            <svg className={styles.icon} aria-hidden="true">
              <use xlinkHref={`${sprite}#icon-x-close`} />
            </svg>
          </button>
        </div>
        <form onSubmit={handleFormSubmit}>
          {React.cloneElement(children, { triggerClose })}
        </form>
      </div>
    </div>
  );
};
