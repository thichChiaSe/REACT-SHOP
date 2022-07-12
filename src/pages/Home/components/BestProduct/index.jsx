import React from "react";
import "./style.scss";
import BestProduct from "./BestProduct";
import ProductItem from "../../../../components/ProductItem/ProductItem";
import productimgsss from "../../../../assets/img/product.png";
import { useSelector } from "react-redux";
export const BestSellingProduct = () => {
  const { productInfo } = useSelector((store) => store.product);
  console.log(productInfo);
  
  return (
    <div className="BestSellingProduct">
      <div className="container-fluid">
        <BestProduct />
       <div className="list-product">
          <ProductItem
            src={productimgsss}
            title="Product title 1"
            des="Space for a small product description "
            price="14$"
          />
          <ProductItem
            src={productimgsss}
            title="Product title 2"
            des="Space for a small product description "
            price="13$"
            discount="100$"
          />
          <ProductItem
            src={productimgsss}
            title="Product title 3"
            des="Space for a small product description "
            price=
            "15$"
          />
        </div> 
   
      </div>
    </div>
  );
};
export default BestSellingProduct;
