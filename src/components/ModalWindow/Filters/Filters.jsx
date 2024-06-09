import css from './Filters.module.css'

export const Filters = ({ onClose }) => {


  return (
    <div className={css.modalBackdrop}>
      <div className={css.header} onClick={(e) => e.stopPropagation()}>
        <div className={css.container}>
          <h2 className={css.filterLine}>Filters</h2>
          <div className={css.closeContainer}>
            <button className={css.onCloseButton} onClick={onClose}>
              <svg width={9} height={9}><use></use></svg>
            </button>
          </div>
                  <form className={css.form} action="">
                      <div>
                          <label className={css.formTitle}>Label color</label>
                          <label className={css.formTitle}>Show all</label>
                      </div>
                      <div className={css.formContainer}>
                          <div className={css.formRadio}>
                              <input className={css.formInput} type="radio" id="withoutPriority" name="priority" value="withoutPriority" />
                              <label className={css.formText}>Without priority</label>
                          </div>
                          <div className={css.formRadio}>
                              <input className={css.formInput} type="radio" id="low" name="priority" value="low" />
                              <label className={css.formText}>Low</label>
                          </div>
                          <div className={css.formRadio}>
                              <input className={css.formInput} type="radio" id="medium" name="priority" value="medium" />
                              <label className={css.formText}>Medium</label>
                          </div>
                          <div className={css.formRadio}>
                              <input className={css.formInput} type="radio" id="high" name="priority" value="high" />
                              <label className={css.formText}>High</label>
                          </div>
                        </div>
          </form>
          </div>
        </div>
      </div>
  );
};
