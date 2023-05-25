import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";

const StyleWelcomeIndex =  styled.div`

    grid-area:welcome;
    position:relative;
    width:100%;
    height:100%;

    
    & > .bg-index{

        width:100%;
        height:100%;
        position:relative;
        overflow:hidden;
        


        & > .bg{

            height:600px;
            width:160%;
            object-fit:cover;
            object-position:80% 50%;
            z-index:-1;
            position:absolute;
            @media(min-width:600px){
                width:130%;
            }   
            @media(min-width:800px){
                width:100%;
            }           
        }

        & > .container-animation{
                width:100%;
                height:600px;
                position:absolute;
                display:flex;
                justify-content:end;
                align-items:end;
                left:30px;
                cursor:pointer;

            & > .hand, .animation-index{
                position:absolute;
                width:250px;
                @media(min-width:490px){

                    width:320px;
                }
                @media(min-width:800px){
                    width:450px;
                }
            }

            & > .hand{


            }
            & > .animation-index{
                top:44.6%;
                transform:rotate(-21deg);
                padding-right:34px;
                @media(min-width:490px){

                    top:29.4%;
                    padding-right:43px;
                }
                @media(min-width:800px){
                    top: 0.4%;
                    padding-right: 59px;
                }
            }
            
        }


        & > .container-texts{

            position:absolute;
            top:3%;
            width:92%;
            height:50%;
            padding:10px;
            @media(min-width:500px){

                width:70%;
            }
            @media(min-width:600px){

                width:60%;
                top:7%;
                left:2%;
            }
            @media(min-width:800px){
                top:10%;
                left:4%;
                width:50%;
            }
            @media(min-width:1450px){
                width:40%;
                left:6%;

            }

            & > .text-discovery{

                font-size:25px;
                text-shadow:0px 0px 4px rgba(0,0,0,0.5);
                color:${theme.colors.white};
                font-weight:800;
                @media(min-width:800px){
                    font-size:28px;
                }
                @media(min-width:1200px){
                    font-size:35px;
                }
                @media(min-width:1450px){
                    font-size:40px;
                }
            }

            & > .text-colombia{
                font-weight:800;
                display:flex;
                justify-content:start;
                align-items:center;
                height:40px;
                width:100%;
                padding-left:10px;
                font-size:18px;
                color:${theme.colors.white};
                background:${theme.colors.primaryA};
                @media(min-width:350px){
                    font-size:21px;
                    height:50px;
                }
                @media(min-width:365px){
                    font-size:23px;
                    height:50px;
                }
                @media(min-width:800px){
                    font-size:30px;
                }
                @media(min-width:1000px){
                    font-size:35px;
                }
                @media(min-width:1200px){
                    font-size:40px;
                    height:55px;
                }
                @media(min-width:1630px){
                    font-size:49px;
                    height:65px;
                }
            }
            & > .text-paisajes{

                font-size:16px;
                font-weight:900;
                color:${theme.colors.white};
                text-shadow:0px 0px 4px rgba(0,0,0,0.5);
                margin-top:5px;
                margin-bottom:10px;
                @media(min-width:350px){

                    font-size:19px;
                }
                @media(min-width:800px){
                    font-size:22px;
                }
                @media(min-width:1200px){
                    font-size:25px;
                    margin-top:10px;
                    margin-bottom:12px;
                }
                @media(min-width:1450px){

                    font-size:30px;
                    margin-top:15px;
                    margin-top:20px;
                }
            }

            & > .text-summary{
                
                font-size:16px;
                font-weight:500;
                @media(min-width:350px){
                    font-size:17px;
                }
                @media(min-width:800px){
                    font-size:19px;
                }
                @media(min-width:1450px){
                    font-size:21px;
                }
            }

            & > .button-index-desktop{
                display:none;

                @media(min-width:800px){
                    position:relative;
                    width:50%;
                    cursor:pointer;
                    z-index: 999;
                    display:block;
                    margin-top:40px;
                    & > div > div{
                        font-size:20px;
                    }
                }

            }

        }

        & > .button-index-mobile{

            position:absolute;
            cursor:pointer;
            width:100%;
            height:90px;
            top:83%;
            & > div > div{
                font-size:18px;
            }
            @media(min-width:800px){
                display:none;
            }
        }

       


    }

`;

export type PropsWelcomeIndex={
    bg:string
    text1:string,
    text2:string,
    text3:string,
    description:string,
    buttonDesktop:JSX.Element,
    buttonMobile:JSX.Element,
    hand:string,
    animation:JSX.Element


}

export default function WelcomeIndex(props:PropsWelcomeIndex):JSX.Element{



    return<StyleWelcomeIndex>
        <div className="bg-index">
            <img className="bg"  src={props.bg} />
            
            <div className="container-texts">
                <div className="text-discovery">
                    {props.text1}
                </div>
                <div className="text-colombia">
                    {props.text2}
                </div>
                <div className="text-paisajes">
                    {props.text3}
                </div>
                <div className="text-summary">
                    {props.description}
                </div>

                <div className="button-index-desktop">
                    {props.buttonDesktop}
                </div>
            </div>

            <div className="container-animation">
                
                <img  className="hand" src={props.hand} />

                <div className="animation-index">
                    {props.animation}
                </div>

            </div>

            <div className="button-index-mobile">
                {props.buttonMobile}
            </div>


    
        </div>
    </StyleWelcomeIndex>
}