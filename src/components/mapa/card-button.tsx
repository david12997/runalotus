import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";
import { type } from "os";


const StyleCardButtonMap = styled.div`

    width:95%;
    min-width:80px;
    height:120px;
    background:${theme.colors.white};
    margin-top:10px;
    margin-bottom:15px;
    border-radius:8px;
    box-shadow:0px 0px 5px ${theme.colors.grayA};
    position:relative;
    display:flex;
    justify-content:center;
    align-items:start;
    cursor:pointer;
    @media(min-width:600px){
        margin-left:5%;    
        width:90%;
        height:130px;
        margin-top:5px;
        margin-bottom:30px;


    }
    @media(min-width:800px){    
        height:150px;
    }

    & > img{
        height:70%;
        margin-top:5px;
    }

    & > .text{

        position:absolute;
        top:80%;
        font-size:12px;
        font-weight:800;
        color:${theme.colors.balck};
        @media(min-width:330px){
            font-size:15px;
        }
        @media(min-width:800px)´{
            font-size:18px; 
        }

    }

`;

type PropsCardButtonMap ={

    img:string,
    text:string
}

export default function CardButtonMap(props:PropsCardButtonMap):JSX.Element{

    return<StyleCardButtonMap>

        <img src={theme.data_domain+props.img} />
        <div className="text">
            {props.text}
        </div>
    </StyleCardButtonMap>
}