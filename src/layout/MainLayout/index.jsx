import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../../components'
import DropDownMenu from '../../components/DropdownMenu'
import { DropdownMenu } from '../../components/DropdownMenu/DropdownMenu'
// import Nav from '../../components/Navigation'

export const MainLayout = () => {
    return (
        <div>
            <Header/>
            {/* <Nav/> */}
            <DropDownMenu/>
            <main id="main-content">
            <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
export default MainLayout