import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


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
    
    const onlinestatus=useOnlineStatus();
    
    if(!onlinestatus) return <h1>You are offline. Please check your internet connection.</h1>  //display message when user is offline.

    return   ListOfRestaurants.length===0?(<Shimmer/>):  (
        <div className="body">
            <div className="flex justify-center">
                <div >
                    <input type="text" className=" p-1 border border-solid border-black"
                     value={searchtext} onChange={(e)=>{
                        setsearchtext(e.target.value);
                     }} placeholder="Search for a Restaurant..." />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        const searchedrestaurant= ListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                        setfilteredRestaurants(searchedrestaurant);
                    }} >Search</button>
                </div>
                <div className='filter'>
                    <button className="mt-4 p-2 bg-orange-100 rounded-lg "
                    onClick={()=>{
                        const topratedlist=ListOfRestaurants.filter(
                            (res)=>res.info.avgRatingString>4);
                            setfilteredRestaurants(topratedlist);
                        }} >Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {
                   filteredRestaurants.map((res) =>(
                   <Link key={res.info.id} to={"/restaurants/"+res.info.id}> <RestaurantCard resData={res}/></Link>))
                }
            </div>
        </div>
    );
};

export default Body;