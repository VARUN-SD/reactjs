import {RestaurantCard,withOfferLabel} from "./RestaurantCard";
import { useState ,useEffect,useContext} from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body=()=>{

    const [ListOfRestaurants,setListOfRestaurants]=useState([]);  //original list of restaurants

    const [filteredRestaurants,setfilteredRestaurants]=useState([]);  //copy of list of restaurants

    const [searchtext,setsearchtext]=useState("");

    const RestaurantOffer = withOfferLabel(RestaurantCard);

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
    
    if(!onlinestatus) return <h1 data-testid="status">You are offline. Please check your internet connection.</h1>  //display message when user is offline.

    const {loggedInUser,setuserName}=useContext(UserContext);  //using user context to access user information.

    return   ListOfRestaurants.length===0?(<Shimmer/>):  (
        <div className="body">
            <div className="flex justify-center">
                <div >
                    <input type="text" data-testid="searchInput"
                     className=" p-1 border border-solid border-black"
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
                <div data-testid="username">
                    <label className="pl-2" >Name : </label>
                    <input data-testid="user" className="mt-5 mx-3 p-1 border border-solid border-black" 
                    value={loggedInUser} 
                    onChange={(e)=>{
                        setuserName(e.target.value);  //updating user name when entered.
                    }}/>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {
                   filteredRestaurants.map((res) =>(
                   <Link key={res.info.id} to={"/restaurants/"+res.info.id}>
                    {res.info.aggregatedDiscountInfoV3?<RestaurantOffer resData={res} />:<RestaurantCard resData={res}/>} 
                    </Link>))
                }
            </div>
        </div>
    );
};

export default Body;