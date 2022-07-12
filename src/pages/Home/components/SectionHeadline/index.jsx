import React from 'react'
import Content from './components/content/content';
import Top from './components/top/top';
import "./style.scss"
export const Headline = () => {
    return (
        <div className='Headline'>
            <div className="container-fluid">
            <Top/>
            <Content/>
            </div>
        </div>
    )
}

export default Headline;