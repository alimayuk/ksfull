import React, { useState } from "react";
import "./css/Contact.css";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import axios from "axios";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    eposta: "",
    phone: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/email/", formData);
      console.log(response.data);
      // İsteğin başarılı olması durumunda başka bir işlem yapılabilir
    } catch (error) {
      console.error("Form gönderimi sırasında hata oluştu: ", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="Contact">
      <div className="container">
        <h1 className="Hcontact">İletişim</h1>
        <div className="formWrapper">
          <div className="move">
            <h2>Hemen Harekete Geç</h2>
            <a href="mailto:ornek@eposta.com">alimayukk22@gmail.com</a>
            <p>+90 552 697 08 22</p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <h2>İletişim Formu</h2>
            <div className="formItem">
              <label htmlFor="name">İsim Soyisim</label>
              <input type="text" id="name" onChange={handleChange} />
            </div>
            <div className="formItem">
              <label htmlFor="eposta">E-Posta</label>
              <input type="email" id="eposta" onChange={handleChange} />
            </div>
            <div className="formItem">
              <label htmlFor="phone">Telefon</label>
              <input type="text" id="phone" onChange={handleChange} />
            </div>
            <div className="formItem">
              <label htmlFor="message">Mesajınız</label>
              <input type="text" id="message" onChange={handleChange} />
            </div>
            <button type="submit">
              {" "}
              <PiPaperPlaneTiltBold /> Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
