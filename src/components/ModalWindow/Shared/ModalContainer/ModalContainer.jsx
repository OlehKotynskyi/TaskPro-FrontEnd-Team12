import styles from './ModalContainer.module.css';
import sprite from '../../../../images/sprite.svg';

export const ModalContainer = ({ children, onClose, modalTitle, width }) => {

    const handleWrapClick = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    
    return (
        <div className={styles.modalBackdrop} onClick={handleWrapClick}  >
            <div className={styles.modalContainer} style={{ width: width ? `${width}px` : null }}>
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