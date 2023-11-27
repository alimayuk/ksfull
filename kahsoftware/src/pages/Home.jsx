import React from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import FaqComp from '../components/FaqComp/FaqComp'
import Blogs from '../components/Blogs/Blogs'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <FaqComp />
      <Blogs />
    </div>
  )
}

export default Home