import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";


const StyleCardsStore =  styled.section`

    grid-area:cards;
    width:100%;
    height:100%;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:start;
    overflow-x:scroll;
    overflow-y:hidden;
    border-bottom:1px solid ${theme.colors.grayD};
    & > span{
        margin-right:30px;
    }
    @media(min-width:800px){

        width:95%;
        margin-left:2.5%;
        justify-content:space-around;
        & > span{
        margin-right:0px;
    }
    }

`;

type PropsCardsStore ={

    cards:JSX.Element[]

}

export default function CardsStore(props:PropsCardsStore):JSX.Element{

    return<StyleCardsStore>
        {
            props.cards.map((element:JSX.Element, index:number)=><span key={index}>{element}</span>)
        }
    </StyleCardsStore>
}