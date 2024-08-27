import {useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [menuItems, setmenuItems]=useState("");  //original list of restaurants
    useEffect(()=>fetchMenu(),[]);
    const fetchMenu=async()=>{
        const data= await fetch(MENU_API_URL+resId);
        const json=await data.json();
        console.log(json);
        setmenuItems(json.data);
         //updating the menuItems state with fetched data from API.
    }
    return menuItems;  //returns the fetched menu items.
};

export default useRestaurantMenu;