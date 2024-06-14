import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import css from './ColumnCard.module.css';
import { ColumnCardItem } from 'components/ColumnCardItem/ColumnCardItem';
import { ProgressModal } from 'components/ModalWindow/ProgressModal/ProgressModal';
import { EditCardModal } from 'components/ModalWindow/EditCardModal/EditCardModal';

export const ColumnCard = () => {
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [cards, setCards] = useState([1, 2, 3, 4]);
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

  const handleOpenEdit = () => setShowEditModal(true);
  const handleCloseEdit = () => setShowEditModal(false);

  const handleDeleteCard = indexToDelete => {
    setCards(prevCards =>
      prevCards.filter((_, index) => index !== indexToDelete)
    );
  };

  const handleEditModalOpen = () => setShowEditCardModal(true);
  const handleEditModalClose = () => setShowEditCardModal(false);

  return (
    <>
      <div
        className={clsx(css.column, {
          [css.columnResponsive]: screenSize !== 'pc',
        })}
      >
        <div
          className={css.scrollable}
          style={{
            maxHeight: `462px`,
            overflowY: 'auto',
          }}
          ref={listRef}
        >
          <ul className={css.cardsList}>
            {cards.map((card, index) => (
              <ColumnCardItem
                key={index}
                index={index}
                handleOpenProgress={handleOpenProgress}
                handleDeleteCard={handleDeleteCard}
                handleEditModalOpen={handleEditModalOpen}
                handleOpenEdit={handleOpenEdit}
              />
            ))}
          </ul>
        </div>

        {showProgressModal && <ProgressModal onClose={handleCloseProgress} />}
        {showEditCardModal && <EditCardModal onClose={handleEditModalClose} />}
        {showEditModal && <EditCardModal onClose={handleCloseEdit} />}
      </div>
    </>
  );
};
