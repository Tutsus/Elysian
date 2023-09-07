export default function ShirtComponent() {
    const KillorDie = "src/assets/Black - Kill or Die-03.png";
    const WhiteSkull = "src/assets/Black - White Skull-03.png";
    const DarkGreenPlantnet = "src/assets/Cream - Dark Green Plantnet-03.png";

    return (
    <>
        <div className="Component-Shirt-Parent">
            <img className="Component-Shirt-Img" src={WhiteSkull} alt="Kill or Die" />
            <p className="Component-Shirt-Name">T-Shirt | White Skull</p>
            <p className="Component-Shirt-Price">$8.99</p>
            <button className="Component-Shirt-Button" type="button">Add to cart</button>
        </div>
        <div className="Component-Shirt-Parent">
            <img className="Component-Shirt-Img" src={DarkGreenPlantnet} alt="Kill or Die" />
            <p className="Component-Shirt-Name">T-Shirt | Green Plantnet</p>
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