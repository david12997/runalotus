import React from "react";
import styled from "styled-components";
import { theme } from "../../../config";

const StyleCardProduct = styled.div`

    min-width:270px;
    min-height:360px;
    box-shadow:0px 0px 6px rgba(0,0,0,0.4);
    border-radius:6px;
    margin:10px;
    background:${theme.colors.white};
    max-width:270px;
    max-height:360px;
    cursor:pointer;
    @media(min-width:320px){
        min-width:300px;
        min-height:400px;
    }

    & > .container-img{
        width:95%;
        margin-left:2.5%;
        height:55%;
        display:flex;
        justify-content:center;
        align-items:center;

        & > img{
            height:100%;
            max-height:225px;
            border-radius:6px;
            

        }
    }

    & > .container-prices{

        width:95%;
        margin-left:2.3%;
        height:15%;
        position:relative;

        & > .price{

            font-size:15px;
            color:${theme.colors.grayA};
            font-weight:800;
            text-decoration:line-through;
            @media(min-width:320px){
                font-size:17px;
            }
        }

        & > .price-discount{
            font-size:22px;
            font-weight:900;
            @media(min-width:320px){
                font-size:25px;
            }

        }

        .add-product{
            position:absolute;
            left:88%;
            top:38%;
        }
    }

    & > .container-name{

        width:95%;
        margin-left:2.3%;
        height:15%;
        color:${theme.colors.grayA};
        font-weight:500;
        font-size:15px;
        display:flex;
        justify-content:start;
        align-items:center;
        text-overflow:ellipsis;
        @media(min-width:320px){
                font-size:17px;
        }


    }

    & > .container-delivery{

        width:95%;
        height:14%;
        margin-left:2.3%;
        display:flex;
        justify-content:start;
        align-items:center;

        & > p{
            margin-left:5px;
            font-size:15px;
            font-weight:800;
            color:${theme.colors.successA};
        }
    }




`;

export type PropsCardProduct ={

    img:string,
    alt:string,
    price:string,
    discount:string,
    iconAdd:JSX.Element,
    name:string,
    iconTruck:JSX.Element,
    textDelivery:string

}

export default function CardProduct(props:PropsCardProduct):JSX.Element{

    return<StyleCardProduct>

        <div className="container-img">
            <img src={props.img} alt={props.alt} />
        </div>

        <div className="container-prices">
            <div className="price">
                {props.price}
            </div>
            <div className="price-discount">
                {props.discount} 
            </div>
            <div className="add-product">
               {props.iconAdd}
            </div>
        </div>

        <div className="container-name">
            {props.name.trim()}
        </div>

        <div className="container-delivery">
            {props.iconTruck}
            <p>{props.textDelivery}</p>
        </div>


    </StyleCardProduct>
}