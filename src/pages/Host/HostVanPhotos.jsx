import React from 'react'
import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
    const {vans} = useOutletContext()
  return (
    <div>
      <img src={vans.imageUrl} className="host-van-details-image"/>
    </div>
  )
}
