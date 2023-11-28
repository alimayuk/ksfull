import React, { useContext } from "react";
import "./AdminCard.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const AdminCard = ({ item }) => {
  const { currentUser, token } = useContext(AuthContext);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/post/${item._id}`, {
        data: { username: currentUser.username, access_token: token },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="AdminCard">
      <img src={`/upload/${item?.photo}`} alt="blog paylaşım fotoğraf" />
      <div className="contact">
        <p>{item.title}</p>
        <p className="catBtn">{item.category}</p>
        {item.category === "blog" && <Link to={`/blogs/${item._id}`}>Gönderi Link</Link>}
       <div className="buttons">
       <Link className="updateBtn" to={`/adminsayfasi?edit=2`} state={item}>Güncelle</Link>
       <button onClick={handleDelete} className="deleteBtn">
          Sil
        </button>
       </div>
      </div>
      
    </div>
  );
};

export default AdminCard;
