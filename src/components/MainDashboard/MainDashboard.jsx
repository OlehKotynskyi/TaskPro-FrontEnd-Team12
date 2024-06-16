import { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { AddColumnModal } from 'components/ModalWindow/AddColumnModal/AddColumnModal';
import { Filters } from 'components/ModalWindow/Filters/Filters';
import { NewColumn } from 'components/NewColumn/NewColumn';
import '../../styles/base.css';
import css from './MainDashboard.module.css';
import sprite from '../../images/sprite.svg';
import { Button } from '../Shared/Button/Button';
import { v4 as uuidv4 } from 'uuid'; // Додано для генерації унікальних ідентифікаторів

export const MainDashboard = () => {
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

  return (
    <div className={css.dashboardBackground}>
      {amountOfBoards > 0 && (
        <div className={css.filterContainer}>
          <h3 className={css.headerText}>Project office</h3>
          <button onClick={handleOpenFilter} className={css.filter}>
            <svg className={css.iconFilter} width={16} height={16}>
              <use href={`${sprite}#icon-filter`} />
            </svg>
            <p className={css.filterText}>Filters</p>
          </button>
        </div>
      )}
      {amountOfBoards > 0 ? (
        <div className={css.dashboardContainer}>
          <div className={css.columnsWrapper}>
            <div className={css.columnsContainer}>
              {columns
                .filter(
                  column =>
                    filterPriority === 'all' ||
                    column.cards.some(
                      card => card.labelColor === filterPriority
                    )
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
      ) : (
        <div className={css.noProjectContainer}>
          <p className={css.noProjectNotify}>
            Before starting your project, it is essential{' '}
            <button className={css.button} onClick={() => setAmountOfBoards(1)}>
              to create a board
            </button>{' '}
            to visualize and track all the necessary tasks and milestones. This
            board serves as a powerful tool to organize the workflow and ensure
            effective collaboration among team members.
          </p>
        </div>
      )}
      {showAddColumnModal && <AddColumnModal onClose={handleCloseAdd} />}
      {showFilter && (
        <Filters onClose={handleCloseFilter} applyFilter={applyFilter} />
      )}{' '}
      {/* Додано функцію фільтру */}
    </div>
  );
};
