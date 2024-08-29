import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState,useEffect } from "react";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu=()=>{
    const [menuItems,setmenuItems]=useState("");

    const {resId}=useParams();

    useEffect(()=>{fetchMenu()},[]);
    const fetchMenu=async()=>{
        const data= await fetch(MENU_API_URL+resId);
        const json=await data.json();
        console.log(json); 
        setmenuItems(json.data);
         //updating the menuItems state with fetched data from API.
    };

    const [showIndex,setShowIndex]=useState(null);


    if(!menuItems) return (<Shimmer/>);  //loading spinner until menuItems are fetched.

    const {name,cuisines,costForTwoMessage}=menuItems?.cards[2]?.card?.card?.info;
    const {itemCards}=menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories=menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category,index)=>(
                <RestaurantCategory 
                key={category.card.card.title} 
                data={category.card.card} 
                showItems={index===showIndex? true:false}
                setShowIndex={()=>setShowIndex(index)? true:false}
                />))}
        </div>
    )
};

export default RestaurantMenu;