import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Body=()=>{

    const [ListOfRestaurants,setListOfRestaurants]=useState([]);  //original list of restaurants

    const [filteredRestaurants,setfilteredRestaurants]=useState([]);  //copy of list of restaurants

    const [searchtext,setsearchtext]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(API_URL);
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
                   const searchedrestaurant= ListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                   setfilteredRestaurants(searchedrestaurant);
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
                   filteredRestaurants.map((res) =>(
                  <Link key={res.info.id} to={"/restaurants/"+res.info.id}> <RestaurantCard resData={res}/></Link>))
                }
            </div>
        </div>
    );
};

export default Body;