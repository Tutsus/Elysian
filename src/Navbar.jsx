import { FaShoppingBasket } from 'react-icons/fa';
import { LuAlignJustify } from "react-icons/lu";
import { useState } from 'react';
import './Navbar.css'
import Logo from "./assets/Logo-04.png";



export default function Navbar() {
    const [navbarToggle, setNavbarToggle] = useState(false);

    function handleNavbar() {
        setNavbarToggle(!navbarToggle);
    }

    return(
        <>
            <nav className='Navbar-Overall'>
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
                    <li onClick={handleNavbar} className='Navbar-Item'><a href="#">< LuAlignJustify size={32} color='#FAF1E4' className='Navbar-Icon'/></a></li>
                </ul>
            </nav>
            <nav className={navbarToggle ? 'Side-Open' : 'Side-Close'}>
                <ul className='Side-List'>
                    <li className='Side-Item'>HOME</li>
                    <li className='Side-Item'>SHOP</li>
                    <li className='Side-Item'>ABOUT</li>
                    <li className='Side-Item'>CONTACT</li>
                    <li className='Side-Item'>FEEDBACK</li>
                </ul>
            </nav>
        </>
    )
}