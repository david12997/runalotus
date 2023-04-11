import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";




export interface PropsStyleSectionAnimation{

    area:string
}
const StyleSectionAnimation = styled.div<PropsStyleSectionAnimation>`

    grid-area:${(props)=>props.area};
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    position:relative;
    flex-wrap:wrap;
    border-bottom:1px solid ${theme.colors.grayD};


    & > .info, .animation{
        width:100%;
        height:100%;
        margin-left:15px;
        margin-right:15px;
        @media(min-width:800px){
            width:45%;
        }
    }

    &  > .animation{

        display:none;
        @media(min-width:800px){
            display:block;

            & .lf-player-container > .router-tourism{
                height:500px;
        
            }
            
        }


    }

    & > .info{
        
        @media(min-width:800px){
            padding-left:20px;
        } 
        @media(min-width:1300px){
            padding-left:50px;
        } 
       

        & .title{

            font-size:22px;
            font-weight:900;
            margin-top:0px;
            @media(min-width:330px){
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

        & .description{
            color:${theme.colors.secondaryA};
            font-size:18px;
            font-weight:800;

            @media(min-width:300px){
                font-size:20px;
            }
            @media(min-width:800px){
                font-size:25px;
                margin-bottom:20px;
            }
            @media(min-width:1450px){
                font-size:30px;
            }
            
            
        }

        &  p{

            font-size:17px;
            font-weight:700;
            color:${theme.colors.grayA};
            @media(min-width:800px){
                font-size:18px;
                margin-bottom:45px;
            }
            @media(min-width:1450px){
                font-size:21px;
            }
        }

        & .btn-action{

            display:flex;
            justify-content:center;

            & div{
                min-width:99%;
                @media(min-width:800px){
                    min-width:250px;
                }
            }

            @media(min-width:800px){
                justify-content:start;
            }
        }

        & .animation-mobile{

            display:block;
            @media(min-width:800px){
                display:none;
            }

            & .lf-player-container > .router-tourism{

                height:300px;
                @media(min-width:800px){
                    height:500px;
                }
            }
        }

        
    }

`;

export type PropsSectionAnimation ={

    title:string,
    description:string,
    text:string,
    player:any,
    button:JSX.Element,
    area:string

}
export default function SectionAnimationRoute (props:PropsSectionAnimation):JSX.Element{

    return<StyleSectionAnimation area={props.area}>

        <div className="info">
            <div className="title">{props.title}</div>
            
            <div className="description">
                {props.description}
            </div>

            <div className="animation-mobile">
                {props.player}
            </div>
            <p>
                {props.text}

            </p>

  

            <div className="btn-action">
                {props.button}
            </div>
        </div>

        <div className="animation">
            {props.player}
        </div>
    
    </StyleSectionAnimation>
}