import React from 'react'
import DropdownMenuItem from './DropdownMenuItem'

export const DropdownMenu = () => {
    const nameMenu=["Bakery","Fruit and vegetables","Meat and fish","Kitchen","Special nutrition","Baby","Pharmacy"]
    return (
        <div className='dropdown_items'>
            {
            nameMenu.map((item,index)=>{
                return <DropdownMenuItem item={item} key={index}/>
            }) 
        }
        </div>
    )
}
/////********** */