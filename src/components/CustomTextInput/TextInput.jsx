import React from "react";
import "./TextInput.scss";

const TextInput = ({
  placeholder,
  labelValue,
  type = "text",
  containerClass = "",
}) => {
  return (
    <div class={`inputContainer ${containerClass}`}>
      <input type={type} class="input" placeholder={placeholder} />
      <label for="" class="label">
        {labelValue}
      </label>
    </div>
  );
};

export default TextInput;
