import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla}=resData?.info;
    
    return(
        <div className="m-5 p-5 w-[300px] h-[480px] text-center rounded-lg  bg-gray-100  drop-shadow-lg hover:bg-gray-300">
            <img className='rounded-lg w-[300px] h-52' alt="Food Image" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <p>{sla.deliveryTime} minutes</p>
        </div>
    )
};

export default RestaurantCard;