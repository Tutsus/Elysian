import './App.css'
import ShirtComponent from './ShirtComponent'
import KillorDie from "./assets/Black - Kill or Die-03.png";
import WhiteSkull from "./assets/Black - White Skull-03.png";
import PubStreet from "./assets/Black - Pub Street-03.png";

export default function ProductsSection() {
    return (
        <nav className='Products-Section'>
            <div>
                <p className='Products-BrandNewTee'>Brand New Tee</p>
            </div>
            <div className='Component-Products'>
                <ShirtComponent img={KillorDie} name={"Kill or Die"}/>
                <ShirtComponent img={WhiteSkull} name={"White Skull"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
            </div>
            <button className="Products-Button" type="button">Tee Zone is here!!</button>
        </nav>
    );
}