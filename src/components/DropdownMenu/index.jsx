import React from 'react';
import { DropdownMenu } from './DropdownMenu';
import "./style.scss";
export const DropDownMenu = () => {
    return (
        <div className='dropdown'>
            <div className="container-fluid">
                <DropdownMenu/>
            </div>
        </div>
    )
}
export default DropDownMenu