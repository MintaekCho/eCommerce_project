import classNames from "classnames";
import React, { useState } from "react";
import styles from "./input.module.scss";
import Icon from "../icon/Icon";

export default function Input({
  id,
  label,
  name = "",
  labelVisible,
  icon,
  email,
  password,
  placeholder = "",
  readOnly,
  disabled,
  value,
  error: errorProps,
  className = "",
  onchange,
  ...restProps
}) {
  const [inputValue, setInputValue] = useState(value ? value : "");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleChange = (e) => {
    setInputValue(e.target.value);
    onchange(e);
  };
  const iconType = isPasswordVisible ? "show" : "hide";
  const iconLabel = `비밀번호 ${isPasswordVisible ? "표시" : "감춤"}`;
  const checkType = () => {
    if (email) {
      return "email";
    }
    if (password) {
      return isPasswordVisible ? "text" : "password";
    }
    return "text";
  };
  console.log(email);
  return (
    <div className={classNames(styles.formControl, className)}>
      <label
        htmlFor={id}
        className={classNames(styles.label, labelVisible || styles.labelHidden)}
      >
        {label}
      </label>
      <div
        className={classNames(
          styles.inputWrapper,
          errorProps && styles.inputWrapperError
        )}
      >
        {icon && <Icon type={icon} />}
        <input
          id={id}
          type={checkType()}
          name={name}
          className={classNames(styles.input)}
          placeholder={placeholder}
          onChange={handleChange}
          readOnly={readOnly}
          disabled={disabled}
          value={inputValue}
          {...restProps}
        />

        {password ? (
          <button
            type="button"
            className={styles.button}
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            disabled={disabled}
          >
            <Icon type={iconType} alt={iconLabel} title={iconLabel} />
          </button>
        ) : null}
        {errorProps && (
          <span role="alert" className={styles.error}>
            {errorProps.message}
          </span>
        )}
      </div>
    </div>
  );
}
