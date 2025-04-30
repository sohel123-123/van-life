import React from 'react'
import { useParams } from 'react-router-dom'
export default function VanDetail() {
  const [van, setvan] = React.useState(null)
  const param = useParams();
 React.useEffect(() => {
   fetch(`/api/vans/${param.id}`)
   .then(response=>response.json())
   .then(data=>setvan(data.vans))
 }, [])
 


  return (
    <div className="van-detail-container">
    {van ? (
        <div className="van-detail">
            <img  src={van.imageUrl} alt={van.name}/>
            <i className={`van-type ${van.type} selected`}>
                {van.type}
            </i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
    ) : <h2>Loading...</h2>}
    
</div>

  )
}
