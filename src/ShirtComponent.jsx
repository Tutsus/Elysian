

export default function ShirtComponent({img, name}) {

    return (
    <>
        <div className="Component-Shirt-Parent">
            <img className="Component-Shirt-Img" src={img} alt="Kill or Die" />
            <p className="Component-Shirt-Name">T-Shirt | {name}</p>
            <p className="Component-Shirt-Price">$8.99</p>
            <button className="Component-Shirt-Button" type="button" style={{cursor: "pointer"}}>Add to cart</button>
        </div>
    </>
    )
}