import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

    const [btnName,setbtnName]=useState("Login");

    const Onlinestatus=useOnlineStatus();

    return (
        <div className="flex justify-between mb-2 bg-pink-100 shadow-xl sm:bg-sky-100 lg:bg-green-100">
            <div>
                <img className="w-48"  src={LOGO_URL}/>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{Onlinestatus?"📶":"🚫"}</li>
                    <li className="px-4"><Link to="/" title="Home">Home</Link></li>
                    <li className="px-4"><Link to="/About">About</Link></li>
                    <li className="px-4"><Link to="/Contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={()=>{
                        setbtnName(btnName==="Login"?"Logout":"Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;