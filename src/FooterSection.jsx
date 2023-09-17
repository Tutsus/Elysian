import './App.css'
import { FaQuoteLeft, FaHandHoldingHeart } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import { PiPackage } from 'react-icons/pi';
import FeedbackImg1 from './assets/First Charactor.jpg'
import FeedbackImg2 from './assets/Second Charactor.jpg';
import FeedbackImg3 from './assets/Third Charactor.jpg';
import Logo from './assets/Logo-01.png';

export default function FooterSection() {

    return (
        <nav className='Footer-Main'>
            <div>
                <p className='Footer-Customer-Say'>What Our Customer Say</p>
            </div>
            <div className='Footer-Customer-Main'>
                <div className='Footer-Customer-Card'>
                    <FaQuoteLeft />
                    <p className='Footer-Customer-Feedback'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='Footer-Customer-Profile'>
                        <img className='Footer-Customer-Img' src={FeedbackImg1} alt="Feedback img" />
                        <p className='Footer-Customer-Name'>Tanjiro Kamado</p>
                    </div>
                </div>
                <div className='Footer-Customer-Card'>
                    <FaQuoteLeft />
                    <p className='Footer-Customer-Feedback'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='Footer-Customer-Profile'>
                        <img className='Footer-Customer-Img' src={FeedbackImg2} alt="Feedback img" />
                        <p className='Footer-Customer-Name'>Zenitsu Agatsuma</p>
                    </div>
                </div>
                <div className='Footer-Customer-Card'>
                    <FaQuoteLeft />
                    <p className='Footer-Customer-Feedback'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='Footer-Customer-Profile'>
                        <img className='Footer-Customer-Img' src={FeedbackImg3} alt="Feedback img" />
                        <p className='Footer-Customer-Name'>Kyōjurō Rengoku</p>
                    </div>
                </div>
            </div>
            <div className='Footer-Service-Main'>
                <div className='Footer-Service-Card'>
                    <div className='Footer-Service-Logo'>
                        <MdPayment className='Footer-Service-Icon' />
                    </div>
                    <div>
                        <p className='Footer-Service-Special'>SECURE PAYMENT</p>
                        <p className='Footer-Service-Sub'>All our payments our SSL secured</p>
                    </div>
                </div>
                <div className='Footer-Service-Card'>
                    <div className='Footer-Service-Logo'>
                        <PiPackage className='Footer-Service-Icon' />
                    </div>
                    <div >
                        <p className='Footer-Service-Special'>DELIVERED WITH CARE</p>
                        <p className='Footer-Service-Sub'>Super fast shipping to your door</p>
                    </div>
                </div>
                <div className='Footer-Service-Card'>
                    <div className='Footer-Service-Logo'>
                        <FaHandHoldingHeart className='Footer-Service-Icon' />
                    </div>
                    <div>
                        <p className='Footer-Service-Special'>EXCELLENT SERVICE</p>
                        <p className='Footer-Service-Sub'>Friendly and fast respone</p>
                    </div>
                </div>
            </div>
            <div className='Footer-Navbar-Main'>
                <li className='Footer-Navbar-Item'><a href="#">HOME</a></li>
                <li className='Footer-Navbar-Item'><a href="#">SHOP</a></li>
                <li className='Footer-Navbar-Item2'><a href="#">ABOUT</a></li>
                <li className='Footer-Navbar-Item2'><a href="#">CONTACT</a></li>
                <a href="#"><img className='Footer-Navbar-Logo' src={Logo} alt="Logo" /></a>
                <li className='Footer-Navbar-Item1'><a href="#">ABOUT</a></li>
                <li className='Footer-Navbar-Item1'><a href="#">CONTACT</a></li>
            </div>
            {/* <div className='Footer-Navbar-List'>
                <li><a className='Footer-Navbar-Link' href="#"><FaFacebook />Tee Zone</a></li>
                <li><a className='Footer-Navbar-Link' href="#"><FaTelegram />Tee Zone</a></li>
                <li><a className='Footer-Navbar-Link' href="#"><FaInstagram />Tee Zone</a></li>
                <li><a className='Footer-Navbar-Link' href="#"><FaTiktok />Tee Zone</a></li>
            </div> */}
        </nav>
    )
}