import { BrowserRouter as Router, Route, Outlet, Routes } from "react-router-dom";
import './App.css';
import AdminNavbar from './layout/AdminNavbar';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ServicePage from "./pages/ServicePage";
import BlogsPage from "./pages/BlogsPage";
import Projects from "./pages/Projects";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";
import AllPost from "./pages/AllPost";

function App() {
  const {currentUser} = useContext(AuthContext)
  const Layout = () =>{
    return (
      <div className='app'>
        <Navbar />
        <Outlet/>
        <Footer />
      </div>
    )
  }
  const AdminLayout = () =>{
    return (
      <div className='app'>
        <AdminNavbar />
        <Outlet/>
      </div>
    )
  }
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/hizmetler" element={<ServicePage />} />
        <Route path="/hakkimizda" element={<AboutUs />} />
        <Route path="/projeler" element={<Projects />} />
        <Route path="/iletişim" element={<Contact />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Route> 
      <Route path="/" element={<AdminLayout/>}>
      <Route path="/adminsayfasi" element={currentUser ? <AdminPage/> : <Login/>}/>
      <Route path="/admingiriş" element={currentUser ? <AdminPage/> : <Login/>}/>
      <Route path="/admintumpaylasim" element={currentUser ? <AllPost/> : <Login/>}/>
    </Route>
    </Routes>
  </Router>
  );
}

export default App;
