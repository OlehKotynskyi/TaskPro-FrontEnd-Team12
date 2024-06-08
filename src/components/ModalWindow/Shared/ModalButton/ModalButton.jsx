import sprite from '../../../../images/sprite.svg';
import styles from './ModalButton.module.css';

export const ModalButton = ({ onClick, children }) => {
    return (
      <button className={styles.button} onClick={onClick}>
        <span className={styles.iconWrap}>
        <svg className={styles.icon} aria-hidden="true">
          <use xlinkHref={`${sprite}#icon-plus`} />
        </svg></span>
        <span className={styles.buttonText}>{children}</span>
      </button>
    );
};
