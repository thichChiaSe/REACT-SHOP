import classnames from 'classnames';
import React from 'react';
import "./style.scss";

function Button(props) {
    const { children,onClick, font="bold" ,border="avaiable",background="store", color = "default", type = "default", size = "small", round = true, icon } = props;
    return (
        <>
        <button type={type} onClick={onClick}
            className={
                classnames('button__container',`font-${font}`,`border-${border}` ,`background-${background}`,`color-${color}`, `type-${type}`, `size-${size}`, `type=${type}`, { round })
            } >
            {type === 'icon-left' && icon}
            {children}
            {type === 'icon-right' && icon}
        </button>
        </>
    );
}
export default Button;
