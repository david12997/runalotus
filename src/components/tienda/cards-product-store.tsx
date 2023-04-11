import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";


const StyleFeaturedProducts = styled.section`

    grid-area:products;
    margin-top:40px;
    border-bottom:1px solid ${theme.colors.grayD};
    margin-bottom:20px;

    & > .title-featured{
        width:100%;
        height:45px;
        display:flex;
        align-items:center;
        margin-top:15px;

        & > .title{
            font-size:22px;
            font-weight:800;
            color:${theme.colors.balck};
            margin-left:9px;
            @media(min-width:800px){
                font-size:26px;
                margin-left:3%;
            }

        }

        & > .link{
            margin-left:8px;
            font-size:14px;
            margin-top:4px;
            font-weight:800;
            color:${theme.colors.secondaryA};
            @media(min-width:800px){
                font-size:17px;
            }


        }
    }

    & > .container-cards-1, .container-cards-2{

        width:95%;
        margin-left:2.3%;
        height:450px;
        overflow-y:hidden;
        overflow-x:scroll;
        display:flex;
        justify-content:start;
        @media(min-width:800px){
            justify-content:space-around;
        }
       
       
    }

    & > .container-cards-1{
        margin-top:15px;
    }

    & > .container-cards-2{
        margin-top:35px;
    }

`;

export type PropsFeaturedProduct = {

    title:string,
    link:string,
    urlLink:string,
    featured1:JSX.Element[],
    featured2:JSX.Element[]

}

export default function FeaturedProducts(props:PropsFeaturedProduct):JSX.Element{

    return<StyleFeaturedProducts>
        <div className="title-featured">
            <div className="title">{props.title}</div>
            <div className="link">{props.link}</div>
        </div>

        <div className="container-cards-1">
            {
                props.featured1.map((element:JSX.Element,index:number)=><span key={index}>{element}</span>)
            }
        </div>

        <div className="container-cards-2">
            {
                props.featured2.map((element:JSX.Element,index:number)=><span key={index}>{element}</span>)
            }
        </div>

       
    </StyleFeaturedProducts>
}