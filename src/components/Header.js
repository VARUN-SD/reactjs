import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{

    const [btnName,setbtnName]=useState("Login");

    return (
        <div className="header">
            <div>
                <img className='logo'  src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
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