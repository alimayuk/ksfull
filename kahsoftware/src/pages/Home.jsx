import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import FaqComp from '../components/FaqComp/FaqComp';
import Blogs from '../components/Blogs/Blogs';
import {Helmet} from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Anasayfa | KAH YAZILIM</title>
        <meta name="description" content="Kurumsal ve kişisel ihtiyaçlarınıza yönelik SEO ve web tasarım hizmetlerinin yanı sıra, Tekirdağ, Edirne, İstanbul, Kırklareli gibi önemli bölgelerde faaliyet gösteren işletmeler için özel çözümler sunuyoruz. Sektörünüz ne olursa olsun, kurumsal kimliğinizi en iyi şekilde yansıtan web siteleri tasarlıyor ve SEO stratejileri ile görünürlüğünüzü artırıyoruz. Aynı zamanda bireysel ihtiyaçlarınız için özelleştirilmiş çözümler sunarak sizi dijital platformlarda güçlendiriyoruz. Profesyonel ekibimiz, yerel ve ulusal düzeyde sizi hedef kitlenizle buluşturmak için çalışıyor. Bizimle, işletmenizin dijital dünyadaki potansiyelini keşfedin ve daha geniş bir kitleye erişin." />
        <link rel='canonical' href='www.kahyazilim.com' />
      </Helmet>
      <Hero />
      <Services />
      <FaqComp />
      <Blogs />
    </div>
  )
}

export default Home