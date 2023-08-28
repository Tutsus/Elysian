import { FaShoppingBasket } from 'react-icons/fa';

export default function Navbar() {
    return(
        <>
            <h1>ELYSIAN STORE</h1>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SHOP</li>
                <li>CONTACT</li>
                <li><FaShoppingBasket /></li>
            </ul>
        </>
    )
}