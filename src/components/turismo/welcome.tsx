import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../config";


const StylesWelcome =  styled.div`

    grid-area:moments;
    position:relative;
    
    & > img{

        height:100%;
        width:100%;
        object-fit:cover;
        object-position: 50% 50%;
        position:absolute;
        z-index:-1;

       
    }

    & > .container-welcome{

        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;

        .title-welcome{

            width:100%;
            height:40%;
            display:flex;
            justiffy-content:center;
            align-items:center;
            position:relative;
            
            p{
                color:white;
                text-shadow:0px 0px 4px ${theme.colors.balck};
                width:90%;
                margin-left:5%;
                text-align:center;
                font-size:20px;
                font-weight:900;

                @media(min-width:350px){
                    font-size:25px;
                }

                @media(min-width:600px){
                    width:70%;
                    margin-left:15%;
                    font-size:34px;
                }

                @media(min-width:800px){
                    width:50%;
                    margin-left:25%;
                    font-size:45px;
                    font-weight:800;
                }

                @media(min-width:1470px){
                    width:40%;
                    margin-left:30%;
                    font-size:55px;
                }
            }

            
            .btn-welcome{

                position:absolute;
                width:100%;
                height:50%;
                display:flex;
                justify-content:center;
                align-items:center;
                top:58%;

                @media(min-width:600px){

                    top:70%;
                }

                @media(min-width:800px){

                    top:80%;
                }

                @media(min-width:1200px){

                    top:70%;
                }
                
            }
        }


        .search-welcome{
            width:98%;
            height:60%;
            display:flex;
            justify-content:center;
            align-items:center;

            @media(min-width:1000px){

                width:100%;
            }
        }
    }
`;


export type PropsWelcome = {

    imgCarrousel:string[],
    title:string,
    button:JSX.Element, 
    searchRouter:JSX.Element 

}
export default function Welcome(props:PropsWelcome):JSX.Element{

    const [bg, setBg] = useState<number>(0);


    useEffect(()=>{

        const IntervalCarrousel = setInterval(()=>{

            (bg === (props.imgCarrousel.length-1)) && setBg(0);
            (bg < (props.imgCarrousel.length-1)) && setBg(bg=>bg+1);
    
        },5000);

        return()=>{
            
            clearInterval(IntervalCarrousel);
        }

    },[props.imgCarrousel.length, bg,  setBg]);


    return<StylesWelcome>

       <img src={props.imgCarrousel[bg]}/>
        
        <div className="container-welcome">
            <div className="title-welcome">
                <p>LOS MEJORES MOMENTOS EN LOS MEJORES LUGARES</p>

                <div className="btn-welcome">
                    {props.button}
                </div>

            </div>

           

            <div className="search-welcome">
                {props.searchRouter}
            </div>
        </div>
       

    </StylesWelcome>

}