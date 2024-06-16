import React, { useState } from 'react';
import css from './Info.module.css';
import { BoardModal } from '../ModalWindow/BoardModal/BoardModal';

export const Info = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => setModalOpen(false);

  return (
    <div className={css.noProjectContainer}>
      <p className={css.noProjectNotify}>
        Before starting your project, it is essential{' '}
        <button className={css.button} onClick={handleModalOpen}>
          to create a board
        </button>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
      {isModalOpen && <BoardModal onClose={handleModalClose} type="create" />}
    </div>
  );
};
