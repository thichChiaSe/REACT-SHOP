import React from "react";
import Button from "../Button";
import "./style.scss";
import Picture1 from "../../assets/img/product_space_for_heading.png"
import SpaceForHeading from "./spaceHeading";
import SpaceForHeading2 from "../../assets/img/product_space_for_heading_2.png"
export const CategoriHeadline = () => {
  return (
    <div className="categoriHeadline">
     <SpaceForHeading title="Banner subfocus" des="Space for heading" imgs={Picture1}/>
     <SpaceForHeading title="Banner subfocus 2" des="Space for heading 2" imgs={SpaceForHeading2}/>
    </div>
  );
};
export default CategoriHeadline;
