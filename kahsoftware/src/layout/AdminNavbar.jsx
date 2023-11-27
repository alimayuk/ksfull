import React, { useContext, useState } from "react";
import "./css/AdminNavbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowDownCircle } from "react-icons/bs";
import { AuthContext } from "../context/authContext";


const AdminNavbar = () => {
  const {logout, currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const handlLogout = async() =>{
    await logout()
    navigate("/")
  }
  const menuItems = [
    {
      title: "Yönetici Sayfası",
      link: "/adminsayfasi",
    },
    {
      title: "Paylaşım Detayları",
      
      subMenu: [
        { title: "Tüm Paylaşımlar", link: "/admintumpaylasim" },
      ],
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [openStates, setOpenStates] = useState(menuItems.map(() => false));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };
  return (
    <div className="adminNav">
      <div className="navContainer">
        <Link to="/adminsayfasi" className="logo">KAH YAZILIM</Link>
       { currentUser && <> <div className="menuIcon" onClick={toggleMenu}>
           <FaBars />
        </div>
        <ul className={isOpen ? "navMenu Active" : "navMenu"}>
          <div className="closeBtn" onClick={toggleMenu}>
          <FaTimes />
          </div>
        {menuItems.map((menuItem, index) => (
  <li className="navItem" key={index}>
    <Link
      to={menuItem.link}
      className={`navLinks ${menuItem.subMenu ? "drop" : ""} ${
        openStates[index] ? "Active" : ""
      }`}
    >
      <span className="menuItemTitle">{menuItem.title}</span>
      {menuItem.subMenu && (
        <span
          className={`dropdownBtn ${openStates[index]}`}
          onClick={(e) => {
            e.preventDefault();
            toggleSubMenu(index);
          }}
        >
          <BsArrowDownCircle className={`dropdownBtn ${openStates[index] ? "rotate" : ""}`} />
        </span>
      )}
    </Link>
    {menuItem.subMenu && (
  <ul className={`dropdownMenu ${openStates[index] ? "Active" : ""}`}>
    {menuItem.subMenu.map((subItem, subIndex) => (
      <li className="dropdownItem" key={subIndex}>
        <Link to={subItem.link} className="navLinks">
          {subItem.title}
        </Link>
      </li>
    ))}
  </ul>
)}
  </li>
))}
<li className="navItem logoutBtn" onClick={handlLogout}>Çıkış Yap</li>
        </ul></>}
      </div>
    </div>
  );
};

export default AdminNavbar;