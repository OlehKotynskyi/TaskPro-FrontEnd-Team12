import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.css';
import { format, isToday, isTomorrow, isYesterday } from 'date-fns';
import styles from './Calendar.module.css';
import sprite from '../../../images/sprite.svg';

export const Calendar = ({ deadline, setDeadline }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const CustomInput = forwardRef(({ value: formattedDate, onClick }, ref) => {
    const displayValue = getDisplayValue(deadline, formattedDate);

    return (
      <button
        type='button'
        className={`${styles.customInput} ${isCalendarOpen ? styles.active : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          onClick(e);
        }}
        ref={ref}
      >
        {displayValue}
        <div className={`${styles.arrowIcon} ${isCalendarOpen ? styles.open : ''}`}>
          <svg className={styles.arrow}>
            <use href={`${sprite}#icon-chevron-down`} />
          </svg>
        </div>
        {/* <span className={styles.calendarIcon} /> */}
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

  const isPastDate = (date) => {
    const today = new Date();
    return date < today.setHours(0, 0, 0, 0);
  };

  return (
      <DatePicker
        selected={deadline}
        dateFormat="MMMM d"
        onChange={(date) => setDeadline(date)}
        customInput={<CustomInput />}
        minDate={new Date()}
        dayClassName={(date) =>
          isPastDate(date) ? 'react-datepicker__day--disabled' : undefined
        }
        onCalendarOpen={() => setIsCalendarOpen(true)}
        onCalendarClose={() => setIsCalendarOpen(false)}
      />
  );
};
