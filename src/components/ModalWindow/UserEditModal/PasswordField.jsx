import { useState } from "react";
import { Field } from "formik";
import css from "../../../components/ModalWindow/UserEditModal/PasswordField.module.css";
import sprite from '../../../images/sprite.svg';

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.passwordField}>
      <Field
        type={showPassword ? "text" : "password"}
        name="password"
        className={css.formInput}
        placeholder="Password"
      />
      <button className={css.eye} onClick={togglePasswordVisibility}>
        <svg width="18" height="18" stroke="currentColor">
          <use
            href={`${sprite}${showPassword ? "#eye-slash-icon" : "#eye-icon"}`}
          ></use>
        </svg>
      </button>
    </div>
  );
};

export default PasswordField;