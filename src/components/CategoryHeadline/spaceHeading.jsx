import React from "react";
import Button from "../Button";
import { GreenRight } from "../Icons";
import "./style.scss";
export const SpaceForHeading = ({title,des,imgs}) => {
  return (
    <div className="space__FH">
      <img src={imgs}/>
      <div className="space__FH-textbox">
        <h4 className="title">{title}</h4>
        <h2 className="des">{des}</h2>
      </div>
      <div className="space__FH-btn">
        <Button
          background="default"
          type="icon-right"
          icon={<GreenRight />}
          border="green"
          size="heading"
        >
          Read recepies
        </Button>
      </div>
    </div>
  );
};
export default SpaceForHeading;
