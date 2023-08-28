import { FaShoppingBasket } from 'react-icons/fa';
import { LuAlignJustify } from "react-icons/lu";
import Logo from "./assets/Logo-04.png";

export default function Navbar() {
    return(
        <>
            <nav className='Navbar-Overall'>
                <img className='Navbar-Logo' src={Logo} alt="Logo" />
                <ul className='Navbar-List'>
                    <li className='Navbar-Item'><a href="#">HOME</a></li>
                    <li className='Navbar-Item'><a href="#">SHOP</a></li>
                    <li className='Navbar-Item'><a href="#">ABOUT</a></li>
                    <li className='Navbar-Item'><a href="#">CONTACT</a></li>
                    <li className='Navbar-Item'><a href="#">< FaShoppingBasket size={32} color='#FAF1E4' className='Navbar-Icon'/></a></li>
                </ul>
                <ul className='Navbar-Menu'>
                    <li className='Navbar-Item'><a href="#">< FaShoppingBasket size={32} color='#FAF1E4' className='Navbar-Icon'/></a></li>
                    <li className='Navbar-Item'><a href="#">< LuAlignJustify size={32} color='#FAF1E4' className='Navbar-Icon'/></a></li>
                </ul>
            </nav>
        </>
    )
}