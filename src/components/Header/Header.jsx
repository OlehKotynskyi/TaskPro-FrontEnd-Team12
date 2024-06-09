import React, { useRef, useState } from 'react';
import css from './Header.module.css';
import sprite from '../../images/sprite.svg';
import { useOutsideClick } from 'hooks/useOutsideClick';

export const Header = ({ onVisible }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isShowTheme, setIsShowTheme] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => setIsShowTheme(false));

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

  const onOpenSidebar = () => {
    onVisible(true);
  };

  const hendelWrapClick = e => {
    if (e.target === e.currentTarget) {
      setModalOpen(false);
    }
  };

  return (
    <div className={css.headerBox}>
      <button className={css.burgerMenu} onClick={onOpenSidebar}>
        <svg className={css.menu}>
          <use href={`${sprite}#icon-menu`} />
        </svg>
      </button>

      <div className={css.rightBlock}>
        <div className={css.dropdown} ref={ref}>
          <button className={css.dropbtn} onClick={toggleOpenTheme}>
            Theme
            <div className={`${css.arrowIcon} ${isShowTheme ? css.open : ''}`}>
              <svg className={css.arrow}>
                <use href={`${sprite}#icon-chevron-down`} />
              </svg>
            </div>
          </button>
          <div
            className={`${css.dropdownContent} ${isShowTheme ? css.show : ''}`}
          >
            <button
              className={css.themeBtn}
              onClick={() => onSelectTheme('light')}
            >
              Light
            </button>
            <button
              className={css.themeBtn}
              onClick={() => onSelectTheme('dark')}
            >
              Dark
            </button>
            <button
              className={css.themeBtn}
              onClick={() => onSelectTheme('violet')}
            >
              Violet
            </button>
          </div>
        </div>
        <div className={css.imgBtn}>
          <p className={css.text}>Name</p>
          <div className={css.avatarWrap} onClick={handleModalOpen}>
            <svg className={css.avatar}>
              <use href={`${sprite}#icon-user`} />
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className={css.modalWrap} onClick={hendelWrapClick}>
          <div className={css.modalContainer}>
            <button className={css.closeBtn} onClick={handleModalClose}>
              <svg>
                <use href={`${sprite}#icon-x-close`} />
              </svg>
            </button>
            <div className={css.titleBox}>
              <h2 className={css.title}>Edit profile</h2>
            </div>
            <form className={css.form} onSubmit={handleEditProfile}>
              <div className={css.avatarBox}>
                <svg>
                  <use href={`${sprite}#icon-user`} />
                </svg>
                <button className={css.avatarBtn}>+</button>
              </div>
              <label>
                <input
                  className={css.input}
                  type="text"
                  value="name"
                  required
                />
              </label>
              <label>
                <input
                  className={css.input}
                  type="email"
                  value="email"
                  required
                />
              </label>
              <label>
                <input
                  className={css.input}
                  type="password"
                  value="password"
                  required
                />
              </label>
              {/* Add photo upload here */}
              <button className={css.sendBtn} type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
