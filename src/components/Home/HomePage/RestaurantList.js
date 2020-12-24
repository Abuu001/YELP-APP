import React  ,{useEffect,useContext}from 'react'
import { useHistory } from 'react-router-dom'
import { RestaurantContext } from '../../../context/RestaurantContextAPI'


function RestaurantList() {
   const {restaurants,setRestaurants}=useContext(RestaurantContext)
    const history = useHistory();

    useEffect(()=>{

        const getRestaurants= async ()=>{
            try {
             const response =  await fetch("http://localhost:3004/api/v1/restaurants")
             const results= await response.json();
            
             setRestaurants(results.data.restaurants)
             
             console.log(results);
            } catch (error) {
                console.log(error.message);
            }
            
        } 

        getRestaurants()
    },[])

    const handleDelete= async(e,id)=>{
        e.stopPropagation()
        try {
          const response = await   fetch(`http://localhost:3004/api/v1/restaurants/${id}`,{
                method: "DELETE",
            })

            setRestaurants(restaurants.filter(restaurant=>{   
              return  restaurant.id !== id
            }))
        } catch (error) {
            console.log(error.message);
        }

        window.location="/";
    }

    const handleUpdate =(e,id)=>{
        e.stopPropagation()
        history.push(`/restaurants/${id}/update`);
    }

    const handleRestaurantSelect=(id)=>{
        history.push(`/restaurants/${id}`)
    }

    const list =restaurants.map(restaurant=>(
        <tr key={restaurant.id}  onClick={()=>handleRestaurantSelect(restaurant.id)}>
            <td>{restaurant.name}</td>
            <td>{restaurant.location}</td>
            <td>{"⭐".repeat(restaurant.price_range)}</td>
            <td>⭐⭐</td>
            <td><button  className="btn btn-warning" onClick={(e)=>handleUpdate(e,restaurant.id)}>Update</button></td>
            <td><button  className="btn btn-danger" onClick={(e)=>handleDelete(e,restaurant.id)}>Delete</button></td>
        </tr>
    ))
    return (
        <div>
            <table className="table table-dark table-borderless table-hover">
                <thead>
                    <tr  className="bg-primary" >
                        <th  scope="col">Restaurants</th>
                        <th  scope="col">Location</th>
                        <th  scope="col">Price Range</th>
                        <th  scope="col">Ratings</th>
                        <th  scope="col">Edit</th>
                        <th  scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList
