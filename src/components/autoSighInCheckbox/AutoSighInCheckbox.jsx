import React from "react";
import styles from "./AutoSighInCheckbox.module.scss";
import Checkbox from "../checkbox/Checkbox";
import Tooltip from "../tooltip/Tooltip";

export default function AutoSighInCheckbox({
  label = "자동 로그인",
  checked,
  disabled,
  orientation = "top",
  message = "개인 정보 보호를 위해 본인 기기에서만 이용해주세요.",
  onChange,
  ...restProps
}) {
  return (
    <div className={styles.wrapper}>
      <Checkbox
        label={label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...restProps}
      />
      {checked && <Tooltip 
      top={24}
      left={-5}
      orientation={orientation}
      message={message}/>}
    </div>
  );
}