import sprite from '../../images/sprite.svg';
import css from './Dropdown.module.css';

const Dropdown = ({ columns, currentColumn, moveCardToColumn }) => {
  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalContainer}>
        <ul>
          {columns.filter(col => col.title !== currentColumn).map((col, index) => (
            <li key={index} className={css.listItem} onClick={() => moveCardToColumn(col.title)}>
              <button className={css.button}>
                <span className={css.text}>{col.title}</span>
                <svg className={css.icon}>
                  <use xlinkHref={`${sprite}#icon-arrow-circle-broken`} />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;

