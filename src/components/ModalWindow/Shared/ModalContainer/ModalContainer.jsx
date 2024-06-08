import styles from './ModalContainer.module.css';
import sprite from '../../../../images/sprite.svg';

export const ModalContainer = ({ children, onClose, modalTitle }) => {
    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContainer}>
                <div className={styles.header}>
            <h2 className={styles.title}>{modalTitle}</h2>
            <button onClick={onClose} className={styles.closeButton}>
              <svg
                className={styles.icon}
                aria-hidden="true">
                            <use xlinkHref={`${sprite}#icon-x-close`} />
                        </svg>
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};