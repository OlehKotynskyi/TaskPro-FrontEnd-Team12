import React from 'react';
import logo from '../../../images/sprite.svg';
import css from './BordModal.module.css';

import { ModalContainer } from '../Shared/ModalContainer/ModalContainer';
import { useForm } from 'react-hook-form';
import { ModalButton } from '../Shared/ModalButton/ModalButton';

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
const backgrounds = Array.from({ length: 15 }, (_, i) => String(i + 1));

export const BordModal = ({ onClose, type, board }) => {
  const isCreate = type === 'create';

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: isCreate ? '' : board.title,
      icon: isCreate ? 'icon-project' : board.icon,
      bgnd: isCreate ? '' : '2',
    },
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <ModalContainer onClose={onClose} modalTitle={'New board'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={css.input}
          {...register('title')}
          type="text"
          name="title"
          placeholder="Title"
          id="title"
        />
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
                  <use href={`${logo}#${item}`} />
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
              {...register('bgnd')}
              type="radio"
              value=""
              id="empty"
            />
            <label htmlFor="empty" className={css.labeIcon}>
              <div className={css.backgroundBox}>
                <svg className={css.emptyPicture}>
                  <use href={`${logo}#icon-bell`} />
                </svg>
              </div>
            </label>
          </li>
          {backgrounds.map(item => (
            <li key={item}>
              <input
                className={css.inputIcon}
                {...register('bgnd')}
                type="radio"
                value={item}
                id={item}
              />
              <label htmlFor={item} className={css.labeIcon}>
                <div className={css.backgroundBox}>{item}</div>
              </label>
            </li>
          ))}
        </ul>
        <ModalButton icon="plus">{isCreate ? 'Create' : 'Edit'}</ModalButton>
      </form>
    </ModalContainer>
  );
};
