import { FaShoppingBasket, FaFacebook, FaGithub, FaInstagram, FaTiktok, FaTelegram } from 'react-icons/fa';
import { RiMenuLine } from "react-icons/ri";
import { useState } from 'react';
import Logo from "./assets/Logo-04.png";
import './Navbar.css'

export default function Navbar() {
    const [navbarToggle, setNavbarToggle] = useState(false);

    function handleNavbar() {
        setNavbarToggle(!navbarToggle);
    }

    return(
        <nav>
            <div className='Navbar-Overall'>
                <a href="#"><img className='Navbar-Logo' src={Logo} alt="Logo" /></a>
                <ul className='Navbar-List'>
                    <li className='Navbar-Item'><a href="#">HOME</a></li>
                    <li className='Navbar-Item'><a href="#">SHOP</a></li>
                    <li className='Navbar-Item'><a href="#">ABOUT</a></li>
                    <li className='Navbar-Item'><a href="#">CONTACT</a></li>
                    <li className='Navbar-Item'><a href="#">< FaShoppingBasket size={32} color='#FAF1E4' className='Navbar-Icon'/></a></li>
                </ul>
                <ul className='Navbar-Menu'>
                    <li className='Navbar-Item'><a href="#">< FaShoppingBasket size={32} color='#FAF1E4' className='Navbar-Icon'/></a></li>
                    <li onClick={handleNavbar} className='Navbar-Item'><a href="#">< RiMenuLine size={32} color='#FAF1E4' className='Navbar-Icon'/></a></li>
                </ul>
            </div>
            <div className={navbarToggle ? 'Side-Open' : 'Side-Close'}>
                <ul className='Side-Menu'>
                    <li><a href="#">< FaShoppingBasket size={32} color='#FAF1E4' className='Side-Icon'/></a></li>
                    <li onClick={handleNavbar}><a href="#">< RiMenuLine size={32} color='#FAF1E4' className='Side-Icon'/></a></li>
                </ul>
                <div className='Side-Logo-Design'>
                    <a href="#"><img className='Side-Logo' src={Logo} alt="Logo" /></a>
                </div>
                <div className='Side-List'>
                    <li className='Side-Item'><a href="#">HOME</a></li>
                    <li className='Side-Item'><a href="#">SHOP</a></li>
                    <li className='Side-Item'><a href="#">ABOUT</a></li>
                    <li className='Side-Item'><a href="#">CONTACT</a></li>
                </div>
                <div className='Side-Link-List'>
                    <a className='Side-Link' href="#"><FaFacebook /></a>
                    <a className='Side-Link' href="#"><FaTelegram /></a>
                    <a className='Side-Link' href="#"><FaInstagram /></a>
                    <a className='Side-Link' href="#"><FaTiktok /></a>
                    <a className='Side-Link' href="#"><FaGithub /></a>
                </div>
            </div>
        </nav>
    )
}