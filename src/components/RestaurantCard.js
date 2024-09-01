import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

export const RestaurantCard=(props)=>{
    const {resData}=props;

    const {loggedInUser}=useContext(UserContext);

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla}=resData?.info;
    
    return(
        <div data-testid="resCard" className="m-5 p-5 w-[300px] h-[480px] text-center rounded-lg  bg-gray-100  drop-shadow-lg hover:bg-gray-300">
            <img className='rounded-lg w-[300px] h-52' alt="Food Image" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <p>{sla.deliveryTime} minutes</p>
            <p>User : {loggedInUser}</p>
        </div>
    )
};

     //Higher Order Components:
     //Component that takes another component and returns a new component with additional props.

export const withOfferLabel=(RestaurantCard)=>{
    return(props)=>{
        const {resData} = props;
        const {header,subHeader} = resData?.info.aggregatedDiscountInfoV3;
        return(
            <div>
                <label className="absolute mt-48 pl-16 font-bold text-white z-10 rounded-lg">{header} {subHeader}</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
};
