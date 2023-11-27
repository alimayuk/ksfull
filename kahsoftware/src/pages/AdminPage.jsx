import React, { useContext, useState } from "react";
import {AuthContext} from "../context/authContext"
import {useLocation} from "react-router-dom"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./css/AdminPage.css";
import axios from "axios";
const AdminPage = () => {
  const {currentUser,token} = useContext(AuthContext)
  const state = useLocation().state;

  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title|| "");
  const [sitelink, setSitelink] = useState(state?.sitelink || "");
  const [cat, setCat] = useState(state?.cat || "blog");
  const [file, setFile] = useState(null);

  const upload = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post("/upload", formData);
        return res.data;
      }
      return null;
    } catch (err) {
      console.log(err);
    }
  };

   const handlSubmit = async (e) =>{
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state ? 
      await axios.put(`/post/${state._id}`,{
        title,
        desc: value,
        category: cat,
        siteLink: sitelink,
        photo: file ? imgUrl : "blog.png",
        username: currentUser.username,
        access_token: token
      }) : await axios.post(`/post/`,{
        title,
        desc: value,
        category: cat,
        siteLink: sitelink,
        photo: file ? imgUrl : "blog.png",
        username: currentUser.username
      })
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
   }
  
  return (
    <div className="AdminPage">
      <div className="container">
        <div className="content">
        <input
            type="text"
            placeholder="Başlık"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="inpTitle"
          />
        <ReactQuill
          className="editor"
          theme="snow"
          value={value}
          onChange={setValue}
        />
        </div>
        <div className="shareSide">
          <div className="uploadImg">
          <label htmlFor="file">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                stroke="#fffffff"
                strokeWidth="2"
              ></path>
              <path
                d="M17 15V18M17 21V18M17 18H14M17 18H20"
                stroke="#fffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>{" "}
            Resim Yükle
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          </div>
          <div className="category">
            <h1>Kategori</h1>
            <div className="cat">
            <input
              type="radio"
              checked={cat === "blog"}
              name="cat"
              value="blog"
              id="blog"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="blog">Blog</label>
          </div>
          <div className="cat extraCatItem">
           <div className="div">
           <input
              type="radio"
              checked={cat === "proje"}
              name="cat"
              value="proje" 
              id="proje"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="proje">Proje</label> 
           </div>
            {cat === "proje" && <input className="extraItem" type="text" onChange={(e) => setSitelink(e.target.value)} placeholder="Site Linki" />}
            </div>
          </div>
          <div className="buttons">
            <button onClick={handlSubmit} className="shareBtn">Paylaş</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
