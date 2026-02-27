import { Outlet } from 'react-router'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
    
    <Header/>
<main>
{/* outlet repræsenterer - er placeholder for - indholdet som skal vises i layoutfilen - se App */}
<Outlet/>

</main>
    <Footer/>


    </div>
  )
}

export default Layout
