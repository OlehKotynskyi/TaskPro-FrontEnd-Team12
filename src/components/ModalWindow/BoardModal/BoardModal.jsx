import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import sprite from '../../../images/sprite.svg';
import css from './BoardModal.module.css';
import { ModalContainerReact } from '../../Shared/ModalContainerReact/ModalContainerReact';
import { ModalInput } from '../../Shared/ModalInput/ModalInput';
import { Button } from '../../Shared/Button/Button';
import { addBoard, editBoard } from '../../../redux/boards/boardsOperations.js';
import { fetchBackgrounds } from '../../../redux/auth/authOperations';
import { setBackgroundUrl } from '../../../redux/auth/authSlice';

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

const SkeletonBackground = () => <div className={css.skeletonBackground}></div>;

export const BoardModal = ({ onClose, type, board }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [backgrounds, setBackgrounds] = useState({});
  const [selectedBackground, setSelectedBackground] = useState('none');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isCreate = type === 'create';

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: isCreate ? '' : board?.title || '',
      icon: isCreate ? 'icon-project' : board?.icon || 'icon-project',
      background: isCreate ? 'none' : board?.background || 'none',
    },
  });

  const onSuccessCreate = id => {
    navigate(id);
  };

  const onSubmit = data => {
    const payload = {
      title: data.title,
      icon: data.icon,
      background: selectedBackground === 'none' ? '' : selectedBackground,
      callBack: onSuccessCreate,
    };

    if (isCreate) {
      dispatch(addBoard(payload));
    } else {
      payload.id = board?._id;
      dispatch(editBoard(payload));
    }
    dispatch(
      setBackgroundUrl(selectedBackground === 'none' ? '' : selectedBackground)
    );
    if (board?._id) {
      localStorage.setItem(
        `selectedBackground_${board._id}`,
        selectedBackground
      );
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
      setLoading(true);
      try {
        const backgroundsData = await fetchBackgrounds();
        setBackgrounds(backgroundsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching backgrounds:', error);
        setError('Failed to load backgrounds');
        setLoading(false);
      }
    };

    fetchBackgroundsData();
  }, []);

  useEffect(() => {
    if (board && board._id) {
      const savedBackground = localStorage.getItem(
        `selectedBackground_${board._id}`
      );
      if (savedBackground) {
        setSelectedBackground(savedBackground);
        setValue('background', savedBackground);
      } else if (board.background) {
        setSelectedBackground(board.background);
        setValue('background', board.background);
      }
    }
  }, [board, setValue]);

  const handleBackgroundClick = bgUrl => {
    setSelectedBackground(bgUrl);
    setValue('background', bgUrl);
  };

  const getFilteredBackgrounds = () => {
    let backgroundsList = [];

    if (isMobile) {
      backgroundsList = isRetina
        ? backgrounds.mobile?.retina
        : backgrounds.mobile?.regular;
    } else if (isTablet) {
      backgroundsList = isRetina
        ? backgrounds.tablet?.retina
        : backgrounds.tablet?.regular;
    } else if (isDesktop) {
      backgroundsList = isRetina
        ? backgrounds.desktop?.retina
        : backgrounds.desktop?.regular;
    }

    return backgroundsList || [];
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
    return filteredBackgrounds.length > 0 ? (
      filteredBackgrounds.map((bg, index) => (
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
              alt={`Background ${index}`}
              className={`${css.iconImg} ${
                selectedBackground === bg ? css.selected : ''
              }`}
              style={{ width: '28px', height: '28px' }}
            />
          </label>
        </li>
      ))
    ) : (
      <p>No backgrounds available</p>
    );
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
              value="none"
              id="empty"
              onClick={() => handleBackgroundClick('none')}
            />
            <label htmlFor="empty" className={css.labeIcon}>
              <div
                className={`${css.backgroundBox} ${
                  selectedBackground === 'none' ? css.selected : ''
                }`}
              >
                <svg className={css.emptyPicture}>
                  <use href={`${sprite}#icon-block-background`} />
                </svg>
              </div>
            </label>
          </li>
          {loading
            ? Array(15)
                .fill()
                .map((_, index) => (
                  <li key={index}>
                    <SkeletonBackground />
                  </li>
                ))
            : renderBackgrounds()}
        </ul>
        <Button icon="plus">{isCreate ? 'Create' : 'Edit'}</Button>
      </form>
    </ModalContainerReact>
  );
};
