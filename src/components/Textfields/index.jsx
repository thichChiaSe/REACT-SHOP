import React from "react";
import Tag from "../Tag";
import "./style.scss";

import classnames from "classnames";
function TextFields({
  label,
  value,
  errorText,
  type,
  typeInput = "text",
  icon,
  size = "default",
  flex = false,
  tag = false,
  tagName,
  tagColor,
  tagBackground,
  companyName,
  plus,
  wFit = false,
  plusText,
  ...rest
}) {
  return (
    <label>
      <div className="label">{label}</div>
      <div className={classnames("input", { flex })}>
        {type === "icon-left" && icon}
        <input type={typeInput} value={value} {...rest} />
        <span className={classnames("company", `width-${ wFit }`)}>{companyName}</span>
        <div className="center">
          {plus && <span className="plus --green-bold">{plusText}</span>}
          {tag && (
            <Tag
              children={tagName}
              color={tagColor}
              background={tagBackground}
            />
          )}
        </div>
        {type === "icon-right" && icon}
      </div>
      <p className="error-text">{errorText}</p>
    </label>
  );
}

export default TextFields;
