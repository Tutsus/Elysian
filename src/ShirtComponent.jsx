export default function ShirtComponent({item}) {

    const {id, img, name} = item;

    return (

    <>
        <div className="Component-Shirt-Parent">
            <img className="Component-Shirt-Img" src={img} />
            <p className="Component-Shirt-Name">T-Shirt | {name}</p>
            <p className="Component-Shirt-Price">$8.99</p>
            <button className="Component-Shirt-Button" type="button" style={{cursor: "pointer"}}>Add to cart</button>
        </div>
    </>
    )
}