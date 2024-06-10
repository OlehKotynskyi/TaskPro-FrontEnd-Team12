import { useRef } from "react";
import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './UserEditModal.module.css';
import sprite from '../../../images/sprite.svg';
import PasswordField from "./PasswordField"

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

  const handleSubmit = (values, actions) => {
    actions.resetForm();
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
      // додати логіку для завантаження файлу на сервер або новлення аватарки
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
          <div>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={ValidationSchema}
            >
              <Form className={css.forma} autoComplete="off">
                <div className={css.formGroup}>
                  <label htmlFor="name" className={css.formLabel} />
                  <Field
                    type="text"
                    name="name"
                    className={css.formInput}
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className={css.error}
                  />
                </div>
                <div className={css.formGroup}>
                  <label htmlFor="email" className={css.formLabel} />
                  <Field
                    type="text"
                    name="email"
                    className={css.formInput}
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className={css.error}
                  />
                </div>
                <div className={css.formGroup}>
                  <label htmlFor="password" className={css.formLabel} />
                  
                  <PasswordField />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className={css.error}
                  />
                </div>

                <button type="submit" className={css.btn}>
                  Send
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}