import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{

    const [btnName,setbtnName]=useState("Login");

    return (
        <div className="header">
            <div>
                <img className='logo'  src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About </li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        setbtnName(btnName==="Login"?"Logout":"Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;