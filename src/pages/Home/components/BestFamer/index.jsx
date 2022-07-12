import React from 'react';
import "./style.scss";
import BestFarmer from "./BestFarmer"
import ProductItem from '../../../../components/ProductItem/ProductItem';
import productimgsss from "../../../../assets/img/product.png"
export const Farmer = () => {
    return (
        <div className='Farmer'>
            <div className="container-fluid">
                <BestFarmer/>
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
            discount="48$"
          />
          <ProductItem
            src={productimgsss}
            title="Product title 3"
            des="Space for a small product description "
            price=
            "15$"
            discount="23$"
          />
        </div>
            </div>
        </div>
    )
}
export default Farmer