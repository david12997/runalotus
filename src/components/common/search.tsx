
import React from "react";
import styled from "styled-components";
import { theme } from "@/../config";
import { IconSearch } from "@/icons/icons";


const StyleSeacrh = styled.span`

    display:flex;
    justify-content:end;
    position:relative;
    width:100%;
   

    input{
        font-size:14px;
        font-weight:500;
        margin-left:10%;
        border:1px solid ${theme.colors.grayB};
        width:80%;
        height:23px;
        border-radius:3px;
        background:${theme.colors.background};
        color:${theme.colors.grayB};
    }

    .icon{

        position:absolute;
        left:85%;
        top:17%;
    }
    
`;
type PropsSearch ={
    placeholder?:string
}
export default function Search(props:PropsSearch):JSX.Element{

    return<StyleSeacrh>

        <input type="text" placeholder={ props.placeholder !== undefined ? ` ${props.placeholder}` : ' Buscar ...'}></input>
        <div className="icon">
            {<IconSearch width="18" height="18" fill={theme.colors.grayB}/>}
        </div>
    
    </StyleSeacrh>
}