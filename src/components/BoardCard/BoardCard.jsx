import React, { useState } from 'react';
import css from './BoardCard.module.css';
import sprite from '../../images/sprite.svg';
import clsx from 'clsx';
import { BoardModal } from '../ModalWindow/BoardModal/BoardModal';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../redux/boards/boardsOperations';

export const BoardCard = ({
  board,
  activeBoardId,
  setActiveBoardId,
  closeSidebar,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const onEditBoard = e => {
    e.preventDefault();
    e.stopPropagation();
    setModalOpen(true);
    closeSidebar();
  };

  const handleModalClose = () => setModalOpen(false);

  const onDelete = e => {
    e.preventDefault();
    e.stopPropagation();
    closeSidebar();
    dispatch(deleteBoard(board._id));
  };

  return (
    <li
      className={clsx(css.card, {
        [css.cardActive]: board._id === activeBoardId,
      })}
      onClick={() => setActiveBoardId(board._id)}
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
        <BoardModal onClose={handleModalClose} type="edit" board={board} />
      )}
    </li>
  );
};
