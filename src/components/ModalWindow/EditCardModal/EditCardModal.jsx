import React, { useState, forwardRef } from 'react';
import styles from './EditCardModal.module.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.css';
import { format, isToday, isTomorrow, isYesterday } from 'date-fns';
import { ModalContainer } from "../Shared/ModalContainer/ModalContainer"
import { ModalButton } from "../Shared/ModalButton/ModalButton"

export const EditCardModal = ({
        title = "Current title",
        description = "Current descroption can be changed and saved with this Modal",
        labelColor = 'blue',
        deadline = new Date(),
        onClose }) =>
    {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newLabelColor, setNewLabelColor] = useState(labelColor);
    const [newDeadline, setNewDeadline] = useState(deadline);

    const handleSubmit = () => {
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
                <div className={styles.labelContainer}>
                    <span className={styles.labelTitle}>Label color</span>
                    <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value="blue"
                                checked={newLabelColor === 'blue'}
                                onChange={() => setNewLabelColor('blue')}
                                className={styles.radioInput}
                            />
                            <span className={`${styles.customRadio} ${styles.blueLabel} ${newLabelColor === 'blue' ? styles.selected : ''}`}></span>
                        </label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value="pink"
                                checked={newLabelColor === 'pink'}
                                onChange={() => setNewLabelColor('pink')}
                                className={styles.radioInput}
                            />
                            <span className={`${styles.customRadio} ${styles.pinkLabel} ${newLabelColor === 'pink' ? styles.selected : ''}`}></span>
                        </label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value="green"
                                checked={newLabelColor === 'green'}
                                onChange={() => setNewLabelColor('green')}
                                className={styles.radioInput}
                            />
                            <span className={`${styles.customRadio} ${styles.greenLabel} ${newLabelColor === 'green' ? styles.selected : ''}`}></span>
                        </label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value="black"
                                checked={newLabelColor === 'black'}
                                onChange={() => setNewLabelColor('black')}
                                className={styles.radioInput}
                            />
                            <span className={`${styles.customRadio} ${styles.blackLabel} ${newLabelColor === 'black' ? styles.selected : ''}`}></span>
                        </label>
                    </div>
                </div>
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