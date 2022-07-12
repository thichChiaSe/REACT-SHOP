import React from "react";
import { Productimg } from "../Icons";
import { ProductItem } from "./ProductItem";
import productimgsss from "../../assets/img/product.png";
export const ProductItemIndex = () => {
  // const listPrice =["ADDS"]
  return (
    <div className="product__item">
      <div className="container-fluid">
        <ProductItem
          src={productimgsss}
          title="Product titles"
          des="Space for a small product description "
          price="13$"
        />
      </div>
    </div>
  );
};
