import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div>
      <h1>Dshboard is here</h1>
      <Outlet/>
    </div>
  )
}
