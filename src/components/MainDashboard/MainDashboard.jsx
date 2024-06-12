import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AddColumnModal } from 'components/ModalWindow/AddColumnModal/AddColumnModal';
import { Filters } from 'components/ModalWindow/Filters/Filters';
import { NewColumn } from 'components/NewColumn/NewColumn';

import '../../styles/base.css';
import css from './MainDashboard.module.css';
import sprite from '../../images/sprite.svg';

import { DashboardButton } from 'components/DashboardButton/DashboardButton';

export const MainDashboard = () => {
  const [amountOfBoards] = useState(1);
  const [showAddColumnModal, setShowAddColumnModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showRightSpacer, setShowRightSpacer] = useState(false);

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

  const handleCloseAdd = () => {
    setShowAddColumnModal(false);
  };

  const handleOpenFilter = () => {
    setShowFilter(true);
  };

  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  return (
    <div className={css.dashboardBackground}>
      <div className={css.filterContainer}>
        <h3 className={css.headerText}>Project office</h3>
        <button onClick={handleOpenFilter} className={css.filter}>
          <svg className={css.iconFilter} width={16} height={16}>
            <use href={`${sprite}#icon-filter`} />
          </svg>

          <p className={css.filterText}>Filters</p>
        </button>
      </div>

      {amountOfBoards > 0 ? (
        <div className={css.dashboardContainer}>
          <div className={css.columnsWrapper}>
            <div className={css.columnsContainer}>
              <NewColumn />
              <NewColumn />
              <NewColumn />
              <NewColumn />
              <NewColumn />
              <NewColumn />
              <DashboardButton
                styleType="neutral"
                icon="plus"
                onClick={handleOpenAdd}
                className={css.addColumnButton}
              >
                Add another column
              </DashboardButton>
              {showRightSpacer && <div className={css.rightSpacer}></div>}
            </div>
          </div>
        </div>
      ) : (
        <div className={css.noProjectContainer}>
          <p className={css.noProjectNotify}>
            Before starting your project, it is essential
            <Link to="#"> to create a board</Link> to visualize and track all
            the necessary tasks and milestones. This board serves as a powerful
            tool to organize the workflow and ensure effective collaboration
            among team members.
          </p>
        </div>
      )}

      {showAddColumnModal && <AddColumnModal onClose={handleCloseAdd} />}
      {showFilter && <Filters onClose={handleCloseFilter} />}
    </div>
  );
};
