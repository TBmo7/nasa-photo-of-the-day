import React, {useState, useEffect} from "react";
import styled from "styled-components";



const TopBarDiv = styled.div `
    width:95%;
    display:flex;
    justify-content:center;
    align-items:center;
    height:40px;
    margin: 3%;
    background-color:#0D273E;
    color:white;
    background-size:cover;
    

`;
const TopBarP = styled.p `
    margin:2%;


`;


const TopBar = () => {

    return (

        <TopBarDiv>
            
            <TopBarP>NASA image of the day</TopBarP>
            
        </TopBarDiv>

    )
}

export default TopBar;