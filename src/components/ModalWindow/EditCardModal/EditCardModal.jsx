import React, { useState, forwardRef } from 'react';
import styles from './EditCardModal.module.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.css';
import { format, isToday, isTomorrow, isYesterday } from 'date-fns';
import { ModalContainer } from "../Shared/ModalContainer/ModalContainer"
import { ModalButton } from "../Shared/ModalButton/ModalButton"

const tempData = {
        title: "Current title",
        description: "Current description can be changed and saved with this Modal",
        labelColor: 'blue',
        deadline: new Date(),
    }

export const EditCardModal = ({data = tempData, onClose }) => {
    const [newTitle, setNewTitle] = useState(data.title);
    const [newDescription, setNewDescription] = useState(data.description);
    const [newLabelColor, setNewLabelColor] = useState(data.labelColor);
    const [newDeadline, setNewDeadline] = useState(data.deadline);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ newTitle, newDescription, newLabelColor, newDeadline });
        onClose();
    };

    const CustomInput = forwardRef(({ value: formattedDate, onClick }, ref) => {
        const today = new Date();
        const displayValue = getDisplayValue(newDeadline, formattedDate, today);

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

    return (
        <ModalContainer modalTitle="Edit card" onClose={onClose}>
            <div className={styles.form}>
                <input
                    className={styles.formInput}
                    type="text"
                    placeholder={newTitle}
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <textarea
                    className={styles.textareaInput}
                    placeholder="Description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                ></textarea>

                {/* radio buttons */}
                <div className={styles.labelContainer}>
                    <span className={styles.labelTitle}>Label color</span>
                        <div className={styles.radioGroup}>
                            {['blue', 'pink', 'green', 'black'].map((color) => (
                                <label className={styles.radioLabel} key={color}>
                                    <input
                                        type="radio"
                                        value={color}
                                        checked={newLabelColor === color}
                                        onChange={() => setNewLabelColor(color)}
                                        className={styles.radioInput}
                                    />
                                    <span className={`${styles.customRadio} ${styles[`${color}Label`]} ${newLabelColor === color ? styles.selected : ''}`}></span>
                                </label>
                            ))}
                        </div>
                </div> 

                {/* calendar */}          
                <div className={styles.deadlineContainer}>
                    <span className={styles.labelTitle}>Deadline</span>
                    <DatePicker
                        selected={newDeadline}
                        dateFormat="MMMM d"
                        onChange={(date) => setNewDeadline(date)}
                        customInput={<CustomInput />}
                    />
                </div>

                <ModalButton icon="plus" onClick={handleSubmit}>Add</ModalButton>
            </div>
        </ModalContainer>
    );
};