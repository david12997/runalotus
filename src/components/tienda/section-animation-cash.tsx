import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";


export interface PropsStyleAnimationCash{
    area:string
}
const StyleSectionAnimationCash =  styled.section<PropsStyleAnimationCash>`

    grid-area:${props=>props.area};
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    border-bottom:1px solid ${theme.colors.grayD};
    margin-bottom:20px;

    & > .container-animation{
        display:none;
        @media(min-width:800px){
            display:block;
            margin-top:-60px;
            width:45%;
            height:90%;
            & > .lf-player-container  > .cash-on-delivery{
                height:570px;
            }
        }
    }

    & > .container-info{

        width:90%;
        height:90%;
        @media(min-width:800px){
            width:46%;

        }
        & > .animation-mobile{
            display:block;
            @media(min-width:800px){
                display:none;
            }
        }
        & > .title{
            width:100%;
            font-size:22px;
            font-weight:900;
            text-align:start;
            color:${theme.colors.balck};
            @media(min-width:300px){
                font-size:25px;
            }
            @media(min-width:800px){
                font-size:40px;
                text-align:end;
                margin-top:40px;
            }
            @media(min-width:1450px){
                font-size:45px;
            }
        }
        & > .description{

            font-size:18px;
            font-weight:800;
            height:40px;
            text-align:start;
            display:flex;
            align-items:center;
            justify-content:start;
            color:${theme.colors.secondaryA};
            @media(min-width:300px){
                font-size:20px;
                height:50px;
            }
            @media(min-width:800px){
                font-size:25px;
                text-align:end;
                justify-content:end;
            }
            @media(min-width:1450px){
                font-size:30px
            }
        }
        & > .text{
            font-size:17px;
            font-weight:700;
            color:${theme.colors.grayA};
            text-align:start;
            @media(min-width:800px){
                font-size:18px;
                text-align:end;
                width:90%;
                margin-left:10%;
            }
            @media(min-width:1450px){
                font-size:21px;
            }
        }

        & > .button{
            margin-top:30px;
            display:flex;
            justify-content:center;
            @media(min-width:800px){
                justify-content:end;
            }
            &  div{
                min-width:99%;
                @media(min-width:800px){
                    min-width:250px;
                    
                }
            }
        }


    }
`;

export type PropsSectionAnimationCash = {

    area:string
    animation:any,
    title:string,
    description:string,
    text:string,
    button:JSX.Element
}

export default function SectionAnimationCash(props:PropsSectionAnimationCash):JSX.Element{

    return<StyleSectionAnimationCash area={props.area}>

        <div className="container-animation">
            {props.animation}
        </div>

        <div className="container-info">

            <div className="title">
                {props.title}
            </div>

            <div className="description">
               {props.description}
            </div>

            <div className="animation-mobile">

                {props.animation}

            </div>
            <div className="text">
                {props.text}
            </div>

            <div className="button">
                {props.button}
            </div>
  
        </div>

    </StyleSectionAnimationCash>
}