import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{

    const [btnName,setbtnName]=useState("Login");

    const Onlinestatus=useOnlineStatus();

    const {loggedInUser}=useContext(UserContext);

    //Selector Hook -Subscribing to the store using the Selector
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between mb-2 bg-pink-100 shadow-xl sm:bg-sky-100 lg:bg-green-100">
            <div>
                <img className="w-48"  src={LOGO_URL}/>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{Onlinestatus?"📶":"🚫"}</li>
                    <li className="px-4"><NavLink to="/" title="Home">Home</NavLink></li>
                    <li className="px-4"><NavLink to="/About">About</NavLink></li>
                    <li className="px-4"><NavLink to="/Contact">Contact Us</NavLink></li>
                    <li className="px-4"><NavLink to="/grocery">Grocery</NavLink></li>
                    <li className="px-4 font-semibold"><NavLink to="/cart">Cart-({cartItems.length} items)</NavLink></li>
                    <button className="login" onClick={()=>{
                        setbtnName(btnName==="Login"?"Logout":"Login");
                    }}>{btnName}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;