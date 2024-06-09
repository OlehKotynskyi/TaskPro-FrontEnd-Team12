import sprite from '../../../../images/sprite.svg';
import styles from './ModalButton.module.css';

export const ModalButton = ({icon = null, type = "submit", onClick, children }) => {
 
  let iconLink = null;
  
  if (icon === 'plus') iconLink = `${sprite}#icon-plus`;

  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {iconLink && 
        (<span className={styles.iconWrap}>
        <svg className={styles.icon} aria-hidden="true">
          <use xlinkHref={iconLink} />
        </svg></span>)
      }
      <span className={styles.buttonText}>{children}</span>
    </button>
  );
};