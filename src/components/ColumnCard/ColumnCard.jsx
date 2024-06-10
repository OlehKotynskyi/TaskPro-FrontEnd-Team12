import { useState } from 'react';
import css from './ColumnCard.module.css';
import { ColumnCardItem } from 'components/ColumnCardItem/ColumnCardItem';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { ProgressModal } from 'components/ModalWindow/ProgressModal/ProgressModal';

export const ColumnCard = () => {
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [cards, setCards] = useState([1, 2, 3, 4]);

  const handleOpenProgress = () => {
    setShowProgressModal(true);
  };

  const handleCloseProgress = () => {
    setShowProgressModal(false);
  };

  const handleDeleteCard = (indexToDelete) => {
    setCards((prevCards) => prevCards.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <div className={css.column}>
        <SimpleBar style={{ maxHeight: 450 }}>
          <ul className={css.cardsList}>
            {cards.map((card, index) => (
              <ColumnCardItem
                key={index}
                index={index}
                showProgressModal={showProgressModal}
                handleOpenProgress={handleOpenProgress}
                handleDeleteCard={handleDeleteCard}
              />
            ))}
          </ul>
        </SimpleBar>

        {showProgressModal && <ProgressModal onClose={handleCloseProgress} />}
      </div>
    </>
  );
};

