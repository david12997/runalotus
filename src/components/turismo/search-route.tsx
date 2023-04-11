import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";

export const StyleSearchRoute = styled.div`

    width:90%;
    height:80%;
    display:flex;
    justify-content:center;
    align-items:center;

    @media(min-width:800px){
        width:76%;
        height:56%;
    }

    
    & > .container-selects{

        width:98%;
        height:98%;
        background:rgba(255,255,255,0.8);
        border-radius:8px;
        display:flex;
        justify-content:center;
        align-items:center;

        @media(min-width:800px){
            border-radius:15px;
        }

        .space{

            display:none;

            @media(min-width:800px){
                width:2px;
                height:80%;
                background:${theme.colors.grayC};
                margin-left:3%;
                margin-right:3%;
                display:block;
            }


        }
        

        .select-location, .select-climate{

            position:relative;
            width:246px;
            height:100px;

            @media(min-width:330px){
                width:300px;
                height:140px;
            }

            @media(min-width:630px){
                width:400px;
                height:150px;
            }

        }

        .select-location{

         

            .icon-location{

                border-radius:5px;
                box-shadow:0px 0px 5px rgba(0,0,0,0.5);
                position:absolute;
                width:52px;
                height:52px;
                background:${theme.colors.white};
                display:flex;
                justify-content:center;
                align-items:center;
                top: 14%;
                left: 3%;
            }

        }

        .select-climate{
            display:none;

            @media(min-width:800px){
                display:block;
           
            }

            .icon-climate{

                border-radius:5px;
                box-shadow:0px 0px 5px rgba(0,0,0,0.5);
                position:absolute;
                width:52px;
                height:52px;
                background:${theme.colors.white};
                display:flex;
                justify-content:center;
                align-items:center;
                top: 14%;
                left: 3%;
            }

        }
    }

`;

export type PropsSearchRoute ={

    selects:JSX.Element[],
    icons:JSX.Element[],

}

export default function SearchRoute(props:PropsSearchRoute):JSX.Element{

    return<StyleSearchRoute>
        <div className="container-selects">
            
            <div className="select-location">
                <div className="icon-location">
                    {props.icons[0]}
                </div>
                {props.selects[0]}
            </div>
            
            <div className="space"></div>

            <div className="select-climate">
                <div className="icon-climate">
                    {props.icons[1]}
                </div>
                {props.selects[1]}
            </div>
           

        </div>
    </StyleSearchRoute>
}