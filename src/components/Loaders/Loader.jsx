import css from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={css.page}>
      <div className={css.container}>
        <div className={css.ring}></div>
        <div className={css.ring}></div>
        <div className={css.ring}></div>
        <div className={css.ring}></div>
        <div className={css.h3}>loading</div>
      </div>
    </div>
  );
};
