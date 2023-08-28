import { FaShoppingBasket } from 'react-icons/fa';
import { PiFlyingSaucerBold } from 'react-icons/pi';

export default function Navbar() {
    return(
        <>
            <nav className='Navbar'>
                <div className='Navbar-Logo'>
                    <h1><PiFlyingSaucerBold /></h1>
                    <h1>ELYSIAN STORE</h1>
                </div>
                <ul className='Navbar-List'>
                    <li className='Navbar-Item'>HOME</li>
                    <li className='Navbar-Item'>ABOUT</li>
                    <li className='Navbar-Item'>SHOP</li>
                    <li className='Navbar-Item'>CONTACT</li>
                    <li className='Navbar-Item'><FaShoppingBasket /></li>
                </ul>
            </nav>
        </>
    )
}