
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
    const [description, setDecription] = useState("description");
    //get the title
    const [title, setTitle] = useState("Title");

    useEffect(()=>{
        //getting data here
        console.log("api request");
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=PYAWRbza2lzP1tDeWZAjaPrCv3Q4FuP0vChnRbBU')
        .then(response =>{
            console.log("setting new data");
            setNasaData(response.data);
            console.log(response.data);
        })
        .catch(error=>console.log(error));
    },[/*looking for a change here, will decide what to look for  */])


return (

    <div>
        Something be here
       {nasaData.date}
       <ImageCard image = {image} description = {description} title = {title}  />
      
    </div>
)




}