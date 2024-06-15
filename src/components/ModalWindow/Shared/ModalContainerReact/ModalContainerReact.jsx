import React from 'react';
import ReactModal from 'react-modal';
import styles from './ModalContainerReact.module.css';
import sprite from '../../../../images/sprite.svg';

ReactModal.setAppElement('#root');

export const ModalContainerReact = ({ children, onClose, modalTitle, width }) => {
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      className={{
        base: styles.modalContainer,
        afterOpen: styles.modalContainerOpen,
        beforeClose: styles.modalContainerClose,
      }}
      overlayClassName={{
        base: styles.modalBackdrop,
        afterOpen: styles.modalBackdropOpen,
        beforeClose: styles.modalBackdropClose,
      }}
      closeTimeoutMS={300} // Match this with CSS transition duration
    >
      <div style={{ width: width ? `${width}px` : 'auto' }}>
        <div className={styles.header}>
          <h2 className={styles.title}>{modalTitle}</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <svg className={styles.icon} aria-hidden="true">
              <use xlinkHref={`${sprite}#icon-x-close`} />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </ReactModal>
  );
};
