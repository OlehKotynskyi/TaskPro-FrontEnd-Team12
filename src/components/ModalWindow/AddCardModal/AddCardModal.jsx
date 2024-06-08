import React, { useState } from 'react';
import styles from './AddCardModal.module.css';
import { ModalContainer } from "../Shared/ModalContainer/ModalContainer"
import { ModalButton } from "../Shared/ModalButton/ModalButton"


export const AddCardModal = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [labelColor, setLabelColor] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = () => {
        console.log({ title, description, labelColor, deadline });
        onClose();
    };

    return (
        <ModalContainer modalTitle="Add card" onClose={onClose}>

            {/* form */}
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
                    <input
                        className={styles.deadlineInput}
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                </div>
                <ModalButton onClick={handleSubmit}>Add</ModalButton>
            </div>
        </ModalContainer>
    );
};