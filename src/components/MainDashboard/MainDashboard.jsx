import { useState } from "react";
import '../../styles/base.css';  
import css from './MainDashboard.module.css';
import { Link } from "react-router-dom";
import { AddColumnModal } from "components/ModalWindow/AddColumnModal/AddColumnModal";
import { Filters } from "components/ModalWindow/Filters/Filters";
import { NewColumn } from "components/NewColumn/NewColumn";

// import plus from '../../images/sprite.svg'
import { DashboardButton } from "components/DashboardButton/DashboardButton";

export const MainDashboard = () => {
    const [amountOfBoards,] = useState(1);
    const [showAddColumnModal, setShowAddColumnModal] = useState(false);
    const [showFilter, setShowFilter] = useState(false); 

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
                <button onClick={handleOpenFilter} className={css.filter}>
                    <svg width={12} height={12}>
                        <use></use>
                    </svg>
                    <p className={css.filterText}>Filters</p>
                </button>
            </div>

            {amountOfBoards > 0 ? 
                <div className={css.dashboardContainer}>
                    <h3 className={css.headerText}>Project office</h3> 
                    
                </div>
                : 
                <div className={css.noProjectContainer}>
                    <p className={css.noProjectNotify}>
                        Before starting your project, it is essential
                        <Link to="#"> to create a board</Link> to visualize and track all the necessary tasks and milestones.
                        This board serves as a powerful tool to organize the workflow and ensure effective
                        collaboration among team members.
                    </p>
                </div>
            }
            {showAddColumnModal && <AddColumnModal onClose={handleCloseAdd} />}
            {showFilter && <Filters onClose={handleCloseFilter} />}
            <div className={css.columnsContainer}>
                <NewColumn />
                <NewColumn />
                <div style={{ width: 320 }}>
                    <DashboardButton styleType="neutral" icon="plus" onClick={handleOpenAdd}>Add another column</DashboardButton>
                </div>
            </div>
        </div>
    );
};