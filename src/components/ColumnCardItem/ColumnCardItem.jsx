import { useState } from 'react';
import css from './ColumnCardItem.module.css';
import sprite from '../../images/sprite.svg';
import Dropdown from '../Dropdown/Dropdown';

export const ColumnCardItem = ({
  handleOpenEdit,
  handleDeleteCard,
  card,
  columns,
  currentColumnId,
  moveCardToColumn,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDelete = () => handleDeleteCard(card._id);

  const priorityColor = () => {
    switch (card.priority) {
      case 'High':
        return 'var(--priority-high)';
      case 'Medium':
        return 'var(--priority-medium)';
      case 'Low':
        return 'var(--priority-low)';
      default:
        return 'var(--priority-without)';
    }
  };

  const toDeadLine = date => {
    const deadline = Date.parse(new Date(date));
    const daysLeft = Math.ceil((deadline - Date.now()) / (1000 * 3600 * 24));
    return daysLeft;
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleCloseDropdown = () => setShowDropdown(false);

  return (
    <li
      className={css.cardContainer}
      style={{ '--priority-color': priorityColor() }}
    >
      <div className={css.contentContainer}>
        <h4 className={css.contentTitle}>{card.title}</h4>
        <p className={css.contentText}>{card.description}</p>
      </div>
      <div className={css.infoContainer}>
        <div className={css.priority}>
          <p className={css.infoTitle}>Priority</p>
          <div className={css.container}>
            <p
              className={css.infoColor}
              style={{ backgroundColor: priorityColor() }}
            ></p>
            <p className={css.infoText}>{card.priority}</p>
          </div>
        </div>
        <div className={css.deadlineContainer}>
          <p className={css.infoTitle}>Deadline</p>
          <div>
            <p className={css.infoText}>
              {new Date(card.deadline).toLocaleDateString()}
            </p>
          </div>
        </div>
        {toDeadLine(card.deadline) <= 1 && (
          <div className={css.infoIcons}>
            <svg className={css.icon} width="16px" height="16px">
              <use href={`${sprite}#icon-bell`}></use>
            </svg>
          </div>
        )}
        <div className={css.infoIcons}>
          <button onClick={toggleDropdown} className={css.headerSvgButton}>
            <svg className={css.icon} width="16px" height="16px">
              <use href={`${sprite}#icon-arrow-circle-broken`} />
            </svg>
          </button>
          <button className={css.headerSvgButton} onClick={handleOpenEdit}>
            <svg className={css.icon} width="16px" height="16px">
              <use href={`${sprite}#icon-pencil`} />
            </svg>
          </button>
          <button className={css.headerSvgButton} onClick={handleDelete}>
            <svg className={css.icon} width="16px" height="16px">
              <use href={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      </div>
      {showDropdown && (
        <Dropdown
          columns={columns}
          currentColumnId={currentColumnId} 
          moveCardToColumn={moveCardToColumn}
          onClose={handleCloseDropdown} 
        />
      )}
    </li>
  );
};
