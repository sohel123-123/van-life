import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'
export default function HostVanDetails() {

    const style ={
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
      }

    const param = useParams();
    const [vans, setvans] = useState([])
    useEffect(() => {
        fetch(`/api/host/vans/${param.id}`)
            .then(respone => respone.json())
            .then(data => setvans(data.vans))

    }, [])
    if (!vans) {
        return <h1>Loading...</h1>
    }


    return (
        <>
            <section>
                <Link
                    to=".."
                    relative="path"
                    className="back-button"
                >&larr; <span>Back to all vans</span></Link>
                <div className="host-van-detail-layout-container">
                    <div className="host-van-detail">
                        <img src={vans.imageUrl} />
                        <div className="host-van-detail-info-text">
                            <i
                                className={`van-type van-type-${vans.type}`}
                            >
                                {vans.type}
                            </i>
                            <h3>{vans.name}</h3>
                            <h4>${vans.price}/day</h4>
                        </div>
                    </div>
                </div>
                <nav className='host-van-detail-nav'>
                    <NavLink
                        to="."
                        end
                        style={({isActive})=>isActive?style:null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({isActive})=>isActive?style:null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to='photos'
                        style={({isActive})=>isActive?style:null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{vans}}/>
            </section>
        </>
    )
}

