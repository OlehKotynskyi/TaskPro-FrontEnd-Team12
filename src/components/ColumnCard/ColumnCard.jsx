import React, { useState } from 'react';
import css from './ColumnCard.module.css';
import { ColumnCardItem } from 'components/ColumnCardItem/ColumnCardItem';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { ProgressModal } from 'components/ModalWindow/ProgressModal/ProgressModal';
import { AddCardModal } from 'components/ModalWindow/AddCardModal/AddCardModal';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const ColumnCard = () => {
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [cards, setCards] = useState([
    { id: '1', content: 'The Watch Spot Design' },
    { id: '2', content: 'The Watch Spot Design' },
    { id: '3', content: 'The Watch Spot Design' },
    { id: '4', content: 'The Watch Spot Design' }
  ]);

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

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
    


    const updatedCards = Array.from(cards);
    const [removed] = updatedCards.splice(source.index, 1);
    updatedCards.splice(destination.index, 0, removed);

    setCards(updatedCards);
  
    };
  };

  return (
    <>
      <div className={css.column}>
        <SimpleBar style={{ maxHeight: 450 }}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable-cards">
              {(provided) => (
                <ul
                  className={css.cardsList}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {cards.map((card, index) => (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided, snapshot) => (
                        <ColumnCardItem
                          key={card.id}
                          provided={provided}
                          isDragging={snapshot.isDragging}
                          showProgressModal={showProgressModal}
                          handleOpenProgress={handleOpenProgress}
                          content={card.content}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </SimpleBar>
        <button className={css.addButton} onClick={handleAddCard}>
          Add another card
        </button>
        {showProgressModal && <ProgressModal onClose={handleCloseProgress} />}
      </div>
      {showAddCardModal && <AddCardModal onClose={handleCloseAddCard} />}
    </>
  );
};
