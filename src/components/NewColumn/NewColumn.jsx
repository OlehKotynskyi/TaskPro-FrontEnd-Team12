import { useState } from 'react';
import css from './NewColumn.module.css';
import { EditColumnModal } from 'components/ModalWindow/EditColumnModal/EditColumnModal';
import { ColumnCard } from 'components/ColumnCard/ColumnCard';
import { AddCardModal } from 'components/ModalWindow/AddCardModal/AddCardModal';
import { Button } from '../Shared/Button/Button';
import sprite from '../../images/sprite.svg';
import { reduceTextToFit } from '../../utils/reduceTextToFit.js';

export const NewColumn = ({
  column,
  setColumns,
  columns,
  handleDeleteColumn,
  filterPriority, // Додано фільтр пріоритету
}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [columnTitle, setColumnTitle] = useState(column.title);

  const handleOpenEdit = () => {
    setShowEditModal(true);
  };

  const handleCloseEdit = newTitle => {
    const updatedColumns = columns.map(col =>
      col.id === column.id ? { ...col, title: newTitle } : col
    );
    setColumns(updatedColumns);
    setColumnTitle(newTitle === '' ? 'Untitled' : newTitle);
    setShowEditModal(false);
  };

  const handleAddCardModalOpen = () => setShowAddCardModal(true);
  const handleAddCardModalClose = newCard => {
    if (newCard) {
      const updatedColumns = columns.map(col =>
        col.id === column.id ? { ...col, cards: [...col.cards, newCard] } : col
      );
      setColumns(updatedColumns);
    }
    setShowAddCardModal(false);
  };

  const handleDeleteCard = indexToDelete => {
    const updatedColumns = columns.map(col =>
      col.id === column.id
        ? {
            ...col,
            cards: col.cards.filter((_, index) => index !== indexToDelete),
          }
        : col
    );
    setColumns(updatedColumns);
  };

  // Функція для сортування карток за пріоритетом
  const sortCardsByPriority = cards => {
    const priorityOrder = ['high', 'medium', 'low', 'without'];
    return cards
      .slice()
      .sort(
        (a, b) =>
          priorityOrder.indexOf(a.labelColor) -
          priorityOrder.indexOf(b.labelColor)
      );
  };

  // Функція для фільтрації карток
  const filterCards = (cards, priority) => {
    return priority === 'all'
      ? cards
      : cards.filter(card => card.labelColor === priority);
  };

  // Отримання відфільтрованих і відсортованих карток
  const filteredCards = filterCards(column.cards, filterPriority);
  const sortedCards = sortCardsByPriority(filteredCards);

  // title to display
  const maxWidth = 250;
  const font = '500 14px Poppins, sans-serif';
  const reducedTitle = reduceTextToFit(columnTitle, maxWidth, font);

  return (
    <div className={css.columnContainer}>
      <div className={css.columnHeader}>
        <h4 className={css.columnTitle}>{reducedTitle}</h4>
        <div className={css.headerSvgContainer}>
          <button onClick={handleOpenEdit} className={css.headerSvgButton}>
            <svg className={css.iconPencil} width="16px" height="16px">
              <use href={`${sprite}#icon-pencil`} />
            </svg>
          </button>
          <button
            className={css.headerSvgButton}
            onClick={() => handleDeleteColumn(column.id)}
          >
            <svg className={css.iconTrash} width="16px" height="16px">
              <use href={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      </div>
      <div className={css.section}>
        <div className={css.wrap}>
          <div className={css.cardsContainer}>
            {sortedCards.map((card, index) => (
              <ColumnCard
                key={index}
                card={card}
                handleDeleteCard={() => handleDeleteCard(index)}
                setColumns={setColumns}
                columns={columns}
                columnId={column.id} // Передача ID колонки
              />
            ))}
          </div>
        </div>
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
