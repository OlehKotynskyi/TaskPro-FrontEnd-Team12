import React, { useState } from 'react';
import css from './BordCard.module.css';
import logo from '../../images/sprite.svg';
import clsx from 'clsx';
import { BordModal } from 'components/ModalWindow/BordModal/BordModal';

export const BordCard = ({ board, closeSidebar }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onEditBoard = () => {
    setModalOpen(true);
    closeSidebar();
  };

  const handleModalClose = () => setModalOpen(false);

  const onDelete = () => {
    closeSidebar();
    console.log(board);
  };

  return (
    <li className={clsx(css.card, { [css.cardActive]: true })}>
      <svg className={css.cardSvg}>
        <use href={`${logo}#${board.icon}`} />
      </svg>
      <p className={css.title}>{board.title}</p>
      <div className={css.btnBlock}>
        <button className={css.btn} onClick={onEditBoard}>
          <svg className={css.btnSvg}>
            <use href={`${logo}#icon-pencil`} />
          </svg>
        </button>
        <button className={css.btn} onClick={onDelete}>
          <svg className={css.btnSvg}>
            <use href={`${logo}#icon-trash`} />
          </svg>
        </button>
      </div>
      {isModalOpen && (
        <BordModal onClose={handleModalClose} type="edit" board={board} />
      )}
    </li>
  );
};
