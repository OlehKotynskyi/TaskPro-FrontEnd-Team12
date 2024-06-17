import { useState, useEffect } from 'react';
import { AddColumnModal } from 'components/ModalWindow/AddColumnModal/AddColumnModal';
import { Filters } from 'components/ModalWindow/Filters/Filters';
import { NewColumn } from 'components/NewColumn/NewColumn';
import '../../styles/base.css';
import css from './MainDashboard.module.css';
import sprite from '../../images/sprite.svg';
import { Button } from '../Shared/Button/Button';
import { v4 as uuidv4 } from 'uuid'; // Додано для генерації унікальних ідентифікаторів
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBoard } from '../../redux/boards/boardsOperations';
import { selectCurrentBoard } from '../../redux/boards/boardsSlice';

export const MainDashboard = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const board = useSelector(selectCurrentBoard);

  const [amountOfBoards, setAmountOfBoards] = useState(0);
  const [columns, setColumns] = useState([]);
  const [showAddColumnModal, setShowAddColumnModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showRightSpacer, setShowRightSpacer] = useState(false);
  const [filterPriority, setFilterPriority] = useState('all'); // Додано фільтр пріоритету

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
    const getCurrentBoard = () => {
      dispatch(getBoard(boardId));
    };
    getCurrentBoard();
  }, [dispatch, boardId]);

  const handleOpenAdd = () => {
    setShowAddColumnModal(true);
  };

  const handleCloseAdd = newColumnTitle => {
    setShowAddColumnModal(false);
    if (newColumnTitle) {
      const newColumn = {
        id: uuidv4(), // Додано унікальний ідентифікатор
        title: newColumnTitle,
        cards: [],
      };
      setColumns([...columns, newColumn]);
      setAmountOfBoards(amountOfBoards + 1);
    }
  };

  const handleOpenFilter = () => {
    setShowFilter(true);
  };

  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  const handleDeleteColumn = columnId => {
    setColumns(columns.filter(col => col.id !== columnId));
    setAmountOfBoards(amountOfBoards - 1);
  };

  const applyFilter = priority => {
    setFilterPriority(priority); // Оновлення фільтру пріоритету
  };

  if (!board) return;

  return (
    <div className={css.dashboardBackground}>
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
          <div className={css.columnsContainer}>
            {columns
              .filter(
                column =>
                  filterPriority === 'all' ||
                  column.cards.some(card => card.labelColor === filterPriority)
              ) // Фільтрація колонок
              .map((column, index) => (
                <NewColumn
                  key={column.id}
                  column={column}
                  setColumns={setColumns}
                  columns={columns}
                  handleDeleteColumn={handleDeleteColumn}
                  filterPriority={filterPriority} // Передача фільтру пріоритету
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
      {showFilter && (
        <Filters onClose={handleCloseFilter} applyFilter={applyFilter} showPriority={filterPriority} />
      )}{' '}
      {/* Додано функцію фільтру */}
    </div>
  );
};
