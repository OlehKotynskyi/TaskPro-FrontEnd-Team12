import React, { useState } from 'react';
import css from './BordCard.module.css';
import sprite from '../../images/sprite.svg';
import clsx from 'clsx';
import { BordModal } from 'components/ModalWindow/BordModal/BordModal';
import { useDispatch } from 'react-redux';
import { deletBoard } from '../../redux/boards/boardsOperations';
import { useNavigate, useParams } from 'react-router-dom';

export const BordCard = ({ board, closeSidebar }) => {
  const navigate = useNavigate();
  const { boardId } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const onSelectBoard = () => navigate(board._id);

  const handleModalClose = () => setModalOpen(false);

  const onSuccessDelete = () => {
    if (boardId === board._id) {
      navigate('/home', { replace: true });
    }
  };

  const onEditBoard = e => {
    e.stopPropagation();
    setModalOpen(true);
    closeSidebar();
  };

  const onDelete = e => {
    e.stopPropagation();
    const params = {
      id: board._id,
      callback: onSuccessDelete,
    };
    dispatch(deletBoard(params));
  };

  return (
    <>
      <li>
        <div
          onClick={onSelectBoard}
          className={clsx(css.card, {
            [css.cardActive]: boardId === board._id,
          })}
          to={board._id}
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
        </div>
      </li>
      {isModalOpen && (
        <BordModal onClose={handleModalClose} type="edit" board={board} />
      )}
    </>
  );
};
