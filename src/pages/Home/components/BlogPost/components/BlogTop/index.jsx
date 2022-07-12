import React from 'react'
import { GreenRight } from '../../../../../../components/Icons';
import Button from '../../../../../../components/Button/index';
import "./style.scss"
export const BlogTop = () => {
    return (
        <div className='BlogTop'>
            <h3>Section headline</h3>
            <div className="btn">
            <Button font="bold" border="none"type="icon-right" color="black" size="small" background="default" round="false"icon={<GreenRight/>}>Button</Button>
            </div>
        </div>
    )
}

export default BlogTop;