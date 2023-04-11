import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../config';

interface PropsStyleCardFilter{

    font_size:string
}

const StyleCardFilter = styled.div<PropsStyleCardFilter>`

    min-width:169px;
    height:45px;
    border-radius:30px;
    background:${theme.colors.white};
    box-shadow:0px 0px 5px rgba(0,0,0,0.5);
    margin:5px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    cursor:pointer;
    & > img{
        width:45px;
        border-radius:20px;
    } 
    
    & > div{
        width:100px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color:${theme.colors.balck};
        font-weight:900;
        font-size:${props=>props.font_size};
    }

`;

type PropsCardFilter={
    
    img:string,
    text:string,
    key:number,
    font_size:string
}

export default function CardFilter(props:PropsCardFilter):JSX.Element{

    return<StyleCardFilter font_size={props.font_size}>

        <img src={theme.data_domain+props.img}/>
        <div>{props.text}</div>
    </StyleCardFilter>
}