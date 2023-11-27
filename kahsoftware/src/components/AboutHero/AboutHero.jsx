import React from "react";
import "./AboutHero.css";
const AboutHero = () => {
  return (
    <div className="AboutHero">
      <div className="container">
        <h1 className="title">HAKKIMIZDA</h1>
        <div className="wrapper">
        <div className="content">
            <p>
            Kendi alanında uzmanlaşmış KAH Yazılım, Türkiye’nin teknoloji, BT ve SaaS StartUp şirketlerine ek olarak diğer sektörlerde faaliyet gösteren kurumsal firmalara özel web tasarımı, web yazılımı, grafik tasarım ve dijital pazarlama hizmetleri sunan bir ajans olarak öne çıkmaktadır.
            </p>
            <p>
            Pazarlama, satış, markalaşma, ürün geliştirme ve yazılım alanlarında işletmelerin veri odaklı, büyüme hedefli ve sonuç odaklı çözümlerine katkı sağlamaktadır. Tecrübeli ekibimiz, çeşitli sektörlerde uzmanlaşmış ve nitelikli yazılım ile pazarlama profesyonellerinden oluşmaktadır.
            </p>
        </div>
        <div className="imageSide">
        <img src="https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="image" alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
