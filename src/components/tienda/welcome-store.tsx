import React from "react";
import styled from "styled-components";

const StyleWelcomeStore = styled.section`

    grid-area:welcome;

    & > .img-desktop{

        display:none;

        @media(min-width:800px){
        width:100%;
        object-fit:cover;
        display:block;

        }
    }

    & > .img-mobile{
            width:100%;
            object-fit:cover;
            display:block;
            max-height:100%;
            max-width:100%;

        @media(min-width:800px){
            display:none;
        }
    }

`;

type PropsWelcomeStore = {

    imgMobile:string,
    imgDesktop:string,
    alt:string
}

export default function WelcomeStore(props:PropsWelcomeStore):JSX.Element{

    return<StyleWelcomeStore>

            <img className="img-desktop" src={props.imgDesktop} alt={props.alt} />
            <img className="img-mobile" src={props.imgMobile} alt={props.alt} />
    </StyleWelcomeStore>
}