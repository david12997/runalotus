import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";
import { useRouter } from "next/router";


const StyleStoreSection = styled.div`

    grid-area:store;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    align-items:center;
    border-bottom:1px solid ${theme.colors.grayD};
    @media(min-width:800px){
        padding-top:55px;
    }
    

    & > .container-info, .animation-desktop{

        width:96%;
        height:90%;
        @media(min-width:800px){
            width:45%;
            height:90%;
        }
    }

    & > .container-info{

        & > .title{
            font-size:25px;
            font-weight:900;
            color:${theme.colors.balck};
            text-align:start;
            @media(min-width:800px){    
                padding-top:15px;
                font-size:35px;
                text-align:end;
            }
            @media(min-width:1450px){
                font-size:45px;
            }
        }

        & > .text{

            font-size:20px;
            font-weight:800;
            color:${theme.colors.secondaryA};
            @media(min-width:800px){
                text-align:end;
                font-size:25px;
                margin-top:5px;
                margin-bottom:9px;
            }
            @media(min-width:1450px){
                font-size:30px;
            }
        }

        & > .animation-mobile{
            width:100%;
            height:360px;
            position:relative;
            display:flex;
            justify-content:center;
            align-items:center;
            @media(min-width:500px){
                height:430px;
            }
            @media(min-width:800px){
                display:none;
            }

            & > .animation{
                position:absolute;
                top:140px;
                @media(min-width:500px){
                    top:150px;
                    width:70%;
                }
            }

            & > .bg-store{
                & > img{
                    width:100%;
                    max-width:600px;
                } 
            }
        }

        
        & > .description{

            font-weight:500;
            font-size:17px;
            color:${theme.colors.grayA};
            @media(min-width:800px){
                font-weight:700;
                width:85%;
                margin-left:15%;
                text-align:end;
                font-size:18px;
            }
            @media(min-width:1450px){

                font-size:21px;
            }
        }

        & > .button-store-desktop, .button-store-mobile{

            margin-top:5%;
            padding-top:10px;
            height:110px;
            @media(min-width:800px){

                width:50%;
                margin-left:50%;
                padding-top:0px;
            }
        }
        & > .button-store-desktop{

            display:none;
            @media(min-width:800px){
                display:block;
            }
        }

        & > .button-store-mobile{

            display:block;
            @media(min-width:800px){
                display:none;
            }
        }



    }

    & > .animation-desktop{

        display:none;
        @media(min-width:800px){
            display:block;
            position:relative;

            & > .bg-store{

                & > img{

                    width:100%;
                }
            }

            & > .animation{
                left:10%;
                width:80%;
                position:absolute;
                top:23%;
            }
        }
    }
`;

type PropsSectionAnimationStore = {

    imgBg:string,
    animation:any,
    title:string,
    text:string,
    description:string,
    buttonDesktop:JSX.Element,
    buttonMobile:JSX.Element
}
export default function SectionAnimationStore(props:PropsSectionAnimationStore):JSX.Element{
    
    const router = useRouter();

    return<StyleStoreSection>
        <div className="animation-desktop">
            <div className="bg-store">
                <img loading="lazy" src={props.imgBg} />
            </div>
            <div className="animation" onClick={()=>router.push('/tienda')}>
                {props.animation}
            </div>
        </div>

        <div className="container-info">
            <div className="title">
                {props.title}
            </div>
            <div className="text">
               {props.text}
            </div>

            <div className="animation-mobile">
                <div className="bg-store">
                    <img loading="lazy" src={props.imgBg} />
                </div>
                <div className="animation" onClick={()=>router.push('/tienda')}>
                    {props.animation}
                </div>
            </div>

            <div className="description">
                {props.description}
            </div>
            <div className="button-store-desktop">
                {props.buttonDesktop}
            </div>
            <div className="button-store-mobile">
                {props.buttonMobile}
            </div>
        </div>


    </StyleStoreSection>
}