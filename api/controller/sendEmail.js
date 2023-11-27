const express = require("express");
const nodemailer = require("nodemailer");
const {AUTH_EMAIL, AUTH_PASS} = process.env;
const sendEmail = async (req, res) => {
    try{
  const { name, eposta, phone, message } = req.body;

   // E-posta göndermek için nodemailer kullanarak bir transporter oluşturuluyor
   const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    auth: {
      user: AUTH_EMAIL, // Gönderici e-posta adresini güncelleyin
      pass: AUTH_PASS, // Şifrenizi güncelleyin veya çevre değişkenlerini kullanın
    },
  });

  // Gönderilecek e-posta ayarları
  const mailOptions = {
    from: "ali_kaya_@outlook.com.tr",
    to: 'alimayukk22@gmail.com', // Alıcı e-posta adresini güncelleyin
    subject: 'KAH YAZILIM Yeni İletişim Formu Gönderisi',
    text: `
      İsim Soyisim: ${name}
      E-Posta: ${eposta}
      Telefon: ${phone}
      Mesaj: ${message}
    `,
  };
  // E-posta gönderme işlemi
  const info = await transporter.sendMail(mailOptions);
  console.log('E-posta gönderildi: ' + info.response);
  res.status(200).send('İletişim formu başarıyla gönderildi.');
} catch (error) {
  console.error(error);
  res.status(500).send('İletişim formu gönderilirken bir hata oluştu.');
}
};

module.exports = { sendEmail };
