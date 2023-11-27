import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
      <div className="container">
            <div className="heroText">
              <h1>Merhaba! KAH Yazılım'a hoş geldiniz</h1>
            <p>Biz, dijital dünyada çözümler üreten bir ekip olarak, web servisleri konusunda tutkulu ve yenilikçi bir yaklaşımla çalışıyoruz. Sunduğumuz hizmetlerle, müşterilerimizin ihtiyaçlarına özel çözümler üretiyor, teknolojiyi en verimli şekilde kullanarak işlerini kolaylaştırıyoruz. Sizin için özel web servisleri geliştiriyor ve dijital dünyada başarılı adımlar atmanızı sağlıyoruz. Hadi, birlikte başarıya giden yolda adımlarımızı birlikte atalım!</p>
            <div className="heroBtns">
            <a href="#hizmetler" className='startBtn'>ŞİMDİ BAŞLA</a>
            <Link to="/iletişim" className='contactBtn'>İLETİŞİME GEÇ</Link>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero