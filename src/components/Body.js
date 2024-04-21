import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';

const Body = () => {

    // Episode - 05
    // Whenever a state variable updates, React re-renders the component

    // Local state variable - super powerful variable
    const[listOfRestaurants, setListOfRestaurants] = useState(resList);

    // Normal JS Variable
    let listOfRestaurants1 = [
        {
            data:{
                id: '0001',
                name: 'Burger King',
                cloudinaryImageId: "skjadhflwrhwejhf",
                cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
                costForTwo: 400,
                deliveryTime: 36,
                avgRating: '3.9',
            },
        },
        {
            data:{
                id: '0002',
                name: 'Dominos',
                cloudinaryImageId: "skjadhflwrhwejhf",
                cuisines: ['Pizzas', 'Parcels', 'American', 'Snacks', 'Fast Food'],
                costForTwo: 600,
                deliveryTime: 30,
                avgRating: '4.8',
            },
        },
    ];

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className='filter-btn'
                    onClick={()=>{
                        filteredList = listOfRestaurants.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map(restaurant => (
                  <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div> 
    );
}

export default Body;