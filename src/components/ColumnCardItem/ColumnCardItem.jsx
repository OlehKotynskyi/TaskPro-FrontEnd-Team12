import { useState } from 'react';
import css from './ColumnCardItem.module.css';
import sprite from '../../images/sprite.svg';
import Dropdown from '../Dropdown/Dropdown'; 

export const ColumnCardItem = ({
  index,
  handleOpenEdit,
  handleDeleteCard,
  card,
  columns,
  currentColumn,
  moveCardToColumn,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDelete = () => handleDeleteCard(index);

  const priorityColor = () => {
    switch (card.labelColor) {
      case 'high':
        return 'var(--priority-high)';
      case 'medium':
        return 'var(--priority-medium)';
      case 'low':
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
            <p className={css.infoText}>{card.labelColor}</p>
          </div>
        </div>
        <div className={css.deadlineContainer}>
          <p className={css.infoTitle}>Deadline</p>
          <div>
            <p className={css.infoText}>{new Date(card.deadline).toLocaleDateString()}</p>
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
              <use href={`${sprite}#icon-arrow-circle-broken`}></use>
            </svg>
          </button>
          <button className={css.headerSvgButton} onClick={handleOpenEdit}>
            <svg className={css.icon} width="16px" height="16px">
              <use href={`${sprite}#icon-pencil`}></use>
            </svg>
          </button>
          <button className={css.headerSvgButton} onClick={handleDelete}>
            <svg className={css.icon} width="16px" height="16px">
              <use href={`${sprite}#icon-trash`}></use>
            </svg>
          </button>
        </div>
      </div>
      {showDropdown && (
        <Dropdown
          columns={columns}
          currentColumn={currentColumn}
          moveCardToColumn={moveCardToColumn}
        />
      )}
    </li>
  );
};