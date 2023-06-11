import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";

export interface PropsStyleCategoriesTourism{ 
    
    area:string
}
const StyleCategoriesTourism = styled.div<PropsStyleCategoriesTourism>`

    grid-area:${(props)=>props.area};
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom:1px solid ${theme.colors.grayD};

    & > .container-categories{

        width:95%;
        height:100%;

        .title{
            margin-top:10px;
            width:100%;
            height:65px;
            display:flex;
            justify-content:start;
            align-items:center;
            
            @media(min-width:800px){
                margin-top:40px;
            }

            .cate{
                font-size:22px;
                font-weight:800;

                @media(min-width:800px){
                    font-size:26px;
                }
            }

            .link{
                font-size:14px;
                font-weight:600;
                color:${theme.colors.secondaryA};
                margin-top: 4px;
                margin-left: 7px;
                @media(min-width:800px){
                    font-size:17px;
                }
            }
        }

        .categories{

            width:100%;
            height:83%;
            margin-top:14px;
            display:flex;
            justify-content:space-around;
            flex-wrap:wrap;
            overflow-y:scroll;
            overflow-x:hidden;

            span{

               display:inline-block;
               cursor:pointer;
            }
        }
    }

`;

type PropsCategoriesTourism = {

    cards:JSX.Element[],
    area:string,
    tittle:string,
    link:string
}

export default function CategoriesTourism(props:PropsCategoriesTourism):JSX.Element{

    return<StyleCategoriesTourism area={props.area}>

        <div className="container-categories">
            <div className="title">
                <div className="cate">{props.tittle} </div>
                <div className="link">{props.link}</div> 
            </div>

            <div className="categories">
                {
                    props.cards.map((card:JSX.Element, index:number)=><span key={index}>{card}</span>)
                }
            </div>
        </div>

    </StyleCategoriesTourism>
}