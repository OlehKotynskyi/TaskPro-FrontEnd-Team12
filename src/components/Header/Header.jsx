import React, { useState } from 'react';
import styles from './Header.module.css';
export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleEditProfile = e => {
    e.preventDefault();
    // Handle edit profile
    handleModalClose();
  };

  return (
    <div className={styles.headerBox}>
      {/* <button  onClick={handleModalOpen}> */}
      <div className={styles.imgBtn}>
        <p className={styles.text}>name</p>

        <svg onClick={handleModalOpen} className={styles.svg}></svg>
      </div>
      {/* </button> */}
      {isModalOpen && (
        <div className="modal">
          <form onSubmit={handleEditProfile}>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Password:
              <input type="password" name="password" required />
            </label>
            {/* Add photo upload here */}
            <button type="submit">Save</button>
            <button type="button" onClick={handleModalClose}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
