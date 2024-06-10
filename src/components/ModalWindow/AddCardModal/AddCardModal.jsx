import React, { useState, forwardRef } from 'react';
import styles from './AddCardModal.module.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './customDatePicker.css';
import { format, isToday, isTomorrow, isYesterday } from 'date-fns';
import { ModalContainer } from "../Shared/ModalContainer/ModalContainer"
import { ModalButton } from "../Shared/ModalButton/ModalButton"

export const AddCardModal = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [labelColor, setLabelColor] = useState('');
    const [deadline, setDeadline] = useState(new Date());

    const handleSubmit = () => {
        console.log({ title, description, labelColor, deadline });
        onClose();
    };

    const CustomInput = forwardRef(({ value: formattedDate, onClick }, ref) => {
        const today = new Date();
        const displayValue = getDisplayValue(deadline, formattedDate, today);

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
        <ModalContainer modalTitle="Add card" onClose={onClose}>
            <div className={styles.form}>
                <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className={styles.textareaInput}
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <div className={styles.labelContainer}>
                    <span className={styles.labelTitle}>Label color</span>
                    <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value="blue"
                                checked={labelColor === 'blue'}
                                onChange={() => setLabelColor('blue')}
                                className={styles.radioInput}
                            />
                            <span className={`${styles.customRadio} ${styles.blueLabel} ${labelColor === 'blue' ? styles.selected : ''}`}></span>
                        </label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value="pink"
                                checked={labelColor === 'pink'}
                                onChange={() => setLabelColor('pink')}
                                className={styles.radioInput}
                            />
                            <span className={`${styles.customRadio} ${styles.pinkLabel} ${labelColor === 'pink' ? styles.selected : ''}`}></span>
                        </label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value="green"
                                checked={labelColor === 'green'}
                                onChange={() => setLabelColor('green')}
                                className={styles.radioInput}
                            />
                            <span className={`${styles.customRadio} ${styles.greenLabel} ${labelColor === 'green' ? styles.selected : ''}`}></span>
                        </label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                value="black"
                                checked={labelColor === 'black'}
                                onChange={() => setLabelColor('black')}
                                className={styles.radioInput}
                            />
                            <span className={`${styles.customRadio} ${styles.blackLabel} ${labelColor === 'black' ? styles.selected : ''}`}></span>
                        </label>
                    </div>
                </div>
                <div className={styles.deadlineContainer}>
                    <span className={styles.labelTitle}>Deadline</span>
                    <DatePicker
                        selected={deadline}
                        dateFormat="MMMM d"
                        onChange={(date) => setDeadline(date)}
                        customInput={<CustomInput />}
                    />
                </div>
                <ModalButton icon="plus" onClick={handleSubmit}>Add</ModalButton>
            </div>
        </ModalContainer>
    );
};