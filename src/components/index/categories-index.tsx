import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";


const StyleCategoriesIndex = styled.div`

    grid-area:categories;
    padding-top:10px;
    border-bottom:1px solid ${theme.colors.grayD};

    
    & > .container-categories > span > div > img{
        max-height:75%;
        border-radius:5px;
    }


    & > .title{
        width:95%;
        margin-left:2.5%;
        margin-top:10px;
        height:60px;
        position:relative;
        display:flex;
        justify-content:start;
        align-items:center;
        @media(min-width:800px){
            padding-left:20px;
        }


        & > .text{
            font-size:22px;
            font-weight:800;
            color:${theme.colors.balck};
            @media(min-width:800px){
                font-size:26px;
            }
        }

        & > .link{
            left:120px;
            cursor:pointer;
            top:35%;
            font-size:14px;
            position:absolute;
            font-weight:600;
            color:${theme.colors.secondaryA};
            @media(min-width:800px){
                font-size:17px;
                left:153px;
                top:32.5%;
            }

        }
     }

     & > .container-categories{

        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        overflow-y:scroll;
        overflow-x:hidden;
        width:95%;
        height:80%;
        margin-left:2.5%;
        align-items:center;
        @media(min-width:800px){
            height:85%;
        }
        & > span{
            display:inline-block;
            cursor:pointer;
        }
     }

`;

type PropsCategoriesIndex ={

    title:string,
    link:string,
    url:string,
    cards:JSX.Element[]
}

export default function CategoriesIndex(props:PropsCategoriesIndex):JSX.Element{

    return<StyleCategoriesIndex>

        <div className="title">
            <div className="text">
                {props.title}
            </div>
            <div className="link">
                {props.link}
            </div>
        </div>

        <div className="container-categories">

            {
                props.cards.map((element:JSX.Element, index:number)=><span key={index}>{element}</span>)
            }
        </div>


    </StyleCategoriesIndex>
}