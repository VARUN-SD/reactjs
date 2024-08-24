import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu=()=>{

    const [menuItems,setmenuItems]=useState("");  //original list of restaurants
    
    const {resId}=useParams();

    useEffect(()=>{fetchMenu()},[]);
    const fetchMenu=async()=>{
        const data= await fetch(MENU_API_URL+resId);
        const json=await data.json();
        console.log(json); 
        setmenuItems(json.data);
         //updating the menuItems state with fetched data from API.
    };

    if(!menuItems) return (<Shimmer/>);  //loading spinner until menuItems are fetched.

    const {name,cuisines,costForTwoMessage}=menuItems?.cards[2]?.card?.card?.info;
    const {itemCards}=menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return(
        <div className='menu'>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
            </ul>
        </div>
    )
};

export default RestaurantMenu;