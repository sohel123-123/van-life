import React from 'react'
import { Link } from "react-router-dom"
export default function vans() {
    const [van, setvan] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
        .then(response => {
         
          // Parse the JSON data
          return response.json();
        })
        .then(data => {
          // Use the fetched data
          setvan(data.vans)
        })
    }, [])
    
  let display =van.map(van=>
  <div key={van.id} className="van-tile">
    <Link to={`/vans/${van.id}`}>
    <img src={van.imageUrl} alt="" />
    <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}<span>/day</span></p>
    </div>
    <i className={`van-type ${van.type}selected`}>{van.type}</i>
    </Link>
  </div>)
  return (
    <div>
      <div className="van-list-container">
          <h1>Explore our van options</h1>
        <div className="van-list">
      {display}
        </div>
      </div>
    </div>
  )
}
