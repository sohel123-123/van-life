import React from 'react'
import { useOutletContext } from "react-router-dom";
export default function HostVanInfo() {
    const {vans} = useOutletContext()
  return (
    <section>
        <h4>{vans.name}</h4>
        <h4>{vans.type}</h4>
        <h4>{vans.description}</h4>
        <h4>visibility: Public</h4>
    </section>
  )
}
