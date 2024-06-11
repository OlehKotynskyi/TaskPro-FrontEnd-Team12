import { useState } from 'react';
import css from './NewColumn.module.css';
import { EditColumnModal } from 'components/ModalWindow/EditColumnModal/EditColumnModal';
import { ColumnCard } from 'components/ColumnCard/ColumnCard';
import { AddCardModal } from 'components/ModalWindow/AddCardModal/AddCardModal';
import { DashboardButton } from 'components/DashboardButton/DashboardButton';
import sprite from '../../images/sprite.svg';



export const NewColumn = ({ onClose }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [columnTitle, setColumnTitle] = useState('To Do');

  const handleOpenEdit = () => {
    setShowEditModal(true);
  };

  const handleCloseEdit = (newTitle) => {
    setColumnTitle(newTitle);
    setShowEditModal(false);
  };

  const handleAddCardModalOpen = () => setShowAddCardModal(true);
  const handleAddCardModalClose = () => setShowAddCardModal(false);
  

  return (
    <div className={css.columnContainer}>
      <div className={css.columnHeader}>
        <h4 className={css.columnTitle}>{columnTitle}</h4>
        <div className={css.headerSvgContainer}>
          <button onClick={handleOpenEdit} className={css.headerSvgButton}>
            <svg className={css.iconPencil} width="16px" height="16px">
              <use href={`${sprite}#icon-pencil`} />
            </svg>
          </button>
          <button className={css.headerSvgButton}>
            <svg className={css.iconTrash} width="16px" height="16px">
              <use href={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      </div>

      <ColumnCard />
      <DashboardButton icon="plus" onClick={handleAddCardModalOpen}>
        Add another card
      </DashboardButton>
      {showAddCardModal && (
        <AddCardModal onClose={handleAddCardModalClose}></AddCardModal>
      )}
      {showEditModal && <EditColumnModal columnTitle={columnTitle} onClose={handleCloseEdit} />}
    </div>
  );
};
