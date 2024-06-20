import React, { useEffect, useState } from 'react';
import sprite from '../../../images/sprite.svg';
import css from './BoardModal.module.css';
import { ModalContainerReact } from '../../Shared/ModalContainerReact/ModalContainerReact';
import { ModalInput } from '../../Shared/ModalInput/ModalInput';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button } from '../../Shared/Button/Button';
import { addBoard, editBoard } from '../../../redux/boards/boardsOperations.js';
import { useNavigate } from 'react-router';
import { fetchBackgrounds } from '../../../redux/auth/authOperations';
import { useMediaQuery } from 'react-responsive';

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

export const BoardModal = ({ onClose, type, board }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [backgrounds, setBackgrounds] = useState({});
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [error, setError] = useState(null);
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

  const onSuccessCreate = id => {
    navigate(id);
  };

  const onSubmit = data => {
    const payload = {
      title: data.title,
      icon: data.icon,
      background: selectedBackground,
      callBack: onSuccessCreate,
    };

    if (isCreate) {
      dispatch(addBoard(payload));
    } else {
      payload.id = board._id;
      dispatch(editBoard(payload));
    }
    onClose();
  };

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1024px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
  const isRetina = window.devicePixelRatio > 1;

  useEffect(() => {
    const fetchBackgroundsData = async () => {
      try {
        const backgroundsData = await fetchBackgrounds();
        setBackgrounds(backgroundsData);
      } catch (error) {
        console.error('Error fetching backgrounds:', error);
        setError('Failed to load backgrounds');
      }
    };

    fetchBackgroundsData();
  }, []);

  const handleBackgroundClick = bgUrl => {
    setSelectedBackground(bgUrl);
    setValue('background', bgUrl);
  };

  const getFilteredBackgrounds = () => {
    if (isMobile) {
      return isRetina
        ? backgrounds.mobile?.retina
        : backgrounds.mobile?.regular;
    }
    if (isTablet) {
      return isRetina
        ? backgrounds.tablet?.retina
        : backgrounds.tablet?.regular;
    }
    if (isDesktop) {
      return isRetina
        ? backgrounds.desktop?.retina
        : backgrounds.desktop?.regular;
    }
    return [];
  };

  const renderIcons = () => {
    return icons.map(item => (
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
    ));
  };

  const renderBackgrounds = () => {
    const filteredBackgrounds = getFilteredBackgrounds();
    return Array.isArray(filteredBackgrounds)
      ? filteredBackgrounds.map((bg, index) => (
          <li key={index}>
            <input
              className={css.inputIcon}
              {...register('background')}
              type="radio"
              value={bg}
              id={`background-${index}`}
              onClick={() => handleBackgroundClick(bg)}
            />
            <label htmlFor={`background-${index}`} className={css.labeIcon}>
              <img
                src={bg}
                srcSet={`${bg} 1x, ${bg.replace(/(\.\w+)$/, '__2x$1')} 2x`}
                alt="#"
                className={`${css.iconImg} ${
                  selectedBackground === bg ? css.selected : ''
                }`}
                style={{ width: '28px', height: '28px' }}
              />
            </label>
          </li>
        ))
      : null;
  };

  return (
    <ModalContainerReact
      onClose={onClose}
      modalTitle={isCreate ? 'New Board' : 'Edit Board'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalInput
          placeholder="Title"
          name="title"
          errors={errors}
          autoFocus={true}
          register={register}
          id="title"
        />

        <p className={css.text}>Icons</p>
        <ul className={css.listIcons}>{renderIcons()}</ul>

        <p className={css.text}>Background</p>
        {error && <p className={css.errorText}>{error}</p>}
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
          {renderBackgrounds()}
        </ul>
        <Button icon="plus">{isCreate ? 'Create' : 'Edit'}</Button>
      </form>
    </ModalContainerReact>
  );
};
