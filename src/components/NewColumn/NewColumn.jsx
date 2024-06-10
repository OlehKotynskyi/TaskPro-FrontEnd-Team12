import { useState } from 'react';
import css from './NewColumn.module.css'
import { EditColumnModal } from 'components/ModalWindow/EditColumnModal/EditColumnModal';
import { ColumnCard } from 'components/ColumnCard/ColumnCard';
import { ModalButton } from 'components/ModalWindow/Shared/ModalButton/ModalButton';
import { AddCardModal } from 'components/ModalWindow/AddCardModal/AddCardModal';

export const NewColumn = ({ onClose }) => {

    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddCardModal, setShowAddCardModal] = useState(false);

    const handleOpenEdit = () => {
        setShowEditModal(true);
    };

    const handleCloseEdit = () => {
        setShowEditModal(false);
    };

    const handleAddCardModalOpen = () => setShowAddCardModal(true);
    const handleAddCardModalClose = () => setShowAddCardModal(false);

    return (
        <div className={css.columnContainer}>
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
            
            <ColumnCard />
            <ModalButton icon="plus" onClick={handleAddCardModalOpen}>Add another card</ModalButton>
            {showAddCardModal && <AddCardModal onClose={handleAddCardModalClose}></AddCardModal>}
            {showEditModal && <EditColumnModal onClose={handleCloseEdit} />}
        </div>
    )
}