import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import Shimmer from './Shimmer';

const Body = () => {

    // Episode - 05
    // Whenever a state variable updates, React re-renders the component

    // Local state variable - super powerful variable
    // const[listOfRestaurants, setListOfRestaurants] = useState(resList);
    const[allRestaurants, setAllRestaurants] = useState([]);
    const[searchText, setSearchText] = useState("");
    const[filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {

        try {
            const response = await fetch(
                "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await response.json();

            const checkJsonData = async(jsonData) => {
                for(let i=0; i<jsonData?.data?.cards.length; i++){

                    let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                    if(checkData !== undefined)
                        return checkData;
                }
            }

            const resData = await checkJsonData(json);
            console.log(resData);

            setAllRestaurants(resData);
            setFilteredRestaurants(resData);
        } catch (error) {
            console.log(error);
        }
    } 

    function filterData(searchText, restaurants){
        const res = restaurants.filter((restaurant) => 
            restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        );

        return res;
    }

    const searchData = (searchText, restaurants) => {
        if(searchText !== ""){
            const filteredData = filterData(searchText, restaurants);
            setFilteredRestaurants(filteredData);
        }
        else{
            // setFilteredRestaurants(restaurants);
        }
    }
     
    // Normal JS Variable
    // let listOfRestaurants1 = [
    //     {
    //         data:{
    //             id: '0001',
    //             name: 'Burger King',
    //             cloudinaryImageId: "skjadhflwrhwejhf",
    //             cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
    //             costForTwo: 400,
    //             deliveryTime: 36,
    //             avgRating: '3.9',
    //         },
    //     },
    //     {
    //         data:{
    //             id: '0002',
    //             name: 'Dominos',
    //             cloudinaryImageId: "skjadhflwrhwejhf",
    //             cuisines: ['Pizzas', 'Parcels', 'American', 'Snacks', 'Fast Food'],
    //             costForTwo: 600,
    //             deliveryTime: 30,
    //             avgRating: '4.8',
    //         },
    //     },
    // ];

    return (
        <div className="body">
            <div className="filter">
                <div className='search'>
                    <input 
                        type='text' 
                        className='search-box' 
                        value={searchText} 
                        onChange={(e)=>{setSearchText(e.target.value)}}
                    />
                    <button 
                        onClick={()=>{
                            // Filter the restaurant cards and update the UI
                            searchData(searchText, allRestaurants)
                        }}
                    >
                        Search
                    </button>
                </div>
                <button 
                    className='filter-btn'
                    onClick={()=>{
                        filteredList = listOfRestaurants.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            {allRestaurants?.length === 0 ? (
                <Shimmer />
            ) : (
                <div className="res-container">
                    {filteredRestaurants?.map(restaurant => (
                    <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
                    ))}
                </div>
            )}
        </div> 
    );
}

export default Body;