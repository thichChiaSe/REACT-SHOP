import React from 'react'
import TigerTran from '../../../../assets/img/trandan.png'
export const SliderItem = ({title,item}) => {
    return (
            <div className="nameandsurename">
                <h3>{title}</h3>
                <div className='surename'>
                    {item}
                </div>
                <img src={TigerTran} alt=""  class="avatar"/>
            </div>
    )
}

export default SliderItem;