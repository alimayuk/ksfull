import React from 'react'
import "./css/ErrorPage.css"
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='ErrorPage'>
        <div className="container">
           <div className="content">
           <h1>Böyle bir sayfa bulunmadı !</h1>
            <Link className='errLink' to="/">Anasayfaya Geri Dön</Link>
           </div>
        </div>
    </div>
  )
}

export default ErrorPage