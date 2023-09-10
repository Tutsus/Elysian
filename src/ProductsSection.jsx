import './App.css'
import { useState } from 'react';
import ShirtComponent from './ShirtComponent'
import KillorDie from "./assets/Black - Kill or Die-03.png";
import WhiteSkull from "./assets/Black - White Skull-03.png";
import PubStreet from "./assets/Black - Pub Street-03.png";
import GodofLight from "./assets/Black - God of Light-03.png";

export default function ProductsSection() {

    const [teeNum, setTeeNum] = useState(0);

    return (
        <nav className='Products-Section'>
            <div>
                <p className='Products-BrandNewTee'>Brand New Tee</p>
            </div>
            <div className='Component-Products'>
                <ShirtComponent img={KillorDie} name={"Kill or Die"}/>
                <ShirtComponent img={WhiteSkull} name={"White Skull"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
                <ShirtComponent img={GodofLight} name={"God of Light"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
                <ShirtComponent img={PubStreet} name={"Pub Street"}/>
            </div>
        </nav>
    );
}