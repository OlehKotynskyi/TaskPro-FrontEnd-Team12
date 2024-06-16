import React from 'react';
import sprite from '../../../images/sprite.svg';
import css from './BoardModal.module.css';
import path1 from '../../../images/modal_background/modalBgIcon(1).jpg';
import path2 from '../../../images/modal_background/modalBgIcon (2) .jpg';
import path3 from '../../../images/modal_background/modalBgIcon(3).jpg';
import path4 from '../../../images/modal_background/modalBgIcon(4).jpg';
import path5 from '../../../images/modal_background/modalBgIcon (5) .jpg';
import path6 from '../../../images/modal_background/modalBgIcon(6) .jpg';
import path7 from '../../../images/modal_background/modalBgIcon(7) .jpg';
import path8 from '../../../images/modal_background/modalBgIcon(8) .jpg';
import path9 from '../../../images/modal_background/modalBgIcon(9) .jpg';
import path10 from '../../../images/modal_background/modalBgIcon(10) .jpg';
import path11 from '../../../images/modal_background/modalBgIcon(11) .jpg';
import path12 from '../../../images/modal_background/modalBgIcon(12) .jpg';
import path13 from '../../../images/modal_background/modalBgIcon (13).jpg';
import path14 from '../../../images/modal_background/modalBgIcon (14).jpg';
import path15 from '../../../images/modal_background/modalBgIcon(15).jpg';

import { ModalContainer } from '../Shared/ModalContainer/ModalContainer';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button } from '../../Shared/Button/Button';
import { addBoard, editBoard } from '../../../redux/boards/boardsOperations.js';

const icons = [
  'icon-project',
  'icon-star-04',
  'icon-loading-03',
  'icon-puzzle-piece-02',
  'icon-container',
  'icon-lightning-02',
  'icon-colors',
  'icon-hexagon-01',
];
const backgrounds = [
  {
    name: '1',
    path: path1,
  },
  {
    name: '2',
    path: path2,
  },
  {
    name: '3',
    path: path3,
  },
  {
    name: '4',
    path: path4,
  },
  {
    name: '5',
    path: path5,
  },
  {
    name: '6',
    path: path6,
  },
  {
    name: '7',
    path: path7,
  },
  {
    name: '8',
    path: path8,
  },
  {
    name: '9',
    path: path9,
  },
  {
    name: '10',
    path: path10,
  },
  {
    name: '11',
    path: path11,
  },
  {
    name: '12',
    path: path12,
  },
  {
    name: '13',
    path: path13,
  },
  {
    name: '14',
    path: path14,
  },
  {
    name: '15',
    path: path15,
  },
];

export const BoardModal = ({ onClose, type, board }) => {
  const dispatch = useDispatch();
  const isCreate = type === 'create';

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: isCreate ? '' : board.title,
      icon: isCreate ? 'icon-project' : board.icon,
      background: isCreate ? '' : board.background,
    },
  });

  const onSubmit = data => {
    const payload = {
      title: data.title,
      icon: data.icon,
      background: data.background,
    };

    if (isCreate) {
      dispatch(addBoard(payload));
    } else {
      payload.id = board._id;
      dispatch(editBoard(payload));
    }
    onClose();
  };

  return (
    <ModalContainer
      onClose={onClose}
      modalTitle={isCreate ? 'New Board' : 'Edit Board'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`${css.input} ${errors.title && css.error}`}
          {...register('title', {
            required: 'Title required',
          })}
          type="text"
          name="title"
          placeholder="Title"
          id="title"
        />
        {errors.title && <p className={css.errors}>{errors.title.message}</p>}
        <p className={css.text}>Icons</p>
        <ul className={css.listIcons}>
          {icons.map(item => (
            <li key={item}>
              <input
                className={css.inputIcon}
                {...register('icon', { required: true })}
                type="radio"
                value={item}
                id={item}
              />
              <label htmlFor={item} className={css.labeIcon}>
                <svg className={css.icon}>
                  <use href={`${sprite}#${item}`} />
                </svg>
              </label>
            </li>
          ))}
        </ul>
        <p className={css.text}>Background</p>
        <ul className={css.listBackground}>
          <li>
            <input
              className={css.inputIcon}
              {...register('background')}
              type="radio"
              value=""
              id="empty"
            />
            <label htmlFor="empty" className={css.labeIcon}>
              <div className={css.backgroundBox}>
                <svg className={css.emptyPicture}>
                  <use href={`${sprite}#icon-block-background`} />
                </svg>
              </div>
            </label>
          </li>
          {backgrounds.map(item => (
            <li key={item.name}>
              <input
                className={css.inputIcon}
                {...register('background')}
                type="radio"
                value={item.name}
                id={item.name}
                onClick={() => setValue('background', item.name)}
              />
              <label htmlFor={item.name} className={css.labeIcon}>
                <img src={item.path} alt="#" className={css.iconImg} />
              </label>
            </li>
          ))}
        </ul>
        <Button icon="plus">{isCreate ? 'Create' : 'Edit'}</Button>
      </form>
    </ModalContainer>
  );
};
