import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";


const StyleInput = styled.div`
    
    width: 90vw;
    height: 120px;
    display:block;
    margin-top:20px;

    @media(min-width: 800px){
        width: 40vw;
        margin-left: 10vw;
    }

    & > label{
        display:block;
        width:90%;
        height:50px;
        margin-left:4%;
        font-size:20px;
        font-weight: 900;
        display:flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.secondaryA};
        text-shadow: 0px 0px 5px white;
        @media(min-width: 330px){
            font-size: 22px;
        }
        @media(min-width: 800px){
            font-size: 26px;
        }
    }

    & > input{
        outline: none;
        display:block;
        width:90%;
        height:60px;
        border-radius:8px;
        border:1px solid gray;
        margin-left: 4%;
        font-size:16px;

        :focus{
            outline:none;
            border: 3px solid ${theme.colors.secondaryA};
        }
    }
`;


type PropsInput = {
    reference?:React.RefObject<HTMLInputElement>,
    label:string,
    placeholder:string,
    id:string,

}

export default function Input1(props:PropsInput):JSX.Element {

    

    return<StyleInput>

        <label htmlFor={props.id}>{props.label}</label>
        <input  ref={props.reference} type="text" name="input" id={props.id} placeholder={props.placeholder} />
    
    </StyleInput>
}