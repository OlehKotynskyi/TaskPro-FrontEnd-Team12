import React, { useState, forwardRef } from 'react';
import styles from './EditCardModal.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.css';
import { format, isToday, isTomorrow, isYesterday } from 'date-fns';
import { ModalContainer } from '../Shared/ModalContainer/ModalContainer';
import { Button } from '../../Shared/Button/Button';

export const EditCardModal = ({ card, onClose }) => {
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const [labelColor, setLabelColor] = useState(card.labelColor);
  const [deadline, setDeadline] = useState(new Date(card.deadline));

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      const updatedCard = { title, description, labelColor, deadline };
      onClose(updatedCard);
    } else {
      alert('Please enter a title for the card.');
    }
  };

  const CustomInput = forwardRef(({ value: formattedDate, onClick }, ref) => {
    const displayValue = getDisplayValue(deadline, formattedDate);

    return (
      <button className={styles.customInput} onClick={onClick} ref={ref}>
        {displayValue}
        <span className={styles.calendarIcon} />
      </button>
    );
  });

  const getDisplayValue = (date, formattedDate) => {
    if (isToday(date)) {
      return `Today, ${formattedDate}`;
    } else if (isTomorrow(date)) {
      return `Tomorrow, ${formattedDate}`;
    } else if (isYesterday(date)) {
      return `Yesterday, ${formattedDate}`;
    } else {
      const dayOfWeek = format(date, 'EEEE');
      return `${dayOfWeek}, ${formattedDate}`;
    }
  };

  const isPastDate = date => {
    const today = new Date();
    return date < today.setHours(0, 0, 0, 0);
  };

  return (
    <ModalContainer modalTitle="Edit card" onClose={() => onClose(null)}>
      <div className={styles.form}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className={styles.textareaInput}
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>

        <div className={styles.labelContainer}>
          <span className={styles.labelTitle}>Label color</span>
          <div className={styles.radioGroup}>
            {['low', 'medium', 'high', 'without'].map(color => (
              <label className={styles.radioLabel} key={color}>
                <input
                  type="radio"
                  value={color}
                  checked={labelColor === color}
                  onChange={() => setLabelColor(color)}
                  className={styles.radioInput}
                />
                <span
                  className={`${styles.customRadio} ${
                    styles[`${color}Label`]
                  } ${labelColor === color ? styles.selected : ''}`}
                ></span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.deadlineContainer}>
          <span className={styles.labelTitle}>Deadline</span>
          <DatePicker
            selected={deadline}
            dateFormat="MMMM d"
            onChange={date => setDeadline(date)}
            customInput={<CustomInput />}
            minDate={new Date()}
            dayClassName={date =>
              isPastDate(date) ? 'react-datepicker__day--disabled' : undefined
            }
          />
        </div>
        <Button icon="plus" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </ModalContainer>
  );
};
