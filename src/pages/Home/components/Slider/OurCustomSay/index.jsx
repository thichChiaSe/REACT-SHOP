import React from 'react'
import Button from '../../../../../components/Button';
import { GreenRight } from '../../../../../components/Icons';
import "./style.scss"
export const OurSay = () => {
    return (
        <div className='OurSay'>
            <h3>Our customers says</h3>
            <div className="btn">
            <Button font="bold" border="none"type="icon-right" color="black" size="small" background="default" round="false"icon={<GreenRight/>}>Button</Button>
            </div>
        </div>
    )
}

export default OurSay;
