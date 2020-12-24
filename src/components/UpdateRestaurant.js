import React ,{useState,useContext,useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { RestaurantContext } from '../context/RestaurantContextAPI';

function UpdateRestaurant(props) {

    const {restaurants}=useContext(RestaurantContext)
    const {id}=useParams();
    const [name,setName] =useState('');
    const [location,setLocation] =useState('');
    const [price_range,setPriceRange] =useState('')
    const history = useHistory()
  console.log(id);
    useEffect(() => {
      const fetchData= async ()=>{
        const response =  await fetch(`http://localhost:3004/api/v1/restaurants/${id}`) 
        const result = await response.json()

          setName(result.data.restaurants[0].name)
          setLocation(result.data.restaurants[0].location)
          setPriceRange(result.data.restaurants[0].price_range)
      }

      fetchData()
    }, [])

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const body = { name ,location,price_range}
        const updateRestaurant = await fetch(`http://localhost:3004/api/v1/restaurants/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
        })

        history.push('/')
    }
    return (
        <div>
            <h1>{restaurants.name}</h1>
            <form>
                <div  className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name " type="text" className="form-control" value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div  className="form-group">
                    <label htmlFor="location">Location</label>
                    <input id="location " type="text" className="form-control" value={location} onChange={e=>setLocation(e.target.value)}/>
                </div>
                <div  className="form-group">
                    <label htmlFor="price_range">Price Range</label>
                    <input id="price_range " type="number" className="form-control" value={price_range} onChange={e=>setPriceRange(e.target.value)}/>
                </div>
                <div  className="form-group">
                  <button type="submit"  className="btn btn-primary" onClick={handleSubmit}>Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateRestaurant
