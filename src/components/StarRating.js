import React from 'react'

function StarRating({rating}) {
    const stars =[];

    for(let  i=1 ;i<=5; i++ ){
        if(i<= rating){
            stars.push(<i key={i} className="fa fa-star  text-warning" ></i>)
        }else if(i===Math.ceil(rating) && !Number.isInteger(rating)){
            stars.push(<i  key={i} className="fa fa-star-half-o   text-warning" ></i>)
        }else{
            stars.push(<i key={i} className="fa fa-star-o   text-warning"></i>)
        }
    }
    return (
     <>
       {stars} 
     </>
    )
}

export default StarRating
