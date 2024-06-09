import { useState } from 'react';
import css from './Sidebar.module.css';
import clsx from 'clsx';
import logo from '../../images/sprite.svg';
import helpImg2x from '../../images/flower/flower_@2x.png';
import helpImg from '../../images/flower/flower.png';
import { BordCard } from 'components/BordCard/BordCard';
import { BordModal } from 'components/ModalWindow/BordModal/BordModal';

export const Sidebar = ({ visible, onVisible }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const closeSidebar = () => {
    onVisible(false);
  };

  return (
    <div
      className={clsx(css.sidebarWrap, { [css.visible]: visible })}
      onClick={closeSidebar}
    >
      <aside className={css.sidebar}>
        <div className={css.logoBox}>
          <svg className={css.logoSvg}>
            <use href={`${logo}#icon-logo`} />
          </svg>
          <h1 className={css.logoTitle}>Task Pro</h1>
        </div>
        <div className={css.block}>
          <p className={css.createTitle}>My boards</p>
          <div className={css.createBox}>
            <p className={css.createText}>Create a new board</p>
            <button className={css.createBtn} onClick={handleModalOpen}>
              <svg className={css.createSvg}>
                <use href={`${logo}#icon-plus`} />
              </svg>
            </button>
          </div>
        </div>
        <ul className={css.projects}>
          <BordCard title={'Project office'} icon={'icon-help-circle'} />
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
            <button className={css.helpBtn}>
              <svg className={css.helpSvg}>
                <use href={`${logo}#icon-help-circle`} />
              </svg>
              Need help?
            </button>
          </div>
          <button className={css.logOutBtn}>
            <svg className={css.logOutSvg}>
              <use href={`${logo}#icon-login`} />
            </svg>
            Log out
          </button>
        </div>
      </aside>
      {isModalOpen && <BordModal onClose={handleModalClose} type="create" />}
    </div>
  );
};
