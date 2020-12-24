import React,{createContext,useState} from 'react'


export const RestaurantContext =createContext();

export function RestaurantContextAPI(props) {

    const [restaurants,setRestaurants]=useState([])
    const[selectedRestaurant,setSelectedResturant]=useState(null)

    const addRestaurants =(restaurant)=>{
        setRestaurants([...restaurants,restaurant])
    }
    return (
        <RestaurantContext.Provider  value={{restaurants,setRestaurants,addRestaurants,selectedRestaurant,setSelectedResturant}}>
            {props.children}
        </RestaurantContext.Provider>
    )
}

 
