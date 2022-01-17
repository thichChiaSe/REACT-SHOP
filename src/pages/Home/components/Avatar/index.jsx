import React from 'react'
import classNames from 'classnames'
import './style.scss'

export const Avatar = (href, size) => {
    return (
        <div className={classNames("avatar", `size-${size}`)}>
            <img src={href} alt="" />
        </div>
    )
}
