import React, { useState, useEffect } from 'react';
import { AddColumnModal } from 'components/ModalWindow/AddColumnModal/AddColumnModal';
import { EditColumnModal } from 'components/ModalWindow/EditColumnModal/EditColumnModal';
import { Filters } from 'components/ModalWindow/Filters/Filters';
import { NewColumn } from 'components/NewColumn/NewColumn';
import '../../styles/base.css';
import css from './MainDashboard.module.css';
import sprite from '../../images/sprite.svg';
import { Button } from '../Shared/Button/Button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBoard } from '../../redux/boards/boardsOperations';
import { selectCurrentBoard } from '../../redux/boards/boardsSlice';
import {
  createColumn,
  updateColumn,
  deleteColumn,
} from '../../redux/columns/columnsOperations';
import {
  createTodo,
  updateTodoOrder,
  changeTodoColumn,
} from '../../redux/todos/todosOperations';
import {
  selectBackgroundUrl,
  setBackgroundUrl,
} from '../../redux/auth/authSlice';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const MainDashboard = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const board = useSelector(selectCurrentBoard);
  const backgroundUrl = useSelector(selectBackgroundUrl);

  const [columns, setColumns] = useState([]);
  const [showAddColumnModal, setShowAddColumnModal] = useState(false);
  const [showEditColumnModal, setShowEditColumnModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showRightSpacer, setShowRightSpacer] = useState(false);
  const [filterPriority, setFilterPriority] = useState('all');
  const [editingColumn, setEditingColumn] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrollable =
        document.documentElement.scrollHeight >
        window.innerHeight + window.pageYOffset;

      setShowRightSpacer(!isScrollable);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const getCurrentBoard = async () => {
      try {
        const response = await dispatch(getBoard(boardId)).unwrap();
        setColumns(response.columns || []);
        dispatch(setBackgroundUrl(response.board.background));
      } catch (error) {
        console.error('Failed to fetch board:', error);
      }
    };
    getCurrentBoard();
  }, [dispatch, boardId]);

  useEffect(() => {
    if (backgroundUrl) {
      document.documentElement.style.setProperty(
        '--dashboard-background-image',
        `url(${backgroundUrl})`
      );
    }
  }, [backgroundUrl]);

  const handleOpenAdd = () => {
    setShowAddColumnModal(true);
  };

  const handleCloseAdd = async newColumnTitle => {
    setShowAddColumnModal(false);
    if (newColumnTitle) {
      const newColumn = {
        title: newColumnTitle,
      };

      try {
        const response = await dispatch(
          createColumn({ boardId, columnData: newColumn })
        ).unwrap();
        setColumns([...columns, response]);
      } catch (error) {
        console.error('Failed to create column:', error);
      }
    }
  };

  const handleOpenEdit = column => {
    setEditingColumn(column);
    setShowEditColumnModal(true);
  };

  const handleCloseEdit = async updatedColumnTitle => {
    setShowEditColumnModal(false);
    if (updatedColumnTitle && editingColumn) {
      const updatedColumn = {
        title: updatedColumnTitle,
      };

      try {
        const response = await dispatch(
          updateColumn({
            columnId: editingColumn._id,
            columnData: updatedColumn,
          })
        ).unwrap();
        setColumns(
          columns.map(col =>
            col._id === response._id ? { ...col, title: response.title } : col
          )
        );
      } catch (error) {
        console.error('Failed to update column:', error);
      }
    }
    setEditingColumn(null);
  };

  const handleOpenFilter = () => {
    setShowFilter(true);
  };

  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  const handleDeleteColumn = async columnId => {
    try {
      await dispatch(deleteColumn(columnId)).unwrap();
      setColumns(columns.filter(col => col._id !== columnId));
    } catch (error) {
      console.error('Failed to delete column:', error);
    }
  };

  const handleAddCard = async (columnId, newCard) => {
    try {
      const response = await dispatch(
        createTodo({ columnId, todoData: newCard })
      ).unwrap();
      const updatedColumns = columns.map(col =>
        col._id === columnId
          ? { ...col, todos: [...(col.todos || []), response] }
          : col
      );
      setColumns(updatedColumns);
    } catch (error) {
      console.error('Failed to add card:', error);
    }
  };

  const handleDeleteCard = async (columnId, cardId) => {
    const updatedColumns = columns.map(col => {
      if (col._id === columnId) {
        return {
          ...col,
          todos: col.todos.filter(card => card._id !== cardId),
        };
      }
      return col;
    });
    setColumns(updatedColumns);
  };

  const applyFilter = priority => {
    setFilterPriority(priority);
  };

  const resetFilters = () => {
    setFilterPriority('all');
  };

  const filteredColumns = columns
    .map(column => ({
      ...column,
      todos:
        filterPriority === 'all'
          ? column.todos
          : (column.todos || []).filter(
              card =>
                (filterPriority === 'without' &&
                  (card.priority === 'Without priority' || !card.priority)) ||
                card.priority.toLowerCase() === filterPriority
            ),
    }))
    .filter(
      column =>
        filterPriority === 'all' || (column.todos && column.todos.length > 0)
    );

  if (!board) return null;

  const onDragEnd = async result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns.find(col => col._id === source.droppableId);
    const finish = columns.find(col => col._id === destination.droppableId);

    if (start === finish) {
      const newTodoIds = Array.from(start.todos);
      const [movedTodo] = newTodoIds.splice(source.index, 1);
      newTodoIds.splice(destination.index, 0, movedTodo);

      const newColumn = {
        ...start,
        todos: newTodoIds.map((todo, index) => ({ ...todo, position: index })),
      };

      const newColumns = columns.map(col =>
        col._id === newColumn._id ? newColumn : col
      );
      setColumns(newColumns);

      try {
        await dispatch(
          updateTodoOrder({ columnId: start._id, todos: newColumn.todos })
        ).unwrap();
      } catch (error) {
        console.error('Failed to update todo order:', error);
      }
    } else {
      const startTodoIds = Array.from(start.todos);
      const [movedTodo] = startTodoIds.splice(source.index, 1);

      const finishTodoIds = Array.from(finish.todos);
      finishTodoIds.splice(destination.index, 0, movedTodo);

      const newStart = {
        ...start,
        todos: startTodoIds.map((todo, index) => ({
          ...todo,
          position: index,
        })),
      };

      const newFinish = {
        ...finish,
        todos: finishTodoIds.map((todo, index) => ({
          ...todo,
          position: index,
        })),
      };

      const newColumns = columns.map(col => {
        if (col._id === newStart._id) return newStart;
        if (col._id === newFinish._id) return newFinish;
        return col;
      });

      setColumns(newColumns);

      try {
        await dispatch(
          changeTodoColumn({ todoId: draggableId, columnId: finish._id })
        ).unwrap();
        await dispatch(
          updateTodoOrder({ columnId: newStart._id, todos: newStart.todos })
        ).unwrap();
        await dispatch(
          updateTodoOrder({ columnId: newFinish._id, todos: newFinish.todos })
        ).unwrap();
      } catch (error) {
        console.error('Failed to update todo column and order:', error);
      }
    }
  };

  return (
    <div
      className={css.dashboardBackground}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className={css.filterContainer}>
        <h3 className={css.headerText}>{board.board.title}</h3>
        <button onClick={handleOpenFilter} className={css.filter}>
          <svg className={css.iconFilter} width={16} height={16}>
            <use href={`${sprite}#icon-filter`} />
          </svg>
          <p className={css.filterText}>Filters</p>
        </button>
      </div>
      <div className={css.dashboardContainer}>
        <div className={css.columnsWrapper}>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className={css.columnsContainer}>
              {filteredColumns.map(column => (
                <Droppable droppableId={column._id} key={column._id}>
                  {provided => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={css.columnContainer}
                    >
                      <NewColumn
                        key={column._id}
                        column={column}
                        setColumns={setColumns}
                        columns={columns}
                        handleDeleteColumn={handleDeleteColumn}
                        filterPriority={filterPriority}
                        handleOpenEdit={handleOpenEdit}
                        handleAddCard={handleAddCard}
                        handleDeleteCard={handleDeleteCard} // Додано handleDeleteCard
                        filteredTodos={column.todos}
                      />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
              <div className={css.addColumnButton}>
                <Button
                  usage="dashboard"
                  color="neutral"
                  icon="plus"
                  onClick={handleOpenAdd}
                >
                  Add another column
                </Button>
              </div>
              {showRightSpacer && <div className={css.rightSpacer}></div>}
            </div>
          </DragDropContext>
        </div>
      </div>
      {showAddColumnModal && <AddColumnModal onClose={handleCloseAdd} />}
      {showEditColumnModal && editingColumn && (
        <EditColumnModal column={editingColumn} onClose={handleCloseEdit} />
      )}
      {showFilter && (
        <Filters
          onClose={handleCloseFilter}
          applyFilter={applyFilter}
          resetFilters={resetFilters}
          showPriority={filterPriority}
        />
      )}
    </div>
  );
};
