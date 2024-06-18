import React, { useEffect, useRef } from 'react';
import sprite from '../../images/sprite.svg';
import css from './Dropdown.module.css';

const Dropdown = ({ columns, currentColumnId, moveCardToColumn, onClose }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose(); // Закриваємо меню при кліку поза ним
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, onClose]);

  return (
    <div ref={dropdownRef} className={css.dropdownContainer}>
      <ul>
        {columns
          .filter(col => col._id !== currentColumnId) // Фільтруємо колонку, в якій знаходиться картка
          .map(col => (
            <li
              key={col._id} // Використовуємо col._id як унікальний ключ
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
  );
};

export default Dropdown;
