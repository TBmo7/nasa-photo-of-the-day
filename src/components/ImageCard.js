import React from "react";
//build the card here, have to style card with appropriate css

const ImageCard = props =>{

    return (

        <div>
               
        <p>I am a place holder</p>
         <h2>{props.title} </h2>
         <h3>{props.date}</h3>
         <img src = {props.image} />
        <h3>{props.owner}</h3>
         <p>{props.description}</p>

        </div>

    )

}
export default ImageCard;
