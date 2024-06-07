import { useState } from 'react';
import css from './NewColumn.module.css'
import { EditColumnModal } from 'components/ModalWindow/EditColumnModal/EditColumnModal';
import { ColumnCard } from 'components/ColumnCard/ColumnCard';

export const NewColumn = ({ onClose }) => {

    const [showEditModal, setShowEditModal] = useState(false);

    const handleOpenEdit = () => {
        setShowEditModal(true);
    };

    const handleCloseEdit = () => {
        setShowEditModal(false);
    };

    return (
        <div>
            <div className={css.columnHeader}>
                <h4 className={css.columnTitle}>To Do</h4>
                <div className={css.headerSvgContainer}>
                    <button onClick={handleOpenEdit} className={css.headerSvgButton}>
                        <svg width="16px" height="16px">
                            <use></use>
                        </svg>
                    </button>
                    <button className={css.headerSvgButton}>
                        <svg width="16px" height="16px">
                            <use></use>
                        </svg>
                    </button>
                </div>
            </div>
            
            <ColumnCard/>

            {showEditModal && <EditColumnModal onClose={handleCloseEdit} />}
        </div>
    )
}