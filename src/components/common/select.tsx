import React from "react";
import styled from "styled-components";
import { theme } from "@/../config";

const StyleSelect = styled.div`

    width:70%;
    margin-left:25%;
    margin-top:5%;
    height:100px;

    & > label{
        display:block;
        width:100%;
        height:25%;
        font-weight:700;
        font-size:17px;
    }

    &  > select {

        display:block;
        width:100%;
        height:40%;
        color:${theme.colors.grayA};
        border:0.5px solid ${theme.colors.grayB};
        font-size:17px;
        border-radius:6px;

    }

    & > small{

        color:${theme.colors.primaryA};
    }

    @media(min-width:800px){

        label{
            font-size:19px;
            height:30%;
        }

        select{
            height:48%;
        }
    }

    @media(min-width:1480px){
        label{
            font-size:22px;
            height:35%;
        }

        select{
            height:53%;
            font-size:20px;
        }
    }


`;

export type PropsSelect ={

    label:string,
    options:string[],
    message:string
}

export default function Select(props:PropsSelect):JSX.Element{


    return<StyleSelect>

        <label>{props.label}</label>

        <select>
            {
                props.options.map((elem:string,index:number)=><option value={elem} key={index} > {elem}</option>)
            }
        </select>
        
        <small>{props.message}</small>

    </StyleSelect>
}