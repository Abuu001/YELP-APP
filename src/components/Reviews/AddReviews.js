import React,{useState} from 'react'
import { useParams} from "react-router-dom";

function AddReviews() {
    const [name,setName] =useState("")
    const [review,setReviewText] =useState("")
    const [rating,setRating] =useState("");
    const {id} =useParams();


    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const   body={
                name,
                review ,
                rating
            }
            const response = await fetch(`http://localhost:3004/api/v1/restaurants/${id}/reviews`,{
                method : "POST",
                headers :{"Content-Type":"application/json"},
                body : JSON.stringify(body)
            })
            setName('')
            setReviewText('')
            setRating('')

            window.location="/"
        } catch (error) {
                console.log(error.message);
        }
    
    }

    return (
        <div  className="mb-2">
            <form className="form-row">
                <div className="form-group col-8">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Name" className="form-control" value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div className="form-group col-4">
                <label htmlFor="rating">Rating</label>
                <select id="rating" className="custom-select" onClick={e=>setRating(e.target.value)}>
                            <option disabled>Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                </select>
                </div>
                <div className="form-group">
                <label htmlFor="review">Review</label>
                <textarea id="review"
                  className="form-control "  
                  value={review} 
                  onChange={e=>setReviewText(e.target.value)}></textarea>
                </div>
                <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default AddReviews
