import { Link } from 'react-router-dom'
import { useEffect, useRef, useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./css/navbar.css"

const Navbar = () => {
    const navRef = useRef();
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
	  const updateWindowSize = () => {
		setIsMobile(window.innerWidth <= 1024);
	  };
  
	  window.addEventListener('resize', updateWindowSize);
	  updateWindowSize();
  
	  return () => window.removeEventListener('resize', updateWindowSize);
	}, []);
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <header className="headerNav">
			<div className="container">
            <Link to="/" className="logo">
            <p className="logoText">KAH YAZILIM</p>
            </Link>
			<nav className="nav" ref={navRef}>
				<div className="navLinks">
                <Link className="navLink" to="/hizmetler" onClick={showNavbar} >Hizmetler</Link>
                <Link className="navLink" to="/hakkimizda" onClick={showNavbar} >Hakkımızda</Link>
				<Link className="navLink" to="/projeler" onClick={showNavbar} >Porojeler </Link>
                <Link className="navLink" to="/blogs" onClick={showNavbar} >Yazılar</Link>
				{isMobile && <Link className='contactBtn' to="/iletişim" onClick={showNavbar} >İletişim</Link>}
                </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
            <Link className='contactBtn contactWeb' to="/iletişim" onClick={showNavbar} >İletişim</Link>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
            </div>
		</header>
  )
}

export default Navbar