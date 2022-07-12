import React from "react";
// import TigerTran from "../../../../assets/img/trandan.png";
export const SliderItem = ({ title, item, imgs }) => {
  return (
    <div className="name-and-surename">
      <h3 >{title}</h3>
      <div className="surename">{item}</div>
      {/* <img src={TigerTran} alt=""  class="avatar"/> */}
      <div className="avatar">
        <img src={imgs} alt="" className="avatar-items" />
      </div>
    </div>
  );
};

export default SliderItem;
