import './Item.css'
function Item(props){

    const itemName = props.name;
    return (
        <p className="para">{itemName}</p>
    )
}

export default Item;