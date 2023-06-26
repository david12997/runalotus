import React from "react";
import styled from "styled-components";

import { Player } from "@lottiefiles/react-lottie-player";
import { theme } from "../../../../config"; 
import { IconAngleNext } from "@/icons/icons";
import Button1 from "../button-1";

const StylesCart = styled.div`

    & > .cart{
        width:90vw;
        margin-left:10vw;
        height:100vh;
        z-index:99999;
        position:fixed;
        background: ${theme.colors.white};
        box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        display: none;
        overflow-y: scroll;
        overflow-x: hidden;
        padding-bottom:30px;

        @media(min-width:800px){
            width: 40vw;
            margin-left:60vw;
        }
        @media(min-width:1300px){
            width: 30vw;
            margin-left:70vw;
        }

    }

    & > .cart > .cart_title{
        width:100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 800;
        color:${theme.colors.primaryA};
        position: relative;


        & > .icon-exit{
            position: absolute;
            left:90%;
            cursor:pointer;
        }

        
    }

    & > .cart > .cart_body{
        width:90%;
        margin-left:5%;
        display: flex;
        justify-content: center;

        & > .cart_body_empty > p{
            display: flex;
            justify-content: center;
            font-size:18px;
            color:${theme.colors.grayA};
        }

    }


`;

type PropsCart = {

    reference:React.RefObject<HTMLDivElement>
    cartToggle:(reference:React.RefObject<HTMLDivElement>,displayShow:string)=>void,
    title:string,
    cart_empty:{
        message:string,
        btn_text:string
    }
}

export default function (props:PropsCart):JSX.Element{

    return<StylesCart>
        <div ref={props.reference} className="cart">
            <div className="cart_title">
                <p>{props.title} (5)</p> 
                <div className="icon-exit" onClick={()=>props.cartToggle(props.reference,'block')}>
                    <IconAngleNext width="24" height="24" fill={theme.colors.primaryA}/>
                </div>
            </div>

            <div className="cart_body">
                <div className="cart_body_empty">
                    <Player
                        src={theme.data_domain+'/uploads/empty_cart_9a363ec353.json?updated_at=2023-05-16T16:49:10.732Z'}
                        className="cart-empty-animation"
                        loop
                        autoplay
                        speed={1}
                    />
                    <p>{props.cart_empty.message}</p>
                    <Button1 
                        text={props.cart_empty.btn_text}
                        minWidth="90%"
                        minHeight="60px"
                    />
                </div>
            </div>
            <br></br>
        </div>
    </StylesCart>
} 