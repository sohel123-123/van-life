import React from 'react'
import { useOutletContext } from "react-router-dom";
export default function HostVanPricing() {
    const {vans} = useOutletContext()
  return (
    <h3 className='host-van-price'>${vans.price}<span>/day</span></h3>
  )
}
