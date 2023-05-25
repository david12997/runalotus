import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";

const StyleCardInfo = styled.div`

    min-width:260px;
    min-height:330px;
    background:${theme.colors.white};
    box-shadow:0px 0px 3px rgba(0,0,0,0.4);
    width:90%;
    margin-top:15px;
    margin-bottom:20px;
    margin-left:20px;
    margin-right:20px;
    border-radius:6px;

    & > .container-icon{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:180px;
        background:${theme.colors.primaryB};
        border-radius: 6px 6px 50% 50%;
    }

    & > .title{
        width:100%;
        font-weight:800;
        display:flex;
        justify-content:center;
        height:40px;
        align-items:center;
        font-size:18px;
    }
    & > .text{

        height:45px;
        padding:15px;
        font-weight:700;
        font-size:16px;
        color:${theme.colors.grayA};
    }
    & > .link{

        height:15px;
        padding:15px;
        font-weight:800;
        color:${theme.colors.secondaryA};

    }



`;
type PropsCardInfo = {

    title:string,
    text:string,
    link:string
    icon:JSX.Element,
    click?:()=>void

};

export default function CardInfo(props:PropsCardInfo):JSX.Element{

    return<StyleCardInfo onClick={props.click}>
        <div className="container-icon">
            {props.icon}
        </div>
        <div className="title">
            {props.title}
        </div>
        <div className="text">
            {props.text}
        </div>
        <div className="link">
           {props.link}
        </div>
    </StyleCardInfo>
}