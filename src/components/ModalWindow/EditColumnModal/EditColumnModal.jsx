import css from './EditColumnModal.module.css'

export const EditColumnModal = ({ onClose }) => {


  return (
    <div className={css.modalBackdrop}>
      <div className={css.header} onClick={(e) => e.stopPropagation()}>
        <div className={css.container}>
          <h2>Edit column</h2>
          <div className={css.closeContainer}>
            <button className={css.onCloseButton} onClick={onClose}>
              <svg width={9} height={9}><use></use></svg>
            </button>
          </div>
          <form className={css.form} action="">
            <input className={css.formInput} type="text" placeholder='To Do' />
            <button className={css.formButton} type='submit'>
              <svg width={28} height={28}><use></use></svg>
              <p className={css.submitButtonText}>Add</p>
            </button>
          </form>
          </div>
        </div>
      </div>
  );
};
