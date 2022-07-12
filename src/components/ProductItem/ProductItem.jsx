import React from 'react'
import Button from '../Button'

export const ProductItem = ({title,des,price,src,discount}) => {
    // const element = price.map((e)=>{
    //     return(
    //         <span className='price'>{e}</span>
    //     )
    // })
    return (
        <div className='product__item-tag'>
            <img src={src} alt="" />
            <div className="center-content">
            <h3>{title}</h3>
            <span>{des}</span>
            </div>
            <div className="bottom">
                <div className="price">
                <span className='top'>{price}</span>
                <span className='bottom'>{discount}</span>
                </div>
                <Button>Buy now</Button>
            </div>
        </div>
    )
}
export default ProductItem