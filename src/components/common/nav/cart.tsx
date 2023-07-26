import React from "react";
import styled from "styled-components";

import { Player } from "@lottiefiles/react-lottie-player";
import { theme } from "../../../../config"; 
import { IconAngleNext, IconTrash } from "@/icons/icons";
import Button1 from "../button-1";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import FormatCurrency from "@/services/format-currency";
import { deleteProductCart, setQuantity, setQuantityProduct } from "@/store/cart";

const StylesCart = styled.div`

    & > .cart{
        width:90vw;
        margin-left:10vw;
        height:100vh;
        z-index:999999;
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

        & > .cart_body_full {
            width:100%;
            height:350px;
            overflow-y: scroll;
            overflow-x: hidden;

            & > span > .product{
                margin-top: 6px;
                margin-bottom: 6px;
                border-top: 1px solid ${theme.colors.grayC};
                display:flex;
                position: relative;
                height: 130px;
            }

            & > span > .product > .img-product{

                width: 80px;
                height: 100px;

                & > img{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 80px;
                    height: 100%;
                    object-fit: contain;
                }

            }

            & > span > .product > .info-cart-product{
                padding: 5px;

                & > .name-product{
                    max-width: 250px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                & > .price-product{
                    font-size: 18px;
                    color:${theme.colors.balck};
                    font-weight: 700;
                    margin-bottom: 3px;
                }

                & > .options{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    
                    & > .quantity{

                        & > .quantity__title{
                            font-size: 16px;
                            color:${theme.colors.grayA};
                            font-weight: 700;
                            margin-right: 5px;
                            margin-bottom: 3px;

                        }

                        & > .quantity__btns{
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            & > .quantity__btns__add, & > .quantity__btns__remove{
                                width: 36px;
                                height: 36px;
                                color:${theme.colors.white};
                                font-size: 26px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                cursor:pointer;
                                border-radius: 4px;
                                margin-left: 5px;
                                margin-right: 5px;
                            }

                            & > .quantity__btns__add{
                                background: ${theme.colors.successA};
                                font-size: 22px;
                            }

                            & > .quantity__btns__remove{
                                background: ${theme.colors.primaryA};
                            }

                        }
                    }

                    & > .delete{
                        position: absolute;
                        left: 96%;
                        top:58%;
                        cursor: pointer;
                    }
                }

            }

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

export default function Cart(props:PropsCart):JSX.Element{

    const stateCart = useSelector((state:RootState)=>state.cart);
    const dispatch:AppDispatch = useDispatch();


    return<StylesCart>
        <div ref={props.reference} className="cart">
            <div className="cart_title">
                <p>{props.title} ({stateCart.quantity})</p> 
                <div className="icon-exit" onClick={()=>props.cartToggle(props.reference,'block')}>
                    <IconAngleNext width="24" height="24" fill={theme.colors.primaryA}/>
                </div>
            </div>

            <div className="cart_body">
                {
                    stateCart.quantity <= 0 
                    ?
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
                    :
                    <div className="cart_body_full ">

                        {
                            stateCart.products.map((product:{quantity:number,product:any},index:number)=>{

                                return<span key={index}>
                                    <div className="product">

                                        <div className="img-product">
                                            <img loading="lazy"  src={ theme.data_domain+product.product.attributes.media.data[0].attributes.url} alt=""/>
                                        </div>

                                        <div className="info-cart-product">
                                            
                                            <div className="name-product">
                                                {product.product.attributes.name}

                                            </div>
                                           
                                            <div className="price-product">
                                                {
                                                    parseInt(product.product.attributes.discount_price) === 0
                                                    ?
                                                    FormatCurrency(product.product.attributes.sale_price,'COP','es-CO') 
                                                    :
                                                    FormatCurrency(product.product.attributes.discount_price,'COP','es-CO') 
                                                }
                                            </div>

                                            <div className="options">

                                                <div className="quantity">
                                                    <div className="quantity__title">
                                                        Cantidad: <strong style={{color:theme.colors.balck, fontSize:"18px"}}>{product.quantity}</strong>
                                                    </div>

                                                    <div className="quantity__btns">
                                                        <div className="quantity__btns__remove" onClick={()=>{
                                                            product.quantity > 1 
                                                            &&
                                                            dispatch(setQuantityProduct({
                                                                quantity:product.quantity-1,
                                                                id:index
                                                            }))
                                                        
                                                        }}>
                                                            -
                                                        
                                                        </div>
                                                        <div className="quantity__btns__add" onClick={()=>{
                                                            product.quantity < product.product.attributes.stock 
                                                            &&
                                                            dispatch(setQuantityProduct({
                                                                quantity:product.quantity+1,
                                                                id:index
                                                            }))
                                                        }}>
                                                            +
                                                        </div>
                                                    </div> 

                                                </div>

                                                <div className="delete" onClick={()=>{

                                                    document.getElementById('product-desktop-'+product.product.id)
                                                    ?.children[0].children[0].setAttribute('fill',`${theme.colors.grayB}`);

                                                    document.getElementById('product-mobile-'+product.product.id)
                                                    ?.children[0].children[0].setAttribute('fill',`${theme.colors.grayB}`);

                                                    dispatch(deleteProductCart(product.product.id));
                                                    dispatch(setQuantity(stateCart.quantity-1));
                                                }}>
                                                    <IconTrash width="24" height="24" fill={theme.colors.primaryB}/>
                                                </div>

                                            </div>
                                       
                                        </div>

                                       
                                    </div>
                                </span>
                            })
                        }

                        
                    </div>
                }

            </div>
            {
                stateCart.quantity > 0
                &&
                <div className="subtotal">
                    Subtotal: <strong style={{color:theme.colors.balck, fontSize:"18px"}}>{FormatCurrency(`${stateCart.subtotal}`,'COP','es-CO')}</strong>
                </div>
            }

            <br></br>
        </div>
    </StylesCart>
} 