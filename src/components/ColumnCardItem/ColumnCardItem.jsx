import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import css from './ColumnCardItem.module.css';
import sprite from '../../images/sprite.svg';
import Dropdown from '../Dropdown/Dropdown';
import { reduceTextToFit } from '../../utils/reduceTextToFit.js';

export const ColumnCardItem = ({
  handleOpenEdit,
  handleDeleteCard,
  card,
  columns,
  currentColumnId,
  moveCardToColumn,
  index,
  isDragging,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isTitleTooltipVisible, setIsTitleTooltipVisible] = useState(false);
  const [isDescriptionTooltipVisible, setIsDescriptionTooltipVisible] =
    useState(false);
  const [disableAnimation, setDisableAnimation] = useState(false);
  const isCardDragged = useRef(false);

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

  const maxWidthTitle = 250;
  const fontTitle = '500 14px Poppins, sans-serif';
  const reducedTitle = reduceTextToFit(card.title, maxWidthTitle, fontTitle);
  const isTitleReduced = reducedTitle < card.title ? true : false;

  const maxWidthText = 600;
  const fontText = '400 12px Poppins, sans-serif';
  const reducedText = reduceTextToFit(card.description, maxWidthText, fontText);
  const isTextReduced = reducedText < card.description ? true : false;

  useEffect(() => {
    if (isDragging) {
      isCardDragged.current = true;
    }
  }, [isDragging]);

  useEffect(() => {
    if (isCardDragged.current) {
      setDisableAnimation(true);
    }
  }, [card]);

  return (
    <motion.li
      className={css.cardContainer}
      style={{ '--priority-color': priorityColor() }}
      initial={!disableAnimation ? { opacity: 0, y: 60 } : false}
      animate={!disableAnimation ? { opacity: 1, y: 0 } : {}}
      transition={
        !disableAnimation ? { duration: 0.5, delay: index * 0.2 } : {}
      }
    >
      <div className={css.contentContainer}>
        <motion.h4
          className={css.contentTitle}
          onMouseEnter={() => setIsTitleTooltipVisible(true)}
          onMouseLeave={() => setIsTitleTooltipVisible(false)}
        >
          {reducedTitle}
        </motion.h4>
        {isTitleTooltipVisible && isTitleReduced && (
          <motion.div
            className={css.tooltip}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {card.title}
          </motion.div>
        )}
        <motion.p
          className={css.contentText}
          onMouseEnter={() => setIsDescriptionTooltipVisible(true)}
          onMouseLeave={() => setIsDescriptionTooltipVisible(false)}
        >
          {reducedText}
        </motion.p>
        {isDescriptionTooltipVisible && isTextReduced && (
          <motion.div
            className={css.tooltip}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {card.description}
          </motion.div>
        )}
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
            <svg
              className={`${css.icon} ${css.bellIcon}`}
              width="16px"
              height="16px"
            >
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
    </motion.li>
  );
};
