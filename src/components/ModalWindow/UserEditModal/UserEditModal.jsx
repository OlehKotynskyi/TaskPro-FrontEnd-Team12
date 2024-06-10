import { useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import css from './UserEditModal.module.css';
import sprite from '../../../images/sprite.svg';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(7, "Too short")
    .max(256, "Too long")
    .required("Required"),
});


export default function UserEditModal({ onClose }) {
  const fileInputRef = useRef(null);
  const methods = useForm({
    resolver: yupResolver(ValidationSchema),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleMenuClick = (ev) => {
    ev.stopPropagation();
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      // додати логіку для завантаження файлу на сервер або оновлення аватарки
    }
  };

  return (
    <>
      <div className={css.backdrop} onClick={() => onClose()}>
        <div
          className={`${css.container} ${css.cont}`}
          onClick={(e) => handleMenuClick(e)}
        >
          <div className={css.wrap}>
            <button className={css.closeBtn} onClick={() => onClose()}>
              <svg width="18" height="18" stroke="currentColor">
                <use href={`${sprite}#icon-x-close`} />
              </svg>
            </button>
          </div>
          <p className={css.txt}>Edit Profile</p>
          <div className={css.avatarContainer}>
            <svg className={css.avatar}>
              <use href={`${sprite}#icon-user`} />
            </svg>
            <button
              type="button"
              className={css.plusBtn}
              onClick={() => handleButtonClick()}
            >
              <svg width="10" height="10" stroke="currentColor">
                <use href={`${sprite}#icon-plus`}></use>
              </svg>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e)}
              />
            </button>
          </div>
          <FormProvider {...methods}>
            <form className={css.forma} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className={css.formGroup}>
                <label htmlFor="name" className={css.formLabel}></label>
                <input
                  type="text"
                  name="name"
                  className={css.formInput}
                  placeholder="Name"
                  {...methods.register("name")}
                />
                {methods.formState.errors.name && (
                  <span className={css.error}>{methods.formState.errors.name.message}</span>
                )}
              </div>
              <div className={css.formGroup}>
                <label htmlFor="email" className={css.formLabel}></label>
                <input
                  type="text"
                  name="email"
                  className={css.formInput}
                  placeholder="Email"
                  {...methods.register("email")}
                />
                {methods.formState.errors.email && (
                  <span className={css.error}>{methods.formState.errors.email.message}</span>
                )}
              </div>
              <div className={css.formGroup}>
                <label htmlFor="password" className={css.formLabel}></label>
                <input
                    type="password"
                    name="password"
                    className={css.formInput}
                    placeholder="Password"
                    {...methods.register("password")}
                  />
                {/* <PasswordField /> */}
                {methods.formState.errors.password && (
                  <span className={css.error}>{methods.formState.errors.password.message}</span>
                )}
              </div>
              <button type="submit" className={css.btn}>
                Send
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}