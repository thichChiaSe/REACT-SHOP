import React from "react";
import Button from "../Button";
import { GreenRight } from "../Icons";
import "./style.scss";
export const SpaceForHeading = () => {
  return (
    <div className="space__FH">
      <div className="space__FH-textbox">
        <h4 className="title">Banner subfocus</h4>
        <h2 className="des">Space for heading</h2>
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
