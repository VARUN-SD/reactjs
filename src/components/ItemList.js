import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addToCart } from "../utils/cartSlice";

const ItemList=({items})=>{

    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
        //add the item to the user's cart
        dispatch(addToCart(item));
    }

    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-4 m-2 border-gray-300 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <h2 className="font-semibold" >{item.card.info.name}</h2>
                        <h2 className="font-semibold" >₹{item.card.info.defaultPrice/100 ||item.card.info.price/100}</h2>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div>
                    <div className="absolute w-3/12">
                    <button className=" p-2 px-5 bg-white text-green-600 rounded-lg mx-3 my-16 border border-gray-300"
                    onClick={()=>handleAddItem(item)}>ADD</button>    {/**callback function-handleAddItem */}
                    </div>
                    <img className="w-24 h-24 object-cover rounded-md" src={CDN_URL+item.card.info.imageId}/>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ItemList;