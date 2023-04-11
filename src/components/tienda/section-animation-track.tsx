import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";

export interface PropsStyleAnimationTrack{
    area:string
}
const StyleAnmationTrack =  styled.section<PropsStyleAnimationTrack>`

    grid-area:${props=>props.area};
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    margin-bottom:20px;
    @media(min-width:800px){
        margin-bottom:30px;
    }

    & > .container-info{
        width:90%;
        height:90%;
        @media(min-width:800px){
            width:45%;
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
                margin-top:40px;
            }
            @media(min-width:1450px){
                font-size:45px;
            }
        }

        & > .description{
            font-size:18px;
            font-weight:800;
            height:50px;
            text-align:start;
            display:flex;
            align-items:center;
            justify-content:start;
            color:${theme.colors.secondaryA};
            @media(min-width:300px){
                font-size:20px;
                height:56px;
            }
            @media(min-width:800px){
                font-size:25px;
                margin-bottom:5px;
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
            }
            @media(min-width:1450px){
                font-size:21px;
            }
        }

        & > .animation-mobile{
            display:block;
            @media(min-width:800px){
                display:none;
            }
        }

        & > .button{
            margin-top:30px;
            display:flex;
            justify-content:center;
            @media(min-width:800px){
                justify-content:start;
            }
            &  div{
                min-width:99%;
                @media(min-width:800px){
                    min-width:250px;
                    
                }
            }
        }

    }

    & > .container-animation{
        display:none;
        @media(min-width:800px){
            display:block;
            width:42%;
            height:90%;
            & > .lf-player-container{
                position:relative;
            }
            & > .lf-player-container > .track{

                position:absolute;
                width:120%;
                left:-10%;
                top:-60px;
                @media(min-width:1200px){
                    top:-115px;
                    left:-3%;
                }
                @media(min-width:1450px){
                    width:100%;
                    left:5%;
                    top:-130px;
                }
            }
        }
    }



`;

export type PropsSectionAnimationTrack = {

    area:string,
    title:string,
    description:string,
    animation:any,
    text:string,
    button:JSX.Element
}

export default function SectionAnimationTrack(props:PropsSectionAnimationTrack):JSX.Element{

    return<StyleAnmationTrack area={props.area}>
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

        <div className="container-animation">
            {props.animation}
        </div>
    </StyleAnmationTrack>
}