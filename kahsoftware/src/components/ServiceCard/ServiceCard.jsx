import React from 'react'
import "./ServiceCard.css"
const ServiceCard = ({icon, hText, desc}) => {
  return (
    <div className='ServiceCard'>
        <div className="icon">{icon}</div>
        <h3 className='cardTitle'>{hText}</h3>
        <p className='cardDesc'>{desc}</p>
    </div>
  )
}

export default ServiceCard