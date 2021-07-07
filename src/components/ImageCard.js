import React from "react";
import "./ImageCard.css";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';



//build the card here, have to style card with appropriate css
const CardDiv = styled.div `
    width:95%;
    height:95%;
    margin:3%;
    background-color: #e6f2ff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media (min-width:401px){

    }
    
    `;
const CardImage = styled.img `
    margin:5%;
    width:80%;
    hieght:20%;
    @media (max-width:401px){
        max-width:350px;

    }
    @media (max-width:601px){
        
    }
`;
const CardPara = styled.p `
    margin:3%;

`;    
const CardH3 = styled.h3 `
    margin:3%
`;
    

const ImageCard = props =>{

    return (

        <CardDiv>
               
        
         
         <CardH3>{props.date}</CardH3>
         <h4>{props.owner}</h4>
         <CardImage src = {props.image} />
         <h2>{props.title} </h2>
        
         <CardPara>{props.description}</CardPara>

        </CardDiv>

    )

}
export default ImageCard;
