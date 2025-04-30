import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
export default function HostLayout() {
  const style ={
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }
  return (
    <div>
      <nav className='host-nav'>
      <NavLink
       to='/Host'
       end
       style={({isActive})=>isActive ? style : null}
       >DashBoard</NavLink>
      <NavLink
       to='Income'
       style={({isActive})=>isActive ? style : null}
       >Income</NavLink>
      <NavLink
       to='Review'
       style={({isActive})=>isActive ? style : null}
       >Review</NavLink>
      <NavLink
       to='vans'
       style={({isActive})=>isActive ? style : null}
       >Vans</NavLink>
      </nav>
      <Outlet/>
      
    </div>
  )
}
 