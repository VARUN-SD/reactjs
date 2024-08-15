import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

    let [ListOfRestaurants,setListOfRestaurants]=useState([]);  

    const [filteredRestaurants,setfilteredRestaurants]=useState([]);

    const [searchtext,setsearchtext]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.993727&lng=79.605996&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return   ListOfRestaurants.length===0?(<Shimmer/>):  (
        <div className="body">
            <div className="buttons">
            <div className="search">
                <input type="text" className="search-box"
                 value={searchtext} onChange={(e)=>{
                    setsearchtext(e.target.value);
                 }} placeholder="Search for a Restaurant..." />
                <button onClick={()=>{
                   const searchedrest= ListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                   setfilteredRestaurants(searchedrest);
                }} className="btn-search" >Search</button>
            </div>
            <div className='filter'>
                <button className="filter-btn"
                onClick={()=>{
                const topratedlist=ListOfRestaurants.filter(
                       (res)=>res.info.avgRatingString>4);
                    setfilteredRestaurants(topratedlist);
                }} 
                >Top Rated Restaurants</button>
            </div>
            </div>
            <div className='res-container'>
                {
                   filteredRestaurants.map((res) => 
                   <RestaurantCard key={res.info.id} resData={res}/>)
                }
            </div>
        </div>
    );
};

export default Body;