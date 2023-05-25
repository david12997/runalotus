import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";

const StyleCardCategoires = styled.div`

    width:120px;
    height:120px;
    background:${theme.colors.white};
    border-radius:5px;
    box-shadow:0px 0px 5px rgba(0,0,0,0.5);
    margin:3px;

    @media(min-width:320px){
        width:155px;
        height:155px;
    }

    @media(min-width:530px){
        margin:10px;
        width:190px;
        height:190px;
    }
    
    @media(min-width:830px){
        width:300px;
        height:300px;
        margin:15px;
    }

    @media(min-width:1450px){
        width:330px;
        height:330px;
        margin:45px;
    }

    & > img{

        width:100%;
        object-fit:cover;
        object-position: 50% 50%;
    }

    & > .card-title{

        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:20%;
        font-size:11px;
        font-weight:700;

        @media(min-width:320px){
            font-size:15px;
        }

        @media(min-width:820px){
            font-size:18px;
        }
    }

`;

type PropsCardCategoires = {

    img:string,
    title:string
    click?:()=>void

}

export default function CardCategories(props:PropsCardCategoires):JSX.Element{


    return<StyleCardCategoires onClick={props.click}>

        <img src={props.img} />
        <div className="card-title">
            {props.title}
        </div>

    </StyleCardCategoires>

}