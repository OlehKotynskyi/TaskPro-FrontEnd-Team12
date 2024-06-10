import sprite from '../../../../images/sprite.svg';
import styles from './ModalButton.module.css';


export const ModalButton = ({ icon = null, styleType = 'default', type = 'submit', onClick, children }) => {
    const iconLink = icon === 'plus' ? `${sprite}#icon-plus` : null;

    return (
        <button type={type} className={styles.button} onClick={onClick}>
            {iconLink && (
                <span className={styles.iconWrap}>
                    <svg className={styles.icon} aria-hidden="true">
                        <use xlinkHref={iconLink} />
                    </svg>
                </span>
            )}
            <span className={styles.buttonText}>{children}</span>
        </button>
    );
};