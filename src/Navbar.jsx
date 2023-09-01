import { FaShoppingBasket, FaFacebook, FaGithub, FaInstagram, FaTiktok, FaTelegram, FaTimes } from 'react-icons/fa';
import { RiMenuLine } from "react-icons/ri";
import { useState } from 'react';
import Logo from "./assets/Logo-04.png";
import './Navbar.css'

export default function Navbar() {
    const [navbarToggle, setNavbarToggle] = useState(false);
    const [cartToggle, setCartToggle] = useState(false);

    function handleNavbar() {
        setNavbarToggle(!navbarToggle);
    }

    function handleCart() {
        setCartToggle(!cartToggle);
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
                    <li onClick={handleCart} className='Navbar-Item'><a href="#">< FaShoppingBasket size={32} color='#FAF1E4' className='Navbar-Icon'/></a></li>
                </ul>
                <ul className='Navbar-Menu'>
                    <li onClick={handleCart} className='Navbar-Item'><a href="#">< FaShoppingBasket size={32} color='#FAF1E4' className='Navbar-Icon'/></a></li>
                    <li onClick={handleNavbar} className='Navbar-Item'><a href="#">< RiMenuLine size={32} color='#FAF1E4' className='Navbar-Icon'/></a></li>
                </ul>
            </div>
            <div className={navbarToggle ? 'Side-Open' : 'Side-Close'}>
                <div className='Side-Menu'>
                    <img className='Side-Logo' src={Logo} alt="Logo" />
                    <li onClick={handleNavbar}><a href="#">< FaTimes size={32} color='#FAF1E4' className='Side-Icon'/></a></li>
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
            <div className={cartToggle ? 'Cart-Open' : 'Cart-Close'}>
                <ul className='Cart-Menu'>
                    <h1>Shopping Cart</h1>
                    <li onClick={handleCart}><a href="#">< FaTimes size={32} color='#FAF1E4' className='Cart-Icon'/></a></li>
                </ul>
                <div className='Cart-Button'>
                    <button className='Cart-Continue' type="button"><a href="#">CONTINUE SHOPPING</a></button>
                </div>
            </div>                                                                                                                                                                                                                                          
        </nav>
    )
}

// Add hover to every texts, Button, Icon
// Add transition to Cart and Side

//Poster
//Change tam feedback b Kimchu
//Create a countdown poster