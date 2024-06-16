import { useState } from 'react';
import css from './Sidebar.module.css';
import clsx from 'clsx';
import sprite from '../../images/sprite.svg';
import helpImg2x from '../../images/flower/flower_@2x.png';
import helpImg from '../../images/flower/flower.png';
import { BoardCard } from '../BoardCard/BoardCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/auth/authOperations';

import { BoardModal } from '../ModalWindow/BoardModal/BoardModal';
import { HelpModal } from 'components/ModalWindow/HelpModal/HelpModal';
import { selectBoards } from '../../redux/boards/boardsSlice';

export const Sidebar = ({ visible, onVisible }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boards = useSelector(selectBoards);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenHelp, setModalOpenHelp] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
    onVisible(false);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOpenHelp = () => {
    setModalOpenHelp(true);
    onVisible(false);
  };

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/welcome');
  };

  const handleModalCloseHelp = () => setModalOpenHelp(false);

  const closeSidebar = e => {
    if (e.target === e.currentTarget) onVisible(false);
  };

  return (
    <div
      className={clsx(css.sidebarWrap, { [css.visible]: visible })}
      onClick={closeSidebar}
    >
      <aside className={css.sidebar}>
        <div className={css.logoBox}>
          <svg className={css.logoSvg}>
            <use href={`${sprite}#icon-logo`} />
          </svg>
          <h1 className={css.logoTitle}>Task Pro</h1>
        </div>
        <div className={css.block}>
          <p className={css.createTitle}>My boards</p>
          <div className={css.createBox}>
            <p className={css.createText}>Create a new board</p>
            <button className={css.createBtn} onClick={handleModalOpen}>
              <svg className={css.createSvg}>
                <use href={`${sprite}#icon-plus`} />
              </svg>
            </button>
          </div>
        </div>
        <ul className={css.projects}>
          {boards.map(board => (
            <BoardCard
              key={board._id}
              board={board}
              closeSidebar={() => onVisible(false)}
            />
          ))}
        </ul>

        <div className={css.block}>
          <div className={css.helpBlock}>
            <img
              className={css.img}
              srcSet={helpImg2x}
              src={helpImg}
              alt="Flower"
            ></img>
            <p className={css.helpText}>
              If you need help with <br />
              <a href="http/#" className={css.helpLink}>
                TaskPro&nbsp;
              </a>
              , check out our support resources or reach out to our customer
              support team.
            </p>
            <button className={css.helpBtn} onClick={handleModalOpenHelp}>
              <svg className={css.helpSvg}>
                <use href={`${sprite}#icon-help-circle`} />
              </svg>
              Need help?
            </button>
          </div>
          <button className={css.logOutBtn} onClick={handleLogOut}>
            <svg className={css.logOutSvg}>
              <use href={`${sprite}#icon-login`} />
            </svg>
            Log out
          </button>
        </div>
      </aside>
      {isModalOpen && <BoardModal onClose={handleModalClose} type="create" />}
      {isModalOpenHelp && <HelpModal onClose={handleModalCloseHelp} />}
    </div>
  );
};
