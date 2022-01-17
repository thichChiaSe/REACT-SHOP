import React from 'react'
import "../Textfield/style.scss"
export const TextField = ({type,label, value, errorText,icon, ...rest}) => {
    return (
        <label className='wrap'>
        <div className='label'>{label}</div>
        <input type={type }value={value} {...rest} />
        {type === "icon-right" && icon}
        <p className='error-text'>{errorText}</p>
    </label>
    )
}
export default TextField