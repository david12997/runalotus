
import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";


export interface PropsStyleButton1{

    width:string,
    height:string

}


export const StyleBtn1 = styled.div<PropsStyleButton1>`

    display:flex;
    justify-content:center;

    & > .btn1{
        
        width:${props=>props.width};
        height:${props=>props.height};
        cursor:pointer;
        background:${theme.colors.primaryA};
        border-radius:8px;
        display:flex;
        justify-content:center;
        align-items:center;
        color:${theme.colors.white};
        font-weight:700;
        font-size:17px;

        @media(min-width:800px){
            width:calc(${props=>props.width} + 90px); //+90px
            height:calc(${props=>props.height} + 10px);    //+10px
            font-size:18px;
        }

        @media(min-width:1460px){
            width:calc(${props=>props.width} + 150px);  //+150px
            height:calc(${props=>props.height} + 20px);   //+20px
            font-size:20px;
        }

    }



`;

export type PropsButton1 ={

    text:string,
    minWidth:string,
    minHeight:string

}


export default function Button1(props:PropsButton1):JSX.Element{

    return<StyleBtn1 data-testid="button-1" width={props.minWidth} height={props.minHeight}>

        <div className="btn1">
            {props.text}
        </div>
            
    </StyleBtn1>
}
