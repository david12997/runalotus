import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";


export interface PropsStyleSectionTracker{
    area:string
}

const StyleSectionTracker = styled.section<PropsStyleSectionTracker>`

    grid-area:${props=>props.area};
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin-bottom:20px;
    margin-top:20px;
    @media(min-width:800px){
        margin-bottom:30px;
        margin-top:0;
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

         & > .container-tracker{

            width:100%;
            height:300px;
            @media(min-width:800px){
                height:360px;
            }
            @media(min-width:1420px){
                height:430px;
            }
         }


        & > .animation-mobile{
            display:block;
             & > .lf-player-container > .track{

                height:360px;
            }
            @media(min-width:800px){
                display:none;
            }
        }


    }

    & > .container-animation{
        display:none;
        @media(min-width:800px){
            display:block;
            width:42%;
            height:90%;
            margin-top:30px;
            & > .lf-player-container{
                position:relative;
            }
            & > .lf-player-container > .track{

                height:500px;
            }
        }
    }

`;

export  type PropsSectionTracker = {

    area:string,
    title:string,
    description:string,
    animation:any,
    cardTracker:JSX.Element
}
export default function SectionTracker(props:PropsSectionTracker):JSX.Element{

    return<StyleSectionTracker area={props.area}>

        <div className="container-info">

            <div className="title">
               {props.title}
            </div>
            
            <div className="animation-mobile">
                {props.animation}
            </div>
            
            <div className="description">
                {props.description}
            </div>
            
            <div className="container-tracker">
                {props.cardTracker}
            </div>

        </div>

        <div className="container-animation">
            {props.animation}
        </div>

    </StyleSectionTracker>
}