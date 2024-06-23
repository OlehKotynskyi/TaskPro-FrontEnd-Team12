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

  const filteredColumns = columns.filter(col => col._id !== currentColumnId);

  return (
    <div ref={dropdownRef} className={css.dropdownContainer}>
      {filteredColumns.length === 0 ? (
        <div className={css.placeholderText}>Create a column</div>
      ) : (
        <ul>
          {filteredColumns.map(col => (
            <li
              key={col._id} // Використовуємо col._id як унікальний ключ
              className={css.listItem}
              onClick={() => {
                moveCardToColumn(col._id);
                onClose(); // Закриваємо меню після переміщення картки
              }}
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
      )}
    </div>
  );
};

export default Dropdown;
