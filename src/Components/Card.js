import { useState } from "react"

function Card({id,name,image,info,price,removeTour}){

    const [Readmore, setReadmore] = useState(false)
    let description=Readmore ? info:`${info.substring(0,200)}...`;
    function readmoreHandler(){
        setReadmore(!Readmore)
    }
   
    return(
<div className="card">
    <img src={image} className="image"></img>
    <div className="tour-info">
    <div className="tour-details">
        <h4 className="tour-price">{price}</h4>
        <h4 className="tour-name">{name}</h4>
     
    </div>
    <div className="description">
        {description}
         <span className="read-more" onClick={readmoreHandler}>
            {Readmore ? `show less`:`read more`}
        </span>
     
    </div>
    <buttton onClick={()=>removeTour(id)} className="btn">Not Interested</buttton>
   
    </div>
    


</div>
    )
}
export default Card