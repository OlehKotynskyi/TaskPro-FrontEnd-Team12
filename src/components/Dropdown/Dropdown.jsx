import React from 'react';
import sprite from '../../images/sprite.svg';
import css from './Dropdown.module.css';

const Dropdown = ({ columns, currentColumnId, moveCardToColumn }) => {
  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalContainer}>
        <ul>
          {columns
            .filter(col => col._id !== currentColumnId)
            .map((col, index) => (
              <li
                key={index}
                className={css.listItem}
                onClick={() => moveCardToColumn(col._id)}
              >
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
