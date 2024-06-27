import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import css from './ColumnCard.module.css';
import { ColumnCardItem } from 'components/ColumnCardItem/ColumnCardItem';
import { AddCardModal } from 'components/ModalWindow/AddCardModal/AddCardModal';
import { useDispatch } from 'react-redux';
import {
  deleteTodo,
  updateTodo,
  changeTodoColumn,
} from '../../redux/todos/todosOperations';

export const ColumnCard = ({
  card,
  handleDeleteCard,
  setColumns,
  columns,
  columnId,
}) => {
  const [showEditCardModal, setShowEditCardModal] = useState(false);
  const [screenSize, setScreenSize] = useState('pc');
  const listRef = useRef(null);
  const dispatch = useDispatch();

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

  const handleCloseEdit = async updatedCard => {
    if (updatedCard) {
      try {
        const response = await dispatch(
          updateTodo({ todoId: card._id, todoData: updatedCard })
        ).unwrap();
        const updatedColumns = columns.map(col =>
          col._id === columnId
            ? {
                ...col,
                todos: col.todos.map(c => (c._id === card._id ? response : c)),
              }
            : col
        );
        setColumns(updatedColumns);
      } catch (error) {
        console.error('Failed to update card:', error);
      }
    }
    setShowEditCardModal(false);
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteTodo(card._id)).unwrap();
      handleDeleteCard(card._id);
    } catch (error) {
      console.error('Failed to delete card:', error);
    }
  };

  const moveCardToColumn = async targetColumnId => {
    try {
      const response = await dispatch(
        changeTodoColumn({ todoId: card._id, columnId: targetColumnId })
      ).unwrap();
      const updatedColumns = columns.map(col => {
        if (col._id === columnId) {
          return {
            ...col,
            todos: col.todos.filter(c => c._id !== card._id),
          };
        }
        if (col._id === targetColumnId) {
          return {
            ...col,
            todos: [...col.todos, response],
          };
        }
        return col;
      });
      setColumns(updatedColumns);
    } catch (error) {
      console.error('Failed to move card:', error);
    }
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
            key={card._id}
            index={0}
            handleOpenEdit={handleOpenEdit}
            handleDeleteCard={handleDelete}
            card={card}
            columns={columns}
            currentColumnId={columnId}
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
