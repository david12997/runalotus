
import React from "react";
import styled from "styled-components";
import { theme } from "@/../config";


export interface PropsStyleButton1{

    width:string,
    height:string,
    bgColor?:string,
    textColor?:string

}


export const StyleBtn1 = styled.div<PropsStyleButton1>`

    display:flex;
    justify-content:center;

    & > .btn1{
        
        width:${props=>props.width};
        height:${props=>props.height};
        cursor:pointer;
        background:${props=>props.bgColor !== undefined ? props.bgColor : theme.colors.primaryA};
        border-radius:8px;
        display:flex;
        justify-content:center;
        align-items:center;
        color:${props=>props.textColor !== undefined ? props.textColor : theme.colors.white};
        font-weight:700;
        font-size:16px;

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
    minHeight:string,
    click?:()=>void
    icon?:JSX.Element,
    bgColor?:string,
    textColor?:string,
    reference?:React.RefObject<HTMLDivElement>,



}


export default function Button1(props:PropsButton1):JSX.Element{

    return<StyleBtn1 
            onClick={props.click} 
            data-testid="button1-component-test" 
            width={props.minWidth} 
            height={props.minHeight} 
            bgColor={props.bgColor}
            textColor={props.textColor}
        >

        <div ref={props.reference} className="btn1">
            {props.text} {props.icon !== undefined && props.icon }
        </div>
            
    </StyleBtn1>
}
