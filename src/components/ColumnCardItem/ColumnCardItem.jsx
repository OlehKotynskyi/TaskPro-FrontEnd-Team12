import css from './ColumnCardItem.module.css';
import sprite from '../../images/sprite.svg';

export const ColumnCardItem = ({
  index,
  handleOpenEdit,
  handleOpenProgress,
  handleDeleteCard,
  card,
}) => {
  const handleDelete = () => handleDeleteCard(index);

  return (
    <li className={css.cardContainer}>
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
              style={{ backgroundColor: card.labelColor }}
            ></p>
            <p className={css.infoText}>Low</p>
          </div>
        </div>
        <div className={css.deadlineContainer}>
          <p className={css.infoTitle}>Deadline</p>
          <div>
            <p className={css.infoText}>{card.deadline.toLocaleDateString()}</p>
          </div>
        </div>
        <div className={css.infoIcons}>
          <svg className={css.icon} width="16px" height="16px">
            <use href={`${sprite}#icon-bell`}></use>
          </svg>
        </div>
        <div className={css.infoIcons}>
          <button onClick={handleOpenProgress} className={css.headerSvgButton}>
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
    </li>
  );
};
