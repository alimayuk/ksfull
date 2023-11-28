import React from 'react'
import Services from '../components/Services/Services'
import {Helmet} from "react-helmet-async";
const ServicePage = () => {
  return (
    <div>
       <Helmet>
        <title> Hizmetler | KAH YAZILIM </title>
        <meta name="description" content='KAH Yazılım, işletmelerin dijital gücünü artıran kullanıcı odaklı çözümler sunuyor. Web, özel yazılım, e-ticaret ve mobil uygulama geliştirme hizmetlerimizle öne çıkın' />
        <link rel='canonical' href='/hizmetler' />
      </Helmet>
        <Services />
    </div>
  )
}

export default ServicePage