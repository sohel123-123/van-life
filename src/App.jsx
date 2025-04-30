
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from "react"
import Vans from './pages/vans/vans'
import Home from './pages/Home'
import About from './pages/About'
import VanDetail from './pages/vans/VanDetail'
import Layout from './Components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Review from './pages/Host/Review'
import HostLayout from './Components/HostLayout'
import VansRout from './pages/Host/VansRout'
import HostVanDetails from './pages/Host/HostVanDetails'
import Details from './pages/Host/Details'
import Pricing from './pages/Host/Pricing'
import Photos from './pages/Host/Photos'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='About' element={<About />} />
          
          <Route path='vans' element={<Vans />}/>
          <Route path='vans/:id' element={<VanDetail/>} />
          
          <Route path='Host' element={<HostLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path='Income' element={<Income/>} />
          <Route path='Review' element={<Review/>} />
          <Route path='vans' element={<VansRout/>} />
          <Route path='vans/:id' element={<HostVanDetails/>} >
          <Route index element={<HostVanInfo/>} />
          <Route path='pricing' element={<HostVanPricing/>} />
          <Route path='photos' element={<HostVanPhotos/>} />
          </Route>
        
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
