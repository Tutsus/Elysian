import { useState } from 'react';

export default function ShirtComponent({img, name}) {

    const [teeNum, setTeeNum] = useState(1);
    const [totalTeeNum, setTotalTeeNum] = useState(0);

    function handleTeeNum() {
        setTeeNum(teeNum + 1);
        setTotalTeeNum(totalTeeNum + teeNum);
        console.log(totalTeeNum);
    }

    return (

    

    <>
        <div className="Component-Shirt-Parent">
            <img className="Component-Shirt-Img" src={img} alt="Kill or Die" />
            <p className="Component-Shirt-Name">T-Shirt | {name}</p>
            <p className="Component-Shirt-Price">$8.99</p>
            <button className="Component-Shirt-Button" onClick={handleTeeNum} type="button" style={{cursor: "pointer"}}>Add to cart</button>
        </div>
    </>
    )
}