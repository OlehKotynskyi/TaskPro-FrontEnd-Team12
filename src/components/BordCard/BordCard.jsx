import React, { useState } from 'react';
import css from './BordCard.module.css';
import sprite from '../../images/sprite.svg';
import clsx from 'clsx';
import { BordModal } from 'components/ModalWindow/BordModal/BordModal';
import { useDispatch } from 'react-redux';
import { deletBoard } from '../../redux/boards/boardsOperations';
import { NavLink } from 'react-router-dom';

export const BordCard = ({ board, closeSidebar }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const onEditBoard = e => {
    // e.preventDefault();
    // e.stopPropagation();
    setModalOpen(true);
    closeSidebar();
  };

  const handleModalClose = () => setModalOpen(false);

  const onDelete = e => {
    e.preventDefault();
    e.stopPropagation();

    closeSidebar();
    dispatch(deletBoard(board._id));
  };

  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.card, { [css.cardActive]: isActive });
        }}
        to={board.id}
      >
        <svg className={css.cardSvg}>
          <use href={`${sprite}#${board.icon}`} />
        </svg>
        <p className={css.title}>{board.title}</p>
        <div className={css.btnBlock}>
          <button className={css.btn} onClick={onEditBoard}>
            <svg className={css.btnSvg}>
              <use href={`${sprite}#icon-pencil`} />
            </svg>
          </button>
          <button className={css.btn} onClick={onDelete}>
            <svg className={css.btnSvg}>
              <use href={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
        {isModalOpen && (
          <BordModal onClose={handleModalClose} type="edit" board={board} />
        )}
      </NavLink>
    </li>
  );
};
