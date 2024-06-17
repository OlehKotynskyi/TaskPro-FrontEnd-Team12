import React from 'react';
import ReactModal from 'react-modal';
import styles from './ModalContainerReact.module.css';
import sprite from '../../../images/sprite.svg';

ReactModal.setAppElement('#root');

export const ModalContainerReact = ({ children, onClose, modalTitle, width }) => {
  const containerStyle = width ? { maxWidth: `${width}px` } : {};

  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      className={{
        base: styles.modalContainer,
        afterOpen: styles.modalContainerOpen,
        beforeClose: styles.modalContainerClose,
      }}
      style={{ content: containerStyle }} // Apply the inline style here
      overlayClassName={{
        base: styles.modalBackdrop,
        afterOpen: styles.modalBackdropOpen,
        beforeClose: styles.modalBackdropClose,
      }}
      closeTimeoutMS={300} // Match this with CSS transition duration
    >
      <div>
        <div className={styles.header}>
          <h2 className={styles.title}>{modalTitle}</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <svg className={styles.icon} width="18px" height="18px">
              <use xlinkHref={`${sprite}#icon-x-close`} />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </ReactModal>
  );
};
