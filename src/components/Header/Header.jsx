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
      <button className={styles.burgerMenu}>sd</button>
      <div className={styles.rightBlock}>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Dropdown</button>
          <div className={styles.dropdownContent}>
            <button className={styles.themeBtn}>light</button>
            <button className={styles.themeBtn}>dark</button>
            <button className={styles.themeBtn}>violet</button>
          </div>
        </div>
        <div className={styles.imgBtn}>
          <p className={styles.text}>name</p>
          <svg onClick={handleModalOpen} className={styles.svg}></svg>
        </div>
      </div>
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
