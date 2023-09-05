import './Header.css';

export default function Header() {

    return (
        <nav className='Header-Main'>
            <div className='Header-Text'>
                <p className='Header-Welcome'>Welcome to</p>
                <img className='Header-Logo' src="src/assets/Logo-01.png" alt="" />
                <p className='Header-Slogan'>"T-shirts speak louder than words."</p>
                <div className='Header-Button'>
                    <a href="#"><button className='Header-Shop' type="button" style={{cursor: "pointer"}}>SHOP NOW!!!</button></a>
                </div>
            </div>
        </nav>
    )
}