import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";


const StyleCardTracker =  styled.div`

    width:100%;
    height:100%;
    margin-left:0;
    background:${theme.colors.white};
    box-shadow:0px 0px 4px rgba(0,0,0,0.4);
    border-radius:6px;
    @media(min-width:800px){
        width:90%;
        height:80%;
    }
    @media(min-width:1420px){
        width:85%;
    }

    & > .empty-view{
        width:90%;
        height:90%;
        padding:16px;


        & > label{
            font-size:18px;
            font-weight:800;
        }
        & > input{
            width:95%;
            height:40px;
            border:2px solid ${theme.colors.grayC};
            background:${theme.colors.grayE};
            border-radius:6px;
            font-size:20px;
            color:${theme.colors.grayA};
            :focus{
               outline:none;
            }
            @media(min-width:800px){
                width:80%;
                height:50px;
            }
        }

        & > small{
            font-weight:700;
            color:${theme.colors.grayB};

        }

        & > .container-button{
            margin-top:30px;
            display:flex;
            justify-content:start;
        }
    }

`;

export  type PropsCardTracker ={
    label:string,
    placeholder:string,
    small:string,
    button:JSX.Element,
}
export const CardTracker = (props:PropsCardTracker):JSX.Element =>{

    return<StyleCardTracker>

    <div className="empty-view">
        
        <label>{props.label}</label>
        <br/>
        <input type="text" placeholder={props.placeholder}/>
        <br/>
        <small>{props.small}</small>
        <br/>
        <div className="container-button">
            {props.button}
        </div>
       
    </div>
 
    
    </StyleCardTracker>
}