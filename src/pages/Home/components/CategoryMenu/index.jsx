import React from 'react';
import "./style.scss";
import CategoryMenu from "./CategoryMenu"
import CategoriHeadline from '../../../../components/CategoryHeadline';
export const Categories = () => {
    return (
        <div className='Categories'>
            <div className="container-fluid">
                <CategoryMenu/>
                <CategoriHeadline/>
            </div>
        </div>
    )
}
export default Categories