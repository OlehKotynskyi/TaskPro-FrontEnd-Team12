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
import { createTodo } from '../../redux/todos/todosOperations'; // Додаємо імпорт createTodo

export const MainDashboard = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const board = useSelector(selectCurrentBoard);

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
      } catch (error) {
        console.error('Failed to fetch board:', error);
      }
    };
    getCurrentBoard();
  }, [dispatch, boardId]);

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
              card => card.priority.toLowerCase() === filterPriority
            ),
    }))
    .filter(
      column =>
        filterPriority === 'all' || (column.todos && column.todos.length > 0)
    );

  if (!board) return null;

  return (
    <div className={css.dashboardBackground}>
      <div className={css.filterContainer}>
        <h3 className={css.headerText}>{board.title}</h3>
        <button onClick={handleOpenFilter} className={css.filter}>
          <svg className={css.iconFilter} width={16} height={16}>
            <use href={`${sprite}#icon-filter`} />
          </svg>
          <p className={css.filterText}>Filters</p>
        </button>
      </div>
      <div className={css.dashboardContainer}>
        <div className={css.columnsWrapper}>
          <div className={css.columnsContainer}>
            {filteredColumns.map(column => (
              <NewColumn
                key={column._id}
                column={column}
                setColumns={setColumns}
                columns={columns}
                handleDeleteColumn={handleDeleteColumn}
                filterPriority={filterPriority}
                handleOpenEdit={handleOpenEdit}
                handleAddCard={handleAddCard}
              />
            ))}
            <Button
              usage="dashboard"
              color="neutral"
              icon="plus"
              onClick={handleOpenAdd}
              className={css.addColumnButton}
            >
              Add another column
            </Button>
            {showRightSpacer && <div className={css.rightSpacer}></div>}
          </div>
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
        />
      )}
    </div>
  );
};
