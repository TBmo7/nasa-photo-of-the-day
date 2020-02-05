
import React, {useState, useEffect} from "react";
import axios from "axios";
import ImageCard from "./ImageCard";

//this will hold all the information for the cards and pass it down to the card builder
//API KEY === https://api.nasa.gov/planetary/apod?api_key=PYAWRbza2lzP1tDeWZAjaPrCv3Q4FuP0vChnRbBU

export default function ImageGrid() {
    //get the data from the API
    const [nasaData, setNasaData] = useState([]);
    //get the image data
    const [image, setImage] = useState("image");
    //get the description
    const [description, setDescription] = useState("description");
    //get the title
    const [title, setTitle] = useState("Title");
    //get the date
    const [date,setDate] = useState("date");
    //get the owner
    const [owner, setOwner] = useState('owner')

    useEffect(()=>{
        //getting data here
        console.log("api request");
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=PYAWRbza2lzP1tDeWZAjaPrCv3Q4FuP0vChnRbBU')
        .then(response =>{
            console.log("setting new data");
            setNasaData(response.data);
            console.log(response.data);
            setTitle(response.data.title);
            setDescription(response.data.explanation);
            setImage(response.data.url);
            setDate(response.data.date);
            setOwner(response.data.copyright);
        })
        .catch(error=>console.log(error));
    },[/*looking for a change here, will decide what to look for  */])


return (

    <div>
        Something be here
       {nasaData.date}
       <ImageCard image = {image} description = {description} title = {title} date = {date} owner = {owner}  />
       
      
    </div>
)




}
