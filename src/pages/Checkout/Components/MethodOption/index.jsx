import React from "react";

export const MethodOption = (props) => {
  const {onchange, price,radio, type, logo, checked, name} = props;
  return (
    <div className="method">
      <div className="left">

      <input
        type="radio"
        onChange={onchange}
        checked={radio}
      />
        <div className="name">{name}</div>
      </div>
      <div className="info">
        <div className="price">{price}</div>
        <div className="type">{type}</div>
      </div>
      <div className="logo">{logo}</div>
    </div>
  );
};
