import React from 'react';
import "./style.scss";
import BestProduct from "./BestProduct"
export const BestSellingProduct = () => {
    return (
        <div className='BestSellingProduct'>
            <div className="container-fluid">
                <BestProduct/>
            </div>
        </div>
    )
}
export default BestSellingProduct