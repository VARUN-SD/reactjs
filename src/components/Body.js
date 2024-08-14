import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";
import resList from "../utils/mockdata";

const Body=()=>{

    let [ListOfRestaurants,setListOfRestaurants]=useState(resList);


    return(
        <div className="body">
            <div className='filter'>
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredlist=ListOfRestaurants=ListOfRestaurants.filter(
                        res=>res.info.avgRating>"4.0");
                    setListOfRestaurants(filteredlist);
                }} 
                >Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                   ListOfRestaurants.map((res) => <RestaurantCard key={res.info.id} resData={res}/>)
                }
            </div>
        </div>
    )
};

export default Body;