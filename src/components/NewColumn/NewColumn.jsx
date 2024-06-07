import { useState } from 'react';
import css from './NewColumn.module.css'
import { EditColumnModal } from 'components/ModalWindow/EditColumnModal/EditColumnModal';

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
            <ul className={css.cardsList}>
                <li className={css.cardContainer}>
                    <div className={css.contentContainer}>
                        <h4 className={css.contentTitle}>The Watch Spot Design</h4>
                        <p className={css.contentText}>Create a visually stunning
                            and eye-catching watch dial
                            design that embodies our brand's
                            essence of sleek aesthetics and
                            modern elegance. Your design should
                            be unique, innovative, and reflective
                            of the latest trends in watch design.</p>
                    </div>
                    <div className={css.infoContainer}>
                        
                        <div className={css.priority}>
                            <p className={css.infoTitle}>Priority</p>
                            <div className={css.container}>
                            <svg width="12px" height="12px">
                                <use></use>
                            </svg>
                            <p className={css.infoText}>Low</p>
                            </div>
                        </div>
                        <div className={css.deadlineContainer}>
                            <p className={css.infoTitle}>Deadline</p>
                            <div>
                                <p className={css.infoText}>12/05/2023</p>
                            </div>
                        </div>
                        <div className={css.infoIcons}>
                            <button className={css.headerSvgButton}>
                                <svg width="16px" height="16px">
                                    <use></use>
                                </svg>
                            </button>
                            <button className={css.headerSvgButton}>
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
                    
                </li>
            </ul>

            {showEditModal && <EditColumnModal onClose={handleCloseEdit} />}
        </div>
    )
}