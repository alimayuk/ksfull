import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerTop">
          <div className="footerLeft">
            <h2>KAH Yazılım</h2>
            <p className="footerDesc">
              Müşteri odaklı web servisleriyle dijital dünyada öne çıkın!
              İhtiyaçlarınızı karşılamak için özel çözümler üretiyor, başarıya
              giden yolda sizinle birlikte ilerliyoruz.
            </p>
            <Link className="socialLink" to="https://instagram.com/kahyazilim?igshid=NzZlODBkYWE4Ng=="><FaInstagram /></Link>
          </div>
          <div className="footerRight">
            <div className="company">
              <h2>Kurumsal</h2>
              <ul className="list">
                <Link to="/hizmetler" className="listItem">
                  <li>Hizmetler</li>
                </Link>
                <Link to="/hakkimizda" className="listItem">
                  <li>Hakkımızda</li>
                </Link>
                <Link to="/projeler" className="listItem">
                  <li>Projeler</li>
                </Link>
                <Link to="/blogs" className="listItem">
                  <li>Yazılar</li>
                </Link>
              </ul>
            </div>
            <div className="support">
              <h2>Destek</h2>
              <ul className="list">
                <Link to="/iletisim" className="listItem">
                  <li>İletişim</li>
                </Link>
                <Link to="/hakkimizda" className="listItem">
                  <li>SSS</li>
                </Link>

              </ul>
            </div>
          </div>
        </div>
      <hr className="footerHr"/>
        <div className="footerBottom">
          KAH Yazılım © 2023 · Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
