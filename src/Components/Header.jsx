import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const style ={
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }
  return (
    <div>
      <header>
              <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                  <NavLink 
                  to='/host/'
                  style={({isActive})=>isActive?style:null}
                  >host</NavLink>

                  <NavLink 
                  to='/vans'
                  style={({isActive})=>isActive?style:null}
                  >Vans</NavLink>

                  <NavLink 
                  to='/About'
                  style={({isActive})=>isActive?style:null}
                  >About</NavLink>
                </nav>
              </header>
    </div>
  )
}
