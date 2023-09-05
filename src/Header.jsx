import './Header.css';
import Logo from "./assets/Logo-01.png";

export default function Header() {
    const slogan = '"T-shirts speak louder than words"';
    return (
        <nav className='Header-Main'>
            <div className='Header-Text'>
                <p className='Header-Welcome'>Welcome to</p>
                <img className='Header-Logo' src={Logo} alt="Logo" />
                <p className='Header-Slogan'>{slogan}</p>
                <div className='Header-Button'>
                    <a href="#"><button className='Header-Shop' type="button" style={{cursor: "pointer"}}>SHOP NOW!!!</button></a>
                </div>
            </div>
        </nav>
    )
}