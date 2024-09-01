import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const cartdata=useSelector((store)=>store.cart.items); //Note:Always subscribe to  a small portion of the store(bcoz it is more efficient)

    const dispatch =useDispatch();

    const handleClearCart=()=>{
        // Dispatch action to clear cart
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart Page</h1>
            <div className="w-6/12 m-auto">
            <button className="m-2 p-1 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            {cartdata.length===0 && (<h1>Cart is Empty. Add items to the Cart!</h1>)}
                <ItemList items={cartdata}/>
            </div>
        </div>
    )
};

export default Cart;