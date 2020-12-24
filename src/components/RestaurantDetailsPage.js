import React ,{useEffect,useContext}from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantContext } from '../context/RestaurantContextAPI'
import AddReviews from './Reviews/AddReviews';
import Reviews from './Reviews/Reviews';

function RestaurantDetailsPage() {
    const {id}=useParams();
    const{selectedRestaurant,setSelectedResturant} =useContext(RestaurantContext)

    useEffect(() => {
       const  fetchData=async ()=>{
           try {
               const response = await fetch(`http://localhost:3004/api/v1/restaurants/${id}`)
               const result = await response.json()
          
               setSelectedResturant(result.data)
           } catch (error) {
               console.log(error.message);
           }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1 className="text-center">{selectedRestaurant.restaurants[0].name}</h1>
           {selectedRestaurant &&     (
               <>  
               <div className="mt-3">
                   <Reviews reviews={selectedRestaurant.reviews}/>
               </div>
                  <AddReviews />
               </>
           )} 
       
        </div>
    )
}

export default RestaurantDetailsPage
