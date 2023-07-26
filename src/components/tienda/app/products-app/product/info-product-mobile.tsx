import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IconCartPlus, IconWhatsapp } from "../../../../../icons/icons";
import { theme } from "../../../../../../config";
import FormatCurrency from "../../../../../services/format-currency";
import Button1 from "../../../../common/button-1";
import { useRouter } from "next/router";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductCart, setProducts, setQuantity } from "@/store/cart";

const StyleInfoProductMobile = styled.div`

    width: 100%;
    height: 100%;
    position: absolute;
    & > .info-product-mobile{

        display: block;
        position: absolute;
        width: 100%;
        height: 100%;

        & > .myblock-top{
            position: absolute;
            top:15px;
            z-index: 99;
            width: 86%;
            height: 23vh;
            background: transparent;
            
         

        }

        & > .myblock-bottom{
            position: absolute;
            top:55%;
            z-index: 99;
            width: 90%;
            height: 23vh;
            background: transparent;
           
         

        }


        &  > .container-price{
            position: relative;
            width:95%;  
            left: 2.5%;
            height: 60px;
            top:calc(100% - 65px);
            background: ${theme.colors.warningA};
            text-shadow: 0px 0px 6px black;
            border-radius: 9px;
            display: flex;
            justify-content: space-between;
            z-index:99;

            & > .prices{

                width: 52%;
                height: 100%;
                padding: 6px;

                & > .discount{
                    color: ${theme.colors.grayD};
                    font-size: 15px;
                    font-weight: 500;
                    text-decoration: line-through;
                    max-width: 99%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                & > .price{
                    color: ${theme.colors.white};
                    font-size: 21px;
                    font-weight: 800;
                    max-width: 99%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            & > .button{
                padding: 6px;
                position: relative;
                width: 48%;
                height: 100%;
                z-index:999;

            }
        }

        & > .container-name{
            position: relative;
            width:95%;
            height: 35px;
            padding: 1px;
            left: 2.5%;
            margin-top: -43px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index:99;


            & > .name{
                font-size: 19px;
                font-weight: 500;
                color: ${theme.colors.grayA};
                text-shadow: 0px 0px 6px white;
                border-radius: 5px;
                padding: 4px;
                max-width: 90%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                height: 100%;
                background:transparent;
            }
        }

        & > .container-info-options{

            position: relative;
            padding: 1px;
            width: 35px;
            height: 60%;
            left: calc(96% - 35px);
            top: 30px;
            z-index:99;

            & > div{
                margin-top: 20px;
                margin-bottom: 20px;
                @media(min-width:310px){

                    margin-top: 50px;
                    margin-bottom: 30px;
                }
            }
        }

        @media(min-width:800px){
            display:none;
        }
    }
`;

type PropsInfoProductMobile = {
    product:any
}

export default function InfoProductMobile(props:PropsInfoProductMobile):JSX.Element {

    const router = useRouter();
    const dispatch:AppDispatch = useDispatch();
    const stateCart = useSelector((state:RootState)=>state.cart);
    const [cart,setCart] = useState<boolean>(false);

    useEffect(()=>{

        stateCart.products.forEach((item:any,index:number)=>{
            if(item.product.id === props.product.id){
                setCart(true);
            }
        });

    },[stateCart]);

    return<StyleInfoProductMobile>

        <div className="info-product-mobile">

            <div className="myblock-top"></div>
            <div className="myblock-bottom"></div>

            <div className="container-price">

                <div className="prices">

                    <div className="discount">
                        {
                            props.product.attributes.discount_price !== "0"
                            &&
                            FormatCurrency(props.product.attributes.sale_price,'COP','es-CO')
                        }    
                    </div>
                    <div className="price">
                        {
                            props.product.attributes.discount_price !== "0"
                            ?
                            FormatCurrency(props.product.attributes.discount_price,'COP','es-CO')
                            :
                            FormatCurrency(props.product.attributes.sale_price,'COP','es-CO')
                        }
                    </div>

                </div>

                <div className="button" onClick={()=>{
                    
                    
                    router.asPath === '/tienda' 
                    ? 
                    router.push(`${router.asPath+'/productos/'+props.product.attributes.name+'@'+props.product.id}`.replace(/ /g,'-')) 
                    : 
                    router.push(`${router.asPath+'/'+props.product.attributes.name+'@'+props.product.id}`.replace(/ /g,'-'))
    
                    
                }}>

                    <Button1
                        bgColor={theme.colors.primaryA}
                        minWidth="100%"
                        minHeight="46px"
                        text="Ver producto"

                    />
                </div>

            </div>

            <div className="container-name">
                <div className="name">
                    {props.product.attributes.name}
                </div>
            </div>

            <div className="container-info-options">

                <div id={`product-mobile-${props.product.id}`} className="add-cart" onClick={()=>{
                    
                    let exist:boolean = false;

                    if(stateCart.products.length === 0){
                        dispatch(setProducts([{quantity:1, product:props.product}]));
                        dispatch(setQuantity(stateCart.quantity+1));
                        setCart(true);
                    }
                    else{

                        stateCart.products.forEach((item:any,index:number)=>{
                            if(item.product.id === props.product.id){
                                exist = true;
                            }
                        });

                        if(!exist){
                            dispatch(setProducts([{quantity:1, product:props.product}]));
                            dispatch(setQuantity(stateCart.quantity+1));
                            setCart(true);
                        }else{

                            dispatch(deleteProductCart(props.product.id));
                            dispatch(setQuantity( stateCart.quantity > 0 ? stateCart.quantity-1 : 0));
                            setCart(false);
                        }
                        
                    }
                    
                }}>
                    <IconCartPlus width="30" height="30" fill={ cart ? theme.colors.successA : theme.colors.grayB } />
                </div>
                <div className="mercado-libre" onClick={()=>{
                      window.open(props.product.attributes.links_marketplace.mercadolibre,'_blank');
                      window.focus();
                }}>
                    <img loading="lazy" width="33px" src={theme.data_domain+'/uploads/icon_ml_c2c95579cc.png'} alt="" />
                </div>
                <div className="whatsapp" onClick={()=>{
                    window.open(props.product.attributes.links_marketplace.whatsapp,'_blank');
                    window.focus();
                }}>
                    <IconWhatsapp width="33" height="30" fill={theme.colors.grayB} />
                </div>
            </div>



        </div>
    </StyleInfoProductMobile>
}