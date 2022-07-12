import React from "react";
import Button from "../Button";
import "./style.scss";
import SpaceForHeading from "./spaceHeading";
export const CategoriHeadline = () => {
  return (
    <div className="categoriHeadline">
     <SpaceForHeading title="Banner subfocus" des="Space for heading" />
     <SpaceForHeading title="Banner subfocus 2" des="Space for heading 2"/>
    </div>
  );
};
export default CategoriHeadline;
