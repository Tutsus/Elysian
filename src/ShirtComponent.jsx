/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function ShirtComponent({item, addItemToCart}) {

    console.log(item);

    return (
    < >
        <div className="Component-Shirt-Parent" style={{cursor: "pointer"}}>
            <img className="Component-Shirt-Img" src={item.img} alt="T-Shirt"/>
            <p className="Component-Shirt-Name">T-Shirt | {item.name}</p>
            <p className="Component-Shirt-Price">${item.price}</p>
            <button className="Component-Shirt-Button" onClick={() => addItemToCart(item)} type="button" style={{cursor: "pointer"}}>Add to cart</button>
        </div>
    </>
    )
}