import React from 'react'
import FaqComp from '../components/FaqComp/FaqComp'
import AboutHero from '../components/AboutHero/AboutHero'
import {Helmet} from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className='AboutUs'>
      <Helmet>
        <title> Hakkımızda | KAH YAZILIM </title>
        <meta name="description" content='KAH Yazılım, bölgedeki firmalara özel web, grafik tasarım ve pazarlama hizmetleri sunuyor. Uzman ekibimiz, işletmelerin dijital varlığını güçlendiriyor.' />
        <link rel='canonical' href='/hakkimizda' />
      </Helmet>
        <AboutHero />
        <FaqComp />
    </div>
  )
}

export default AboutUs