import React, { useState } from 'react';
import styles from './Header.module.css';
import { ReactComponent as ArrowIcon } from '../../images/icons/chevron-down.svg';
import { ReactComponent as UserIcon } from '../../images/icons/user.svg';
import { ReactComponent as CrossIcon } from '../../images/icons/x-close.svg';
import { ReactComponent as BurgerMenu } from '../../images/icons/menu.svg';

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isShowTheme, setIsShowTheme] = useState(false);

  const toggleOpenTheme = () => setIsShowTheme(!isShowTheme);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const onSelectTheme = value => {
    console.log(value);
    setIsShowTheme(false);
  };

  const handleEditProfile = e => {
    e.preventDefault();
    // Handle edit profile
    handleModalClose();
  };

  return (
    <div className={styles.headerBox}>
      <button className={styles.burgerMenu}>
        <BurgerMenu />
      </button>

      <div className={styles.rightBlock}>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn} onClick={toggleOpenTheme}>
            Theme
            <div className={styles.arrowIcon}>
              <ArrowIcon />
            </div>
          </button>
          {isShowTheme && (
            <div className={styles.dropdownContent}>
              <button
                className={styles.themeBtn}
                onClick={() => onSelectTheme('light')}
              >
                Light
              </button>
              <button
                className={styles.themeBtn}
                onClick={() => onSelectTheme('dark')}
              >
                Dark
              </button>
              <button
                className={styles.themeBtn}
                onClick={() => onSelectTheme('violet')}
              >
                Violet
              </button>
            </div>
          )}
        </div>
        <div className={styles.imgBtn}>
          <p className={styles.text}>Name</p>
          <div className={styles.avatarWrap} onClick={handleModalOpen}>
            <UserIcon width={32} height={32} />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.modalWrap}>
          <div className={styles.modalContainer}>
            <button className={styles.closeBtn} onClick={handleModalClose}>
              <CrossIcon />
            </button>
            <div className={styles.titleBox}>
              <h2 className={styles.title}>Edit profil</h2>
            </div>
            <form className={styles.form} onSubmit={handleEditProfile}>
              <div className={styles.avatarBox}>
                <UserIcon width="68px" height="68px" />
                <button className={styles.avatarBtn}>+</button>
              </div>
              <label>
                <input
                  className={styles.input}
                  type="text"
                  value="name"
                  required
                />
              </label>
              <label>
                <input
                  className={styles.input}
                  type="email"
                  value="email"
                  required
                />
              </label>
              <label>
                <input
                  className={styles.input}
                  type="password"
                  value="password"
                  required
                />
              </label>
              {/* Add photo upload here */}
              <button className={styles.sendBtn} type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
