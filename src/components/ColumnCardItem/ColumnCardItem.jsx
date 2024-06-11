import React from 'react';
import classNames from 'classnames';
import css from './ColumnCardItem.module.css';
import sprite from '../../images/sprite.svg';

export const ColumnCardItem = ({ provided, isDragging, showProgressModal, handleOpenProgress, content }) => {
  const cardClass = classNames(css.cardContainer, css.contentText, {
    [css.isDragging]: isDragging,
  });

  return (
    <li
      className={cardClass}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      <div className={css.contentContainer}>
        <h4 className={css.contentTitle}>{content}</h4>
        <p className={css.contentText}>
          Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.
        </p>
      </div>
      <div className={css.infoContainer}>
        <div className={css.priority}>
          <p className={css.infoTitle}>Priority</p>
          <div className={css.container}>
            <svg width="12px" height="12px">
              <use href={`${sprite}#icon-priority`} />
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
          <button onClick={handleOpenProgress} className={css.headerSvgButton}>
            <svg width="16px" height="16px">
              <use href={`${sprite}#icon-arrow-circle-broken`} />
            </svg>
          </button>
          <button className={css.headerSvgButton}>
            <svg width="16px" height="16px">
              <use href={`${sprite}#icon-pencil`} />
            </svg>
          </button>
          <button className={css.headerSvgButton}>
            <svg width="16px" height="16px">
              <use href={`${sprite}#icon-trash`} />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};
