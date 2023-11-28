import React from 'react'
import "./Services.css"
import ServiceCard from '../ServiceCard/ServiceCard'
import { MdWeb } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { GiTrade } from "react-icons/gi";
import { TbSeo } from "react-icons/tb";
import { IoIosText } from "react-icons/io";
import { TbDeviceMobileCode } from "react-icons/tb";


const Services = () => {
  return (
    <div className='Services' id='hizmetler'>
        <div className="container">
            <h1 className="hText">Hizmetlerimiz</h1>
            <div className="cards">
                <ServiceCard 
                icon={<MdWeb className='cardIcon' />}
                hText={"Web Geliştirme"}
                desc={"Kullanıcı odaklı, mobil uyumlu web çözümleri. Dijital varlığınızı güçlendirin, etkileyici deneyimler yaşayın!"}
                />
                <ServiceCard 
                icon={<FaCode className='cardIcon' />}
                hText={"Özel Yazılım Geliştirme"}
                desc={"İhtiyaçlarınıza özel yazılımlar. Sizin için tasarlanmış, işlevsel ve verimli çözümler üretiyoruz."}
                />
                <ServiceCard 
                icon={<GiTrade className='cardIcon' />}
                hText={"E-ticaret Çözümleri"}
                desc={"Online satış dünyasında başarı için özel çözümler. E-ticarette size özel stratejiler ve kullanıcı dostu altyapılar."}
                />
                <ServiceCard 
                icon={<TbSeo className='cardIcon' />}
                hText={"SEO Geliştirme"}
                desc={"Arama motorlarında görünürlüğü artırıyoruz. SEO stratejileriyle sitenizi öne çıkarıyor, daha geniş bir kitleye erişmenizi sağlıyoruz."}
                />
                <ServiceCard 
                icon={<IoIosText className='cardIcon' />}
                hText={"Danışmanlık ve Destek"}
                desc={"Teknolojide rehberlik ve sürekli destek. İhtiyaçlarınıza özel çözümler ve güvenilir danışmanlık hizmetleriyle yanınızdayız."}
                />
                <ServiceCard 
                icon={<TbDeviceMobileCode className='cardIcon' />}
                hText={"Mobil Uygulama Geliştirme"}
                desc={"Kullanıcıların hayatını kolaylaştıran mobil uygulamaları kodluyoruz. Özelleştirilmiş çözümler, kullanıcı dostu arayüzler ve yenilikçi deneyimlerle mobil dünyada öne çıkın!"}
                />
            </div>
        </div>
    </div>
  )
}

export default Services