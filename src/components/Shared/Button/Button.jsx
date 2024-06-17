import sprite from '../../../images/sprite.svg';
import styles from './Button.module.css';

// usage = "modal" або "dashboard"

export const Button = ({
  usage = 'modal',
  icon = null,
  color = 'default',
  type = 'submit',
  onClick,
  children,
}) => {
  const iconLink = icon === 'plus' ? `${sprite}#icon-plus` : null;

  let buttonClass = `${styles.button} ${
    color === 'neutral' ? styles.neutral : styles.default
  }`;

  if (usage === 'dashboard') {
    buttonClass = `${styles.button} ${styles.dashboard} ${
      color === 'neutral' ? styles.neutral : styles.default
    }`;
  }

  const iconWrapClass = `${styles.iconWrap} ${
    color === 'neutral' ? styles.neutralWrap : styles.defaultWrap
  }`;
  const iconClass = `${styles.icon} ${
    color === 'neutral' ? styles.neutralIcon : styles.defaultIcon
  }`;

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {iconLink && (
        <span className={iconWrapClass}>
          <svg className={iconClass} aria-hidden="true">
            <use xlinkHref={iconLink} />
          </svg>
        </span>
      )}
      <span className={styles.buttonText}>{children}</span>
    </button>
  );
};
