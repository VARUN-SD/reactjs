import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{

    const {resId}=useParams();

    const menuItems=useRestaurantMenu(resId);


    if(!menuItems) return (<Shimmer/>);  //loading spinner until menuItems are fetched.

    const {name,cuisines,costForTwoMessage}=menuItems?.cards[2]?.card?.card?.info;
    const {itemCards}=menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return(
        <div className="grid place-content-center">
            <h1 className="font-bold">{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
            </ul>
        </div>
    )
};

export default RestaurantMenu;