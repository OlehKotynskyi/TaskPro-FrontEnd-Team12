import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import css from './ColumnCard.module.css';
import { ColumnCardItem } from 'components/ColumnCardItem/ColumnCardItem';
import { ProgressModal } from 'components/ModalWindow/ProgressModal/ProgressModal';
import { AddCardModal } from 'components/ModalWindow/AddCardModal/AddCardModal';

export const ColumnCard = ({
  card,
  handleDeleteCard,
  setColumns,
  columns,
  columnTitle,
}) => {
  const [showProgressModal, setShowProgressModal] = useState(false);
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

  const handleOpenProgress = () => {
    setShowProgressModal(true);
  };

  const handleCloseProgress = () => {
    setShowProgressModal(false);
  };

  const handleOpenEdit = () => setShowEditCardModal(true);
  const handleCloseEdit = updatedCard => {
    if (updatedCard) {
      const updatedColumns = columns.map(col =>
        col.title === columnTitle
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

  return (
    <div
      className={clsx(css.column, {
        [css.columnResponsive]: screenSize !== 'pc',
      })}
    >
      <div
        className={css.scrollable}
        style={{
          maxHeight: `calc(100vh - 20px)`,
          overflowY: 'auto',
        }}
        ref={listRef}
      >
        <ul className={css.cardsList}>
          <ColumnCardItem
            key={0}
            index={0}
            handleOpenProgress={handleOpenProgress}
            handleOpenEdit={handleOpenEdit}
            handleDeleteCard={handleDeleteCard}
            card={card}
          />
        </ul>
      </div>

      {showProgressModal && <ProgressModal onClose={handleCloseProgress} />}
      {showEditCardModal && (
        <AddCardModal onClose={handleCloseEdit} existingCard={card} />
      )}
    </div>
  );
};
