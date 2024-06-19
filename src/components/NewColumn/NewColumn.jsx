import React, { useState, useEffect } from 'react';
import css from './NewColumn.module.css';
import { ColumnCard } from 'components/ColumnCard/ColumnCard';
import { AddCardModal } from 'components/ModalWindow/AddCardModal/AddCardModal';
import { Button } from '../Shared/Button/Button';
import sprite from '../../images/sprite.svg';
import { reduceTextToFit } from '../../utils/reduceTextToFit.js';
import { motion } from "framer-motion";

export const NewColumn = ({
  column,
  setColumns,
  columns,
  handleDeleteColumn,
  filterPriority,
  handleOpenEdit,
  handleAddCard,
  filteredTodos,
}) => {
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [columnTitle, setColumnTitle] = useState(column.title);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    setColumnTitle(column.title);
  }, [column.title]);

  const handleAddCardModalOpen = () => setShowAddCardModal(true);
  const handleAddCardModalClose = newCard => {
    if (newCard) {
      handleAddCard(column._id, newCard);
    }
    setShowAddCardModal(false);
  };

  const handleDeleteCard = indexToDelete => {
    const updatedColumns = columns.map(col =>
      col._id === column._id
        ? {
            ...col,
            todos: col.todos.filter((_, index) => index !== indexToDelete),
          }
        : col
    );
    setColumns(updatedColumns);
  };

  const sortCardsByPriority = (cards = []) => {
    const priorityOrder = ['high', 'medium', 'low', 'without'];
    return cards
      .slice()
      .sort(
        (a, b) =>
          priorityOrder.indexOf(a.priority?.toLowerCase() || 'without') -
          priorityOrder.indexOf(b.priority?.toLowerCase() || 'without')
      );
  };

  const filteredCards = filteredTodos || [];
  const sortedCards = sortCardsByPriority(filteredCards);

  const maxWidth = 250;
  const font = '500 14px Poppins, sans-serif';
  const reducedTitle = reduceTextToFit(columnTitle, maxWidth, font);
  const isReduced = reducedTitle < columnTitle ? true : false;  

  return (
    <div className={css.columnContainer}>
      <div className={css.columnHeader}>
      <motion.h4
        className={css.columnTitle}
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        {reducedTitle}
      </motion.h4>
      {isTooltipVisible && isReduced && (
        <motion.div
          className={css.tooltip}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: -0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {columnTitle}
        </motion.div>
      )}

        {/* <h4 className={css.columnTitle}>{reducedTitle}</h4> */}
        <div className={css.headerSvgContainer}>
          <button
            onClick={() => handleOpenEdit(column)}
            className={css.headerSvgButton}
          >
            <svg className={css.iconPencil} width="16px" height="16px">
              <use href={`${sprite}#icon-pencil`} />
            </svg>
          </button>
          <button
            className={css.headerSvgButton}
            onClick={() => handleDeleteColumn(column._id)}
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
                key={card._id}
                card={card}
                handleDeleteCard={() => handleDeleteCard(index)}
                setColumns={setColumns}
                columns={columns}
                columnId={column._id}
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
    </div>
  );
};
