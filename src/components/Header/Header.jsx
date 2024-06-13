import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './Header.module.css';
import sprite from '../../images/sprite.svg';
import { useOutsideClick } from 'hooks/useOutsideClick';
import UserEditModal from '../ModalWindow/UserEditModal/UserEditModal';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/authSelectors';
import { userCurrent } from '../../redux/auth/authOperations';

export const Header = ({ onVisible }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isShowTheme, setIsShowTheme] = useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useOutsideClick(ref, () => setIsShowTheme(false));

  useEffect(() => {
    if (isLoggedIn && !isRefreshing) {
      dispatch(userCurrent());
    }
  }, [dispatch, isLoggedIn, isRefreshing]);

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

  const onOpenSidebar = () => {
    onVisible(true);
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
          <p className={css.text}>{user ? user.name : 'Loading...'}</p>
          <div className={css.avatarWrap} onClick={handleModalOpen}>
            {user?.avatarURL ? (
              <img src={user.avatarURL} alt="avatar" className={css.avatar} />
            ) : (
              <svg className={css.avatar}>
                <use href={`${sprite}#icon-user`} />
              </svg>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && <UserEditModal onClose={handleModalClose} />}
    </div>
  );
};
