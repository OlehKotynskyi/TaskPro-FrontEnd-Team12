import { useState, useEffect } from 'react';
import clsx from 'clsx';
import css from './ColumnCard.module.css';
import { ColumnCardItem } from 'components/ColumnCardItem/ColumnCardItem';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { ProgressModal } from 'components/ModalWindow/ProgressModal/ProgressModal';

export const ColumnCard = () => {
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [cards, setCards] = useState([1, 2, 3, 4]);

  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [screenSize, setScreenSize] = useState('pc');

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

  const handleDeleteCard = (indexToDelete) => {
    setCards((prevCards) => prevCards.filter((_, index) => index !== indexToDelete));
  };

  const simpleBarStyle = {
    maxHeight: screenSize === 'mobile' ? 450 : screenSize === 'tablet' ? 616 : 450,
  };

  return (
    <>
      <div className={clsx(css.column, { [css.columnResponsive]: screenSize !== 'pc' })}>
        <SimpleBar style={simpleBarStyle}>
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

