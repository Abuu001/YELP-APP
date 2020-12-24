import React from 'react'
import AddRestaurant from './HomePage/AddRestaurant'
import Header from "./HomePage/Header"
import RestaurantList from './HomePage/RestaurantList'

function Home() {
    return (
        <div>
           <Header />
           <AddRestaurant />
           <RestaurantList />
        </div>
    )
}

export default Home
