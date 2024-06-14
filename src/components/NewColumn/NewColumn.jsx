import { useState } from 'react';
import css from './NewColumn.module.css';
import { EditColumnModal } from 'components/ModalWindow/EditColumnModal/EditColumnModal';
import { ColumnCard } from 'components/ColumnCard/ColumnCard';
import { AddCardModal } from 'components/ModalWindow/AddCardModal/AddCardModal';
import { Button } from '../Shared/Button/Button';
import sprite from '../../images/sprite.svg';

export const NewColumn = ({
  column,
  setColumns,
  columns,
  handleDeleteColumn,
}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [columnTitle, setColumnTitle] = useState(column.title);

  const handleOpenEdit = () => {
    setShowEditModal(true);
  };

  const handleCloseEdit = newTitle => {
    const updatedColumns = columns.map(col =>
      col.title === column.title ? { ...col, title: newTitle } : col
    );
    setColumns(updatedColumns);
    setColumnTitle(newTitle === '' ? 'Untitled' : newTitle);
    setShowEditModal(false);
  };

  const handleAddCardModalOpen = () => setShowAddCardModal(true);
  const handleAddCardModalClose = newCard => {
    if (newCard) {
      const updatedColumns = columns.map(col =>
        col.title === column.title
          ? { ...col, cards: [...col.cards, newCard] }
          : col
      );
      setColumns(updatedColumns);
    }
    setShowAddCardModal(false);
  };

  const handleDeleteCard = indexToDelete => {
    const updatedColumns = columns.map(col =>
      col.title === column.title
        ? {
            ...col,
            cards: col.cards.filter((_, index) => index !== indexToDelete),
          }
        : col
    );
    setColumns(updatedColumns);
  };

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
          <button
            className={css.headerSvgButton}
            onClick={() => handleDeleteColumn(column.title)}
          >
            <svg className={css.iconTrash} width="16px" height="16px">
              <use href={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      </div>

      <div className={css.cardsContainer}>
        {column.cards.map((card, index) => (
          <ColumnCard
            key={index}
            card={card}
            handleDeleteCard={() => handleDeleteCard(index)}
            setColumns={setColumns}
            columns={columns}
            columnTitle={column.title}
          />
        ))}
      </div>
      <Button
        usage="dashboard"
        className={css.addCardButton}
        icon="plus"
        onClick={handleAddCardModalOpen}
      >
        Add another card
      </Button>
      {showAddCardModal && (
        <AddCardModal onClose={handleAddCardModalClose}></AddCardModal>
      )}
      {showEditModal && (
        <EditColumnModal columnTitle={columnTitle} onClose={handleCloseEdit} />
      )}
    </div>
  );
};
