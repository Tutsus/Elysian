import KillorDie from "./assets/Black - Kill or Die-03.png";
import WhiteSkull from "./assets/Black - White Skull-03.png";
import PubStreet from "./assets/Black - Pub Street-03.png";

export default function ShirtComponent() {

    return (
    <>
        <div className="Component-Shirt-Parent">
            <img className="Component-Shirt-Img" src={WhiteSkull} alt="Kill or Die" />
            <p className="Component-Shirt-Name">T-Shirt | White Skull</p>
            <p className="Component-Shirt-Price">$8.99</p>
            <button className="Component-Shirt-Button" type="button">Add to cart</button>
        </div>
        <div className="Component-Shirt-Parent">
            <img className="Component-Shirt-Img" src={PubStreet} alt="Pub Street" />
            <p className="Component-Shirt-Name">T-Shirt | Pub Street</p>
            <p className="Component-Shirt-Price">$8.99</p>
            <button className="Component-Shirt-Button" type="button">Add to cart</button>
        </div>
        <div className="Component-Shirt-Parent">
            <img className="Component-Shirt-Img" src={KillorDie} alt="Kill or Die" />
            <p className="Component-Shirt-Name">T-Shirt | Kill or Die</p>
            <p className="Component-Shirt-Price">$8.99</p>
            <button className="Component-Shirt-Button" type="button">Add to cart</button>
        </div>
    </>
    )
}