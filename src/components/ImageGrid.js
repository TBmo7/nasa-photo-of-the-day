
import React, {useState, useEffect} from "react";
import axios from "axios";
import ImageCard from "./ImageCard";

import "./ImageGrid.css";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
//this will hold all the information for the cards and pass it down to the card builder
//API KEY === https://api.nasa.gov/planetary/apod?api_key=PYAWRbza2lzP1tDeWZAjaPrCv3Q4FuP0vChnRbBU

const CardGridDiv = styled.div `
    background-image: url(./img/cosmicSky.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
`;
const ButtonHolder = styled.div `
    display:flex;
    background-color:#0D273E;
    height:100px;
    width:95%;
    margin:3%;
    justify-content:space-around;
    align-items:center;

`;

export default function ImageGrid() {
    //get the data from the API
    const [nasaData, setNasaData] = useState([]);
    //get the image data
    const [image, setImage] = useState("image");
    //get the description
    const [description, setDescription] = useState("description");
    //get the title
    const [title, setTitle] = useState("Title");
    //get the date of the data
    const [date,setDate] = useState("date");
    //get the owner
    const [owner, setOwner] = useState('owner');
    //allow the date to be changed
    function dateFetcher(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
            if(dd<10){
                dd= '0' + dd;
                    }
            if (mm<10){
                mm = "0"+ mm;
                    }
                    var today = yyyy+'-'+mm+'-'+dd;
                    return today;
    }
    //function gets todays date and formats it for correct input, can use later so that we can increment days                        
    const [pickDate,setPickDate] = useState(dateFetcher());
    const [dateIncrement, setDateIncrement] = useState(0);
    /*function datePlus(){
        dateIncrement ++;
    }
    function  dateMinus(){
        setDateIncrement(-1)  ;
    }*/
    
    function dateChanger(num){
        
        var today = new Date();
        var dd = today.getDate()+ num;
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
            if(dd<1){
                dd=31+num;
                mm--;
            }
            if(mm<1){
                yyyy--;
                mm=12;
            }
            if(dd<10){
                dd= '0' + dd;
                    }
            if (mm<10){
                mm = "0"+ mm;
                    }
                    var today = yyyy+'-'+mm+'-'+dd;

                    
                    return today;
    }
    
    

    useEffect(()=>{
        //getting data here
        console.log("api request");
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=PYAWRbza2lzP1tDeWZAjaPrCv3Q4FuP0vChnRbBU&date=${pickDate}`)
        .then(response =>{
            console.log("setting new data");
            setNasaData(response.data);
            //set the date from the API input
            console.log(response);
            setTitle(response.data.title);
            //set the title of the photo from the API input
            setDescription(response.data.explanation);
            //set the description from the API input
            setImage(response.data.url);
            //set the image URL from the API input
            setDate(response.data.date);
            //set the date of the image from the API input
            setOwner(response.data.copyright);
            //set the owner of the image from the API input
        })
        .catch(error=>console.log(error));
    },[pickDate])

    

  


return (

    <CardGridDiv>
         
       
       <ImageCard image = {image} description = {description} title = {title} date = {date} owner = {owner}  />
       <ButtonHolder>
       <button onClick = {e=> setDateIncrement(dateIncrement+1)}>Increment date +1</button>
       <button onClick = {e=> setPickDate(dateChanger(dateIncrement))}> Refresh Page</button>
       <button onClick = {e=> setDateIncrement(dateIncrement-1)}>Decrease date -1</button>
        </ButtonHolder>
    </CardGridDiv>
)




}
