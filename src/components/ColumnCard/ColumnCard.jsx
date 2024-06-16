import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import css from './ColumnCard.module.css';
import { ColumnCardItem } from 'components/ColumnCardItem/ColumnCardItem';
import { AddCardModal } from 'components/ModalWindow/AddCardModal/AddCardModal';

export const ColumnCard = ({
  card,
  handleDeleteCard,
  setColumns,
  columns,
  columnId, // Зміна назви пропса
}) => {
  const [showEditCardModal, setShowEditCardModal] = useState(false);
  const [screenSize, setScreenSize] = useState('pc');
  const listRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setScreenSize('mobile');
      } else if (window.innerWidth <= 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('pc');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenEdit = () => setShowEditCardModal(true);
  const handleCloseEdit = updatedCard => {
    if (updatedCard) {
      const updatedColumns = columns.map(col =>
        col.id === columnId
          ? {
              ...col,
              cards: col.cards.map(c =>
                c.title === card.title ? updatedCard : c
              ),
            }
          : col
      );
      setColumns(updatedColumns);
    }
    setShowEditCardModal(false);
  };

  const moveCardToColumn = targetColumnId => {
    const updatedColumns = columns.map(col => {
      if (col.id === columnId) {
        return {
          ...col,
          cards: col.cards.filter(c => c.title !== card.title),
        };
      }
      if (col.id === targetColumnId) {
        return {
          ...col,
          cards: [...col.cards, card],
        };
      }
      return col;
    });
    setColumns(updatedColumns);
  };

  return (
    <div
      className={clsx(css.column, {
        [css.columnResponsive]: screenSize !== 'pc',
      })}
    >
      <div className={css.scrollable} ref={listRef}>
        <ul className={css.cardsList}>
          <ColumnCardItem
            key={0}
            index={0}
            handleOpenEdit={handleOpenEdit}
            handleDeleteCard={handleDeleteCard}
            card={card}
            columns={columns}
            currentColumnId={columnId} // Передача ID колонки
            moveCardToColumn={moveCardToColumn}
          />
        </ul>
      </div>
      {showEditCardModal && (
        <AddCardModal onClose={handleCloseEdit} existingCard={card} />
      )}
    </div>
  );
};
