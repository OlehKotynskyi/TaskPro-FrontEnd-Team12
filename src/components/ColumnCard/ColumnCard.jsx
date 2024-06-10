import { useState } from 'react';
import css from './ColumnCard.module.css';
import { ColumnCardItem } from 'components/ColumnCardItem/ColumnCardItem';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { ProgressModal } from 'components/ModalWindow/ProgressModal/ProgressModal';

export const ColumnCard = () => {
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
    { id: 4, title: "Card 4" }
  ]);

  const handleOpenProgress = () => {
    setShowProgressModal(true);
  };

  const handleCloseProgress = () => {
    setShowProgressModal(false);
  };

  const handleDeleteCard = (cardId) => {
    setCards(cards.filter(card => card.id !== cardId));
  };

  return (
    <>
      <div className={css.column}>
        <SimpleBar style={{ maxHeight: 450 }}>
          <ul className={css.cardsList}>
            {cards.map((card) => (
              <ColumnCardItem
                key={card.id}
                card={card}
                showProgressModal={showProgressModal}
                handleOpenProgress={handleOpenProgress}
                handleDeleteCard={() => handleDeleteCard(card.id)}
              />
            ))}
          </ul>
        </SimpleBar>
        {showProgressModal && <ProgressModal onClose={handleCloseProgress} />}
      </div>
    </>
  );
};
