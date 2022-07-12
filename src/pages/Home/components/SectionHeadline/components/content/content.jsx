import React from "react";
import "./style.scss"
import ProductItem from "../../../../../../components/ProductItem/ProductItem";
import productimgsss from "../../../../../../assets/img/product.png"
export const Content = () => {
  return <div className="content">
      <ProductItem
            src={productimgsss}
            title="Product title 1"
            des="Space for a small product description "
            price="14$"
          />
          <ProductItem
            src={productimgsss}
            title="Product title 1"
            des="Space for a small product description "
            price="14$"
            discount="75$"
          />
          <ProductItem
            src={productimgsss}
            title="Product title 1"
            des="Space for a small product description "
            price="14$"
          />
          <ProductItem
            src={productimgsss}
            title="Product title 1"
            des="Space for a small product description "
            price="14$"
          />
  </div>;
};
export default Content