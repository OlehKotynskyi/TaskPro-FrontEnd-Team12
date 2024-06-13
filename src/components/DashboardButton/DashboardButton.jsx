//import sprite from '../../images/sprite.svg';
//import styles from './DashboardButton.module.css';

//export const DashboardButton = ({ icon = null, styleType = 'default', type = 'submit', onClick, children }) => {
//    const iconLink = icon === 'plus' ? `${sprite}#icon-plus` : null;

//    const buttonClass = `${styles.button} ${styleType === 'neutral' ? styles.neutral : styles.default}`;
//    const iconWrapClass = `${styles.iconWrap} ${styleType === 'neutral' ? styles.neutralWrap : styles.defaultWrap}`;
//    const iconClass = `${styles.icon} ${styleType === 'neutral' ? styles.neutralIcon : styles.defaultIcon}`;

//    return (
//        <button type={type} className={buttonClass} onClick={onClick}>
//            {iconLink && (
//                <span className={iconWrapClass}>
//                    <svg className={iconClass} aria-hidden="true">
//                        <use xlinkHref={iconLink} />
//                    </svg>
//                </span>
//            )}
//            <span className={styles.buttonText}>{children}</span>
//        </button>
//    );
//};
