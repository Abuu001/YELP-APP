import React ,{useState,useContext} from 'react'
import { RestaurantContext} from "../../../context/RestaurantContextAPI"

function AddRestaurant() {

    const [name,setName] =useState('')
    const [location,setLocation] =useState('')
    const [priceRange,setPriceRange] =useState('Price Range')

    const {addRestaurants}=useContext(RestaurantContext)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        try {
            const body ={
                name : name,
                location :location ,
                price_range : priceRange
            }
           const response=await fetch("http://localhost:3004/api/v1/restaurants",{
                method :"POST",
                headers : {"Content-Type" : "application/json"},
                body :JSON.stringify(body)
            })
            addRestaurants(response.data.data.restaurants)

        } catch (error) {
            console.log(error.message);
        }
        setPriceRange("Price Range")
        setName('')
        setLocation('')

        window.location="/";
    }
    return (
        <div className="mb-4 ">
            <form className="form-row">
             
                <div  className="col-4">
                        <input type="text" className="form-control" placeholder="name" value={name} onChange={e=>setName(e.target.value)}/>
        
                        <input type="text" className="form-control"  placeholder="location"  value={location} onChange={e=>setLocation(e.target.value)}/>
                 
                        <select  className="custom-select my-1 mr-sm-2"  onClick={e=>setPriceRange(e.target.value)}>
                                <option  disabled  selected>Price Range</option>
                                <option value="1" > ⭐</option>
                                <option value="2" >⭐⭐</option>
                                <option value="3" >⭐⭐⭐</option>
                                <option value="4" >⭐⭐⭐⭐</option>
                                <option value="5" >⭐⭐⭐⭐⭐</option>
                        </select>
                <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Add</button>
                </div>
             
            </form>
        </div>
    )
}

export default AddRestaurant
