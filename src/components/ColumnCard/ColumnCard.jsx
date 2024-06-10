import { useState, useEffect } from 'react';
import clsx from 'clsx';
import css from './ColumnCard.module.css';
import { ColumnCardItem } from 'components/ColumnCardItem/ColumnCardItem';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { ProgressModal } from 'components/ModalWindow/ProgressModal/ProgressModal';
import { AddCardModal } from 'components/ModalWindow/AddCardModal/AddCardModal';

export const ColumnCard = () => {
  const [showProgressModal, setShowProgressModal] = useState(false);
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

  const handleAddCard = () => {
    setShowAddCardModal(true);
  };

  const handleCloseAddCard = () => {
    setShowAddCardModal(false);
  };

  const cards = [1, 2, 3, 4];

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
                showProgressModal={showProgressModal}
                handleOpenProgress={handleOpenProgress}
              />
            ))}
          </ul>
        </SimpleBar>

        {showProgressModal && <ProgressModal onClose={handleCloseProgress} />}
      </div>
      {showAddCardModal && <AddCardModal onClose={handleCloseAddCard} />}
    </>
  );
};
