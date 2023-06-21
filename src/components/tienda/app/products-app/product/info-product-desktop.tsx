import React from "react";
import styled from "styled-components";
import FormatCurrency from "../../../../../services/format-currency";
import { IconCartPlus, IconWhatsapp } from "../../../../../icons/icons";
import { theme } from "../../../../../../config";
import Button1 from "../../../../common/button-1";

const StyleInfoProductDesktop = styled.div`
    
    width: 100%;
    height: 100%;
    position: absolute;
    margin-top: 3.6%;
    
    & >  .info-product-desktop{

        display: none;
        @media(min-width:800px){

            display: block;
            position: absolute;
            width: 300px;
            height: 96%;
            left:100%;
            background: ${theme.colors.white};
            box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
            border-radius: 10px;

            & > .hr-desktop-info-product-d{
                height: 1px;
                width: 95%;
                margin-left: 2%;
                border:none;
                background-color:${theme.colors.grayD};
            }

            & > .title-product{

                margin-left: 5%;
                max-width: 90%;
                height: 12%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
           
    
                & > .name{
                    font-weight: 400;
                    max-width: 95%;
                    font-size: 19px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                }
            }

            & > .container-prices{

                width: 100%;
                height: 15%;

                & > .prices{
                    width: 100%;

                    & > .discount{

                        color: ${theme.colors.grayA};
                        font-weight: 500;
                        text-decoration: line-through;
                        font-size: 15px;    
                        margin-left: 5%;
                        width: 80%;
                    }

                    & > .price{
                        font-weight: 800;
                        font-size: 27px;
                        margin-left: 5%;
                        width: 80%;
                    }
                }
            }

            & >  .btn-ver-product-desktop{
                margin-top:13%;
                width: 90%;
                margin-left: 5%;
            }
            
            & > .container-info-product{

                width:100%;
                height: 13%;

                & > .quantity-product{
                    width: 80%;
                    margin-left: 5%;
                }

                & > .color-product{
                    width: 80%;
                    margin-left: 5%;
                    display: flex;

                    & > .color-palete{

                        margin-left: 5%;
                        border-radius: 3px;
                        width: 25px;
                        height: 25px;
                        border: 1px solid ${theme.colors.grayD};
                    }
                }
            }

            & > .container-options-desktop{
                width: 100%;
                height: 13%;
                justify-content: space-around;
                align-items: center;
                display: flex;
            }



        }
    }


`;

type PropsInfoProductDesktop = {
    product:any
}


export default function InfoProductDesktop(props:PropsInfoProductDesktop ):JSX.Element {

    return<StyleInfoProductDesktop>
        <div className="info-product-desktop">
            
            <div className="title-product">
                <div className="name">
                    {props.product.attributes.name}
                </div> 
            </div>

            <hr className="hr-desktop-info-product-d"></hr>

            <div className="container-prices">
                <div className="prices">
                    <div className="discount">{FormatCurrency(props.product.attributes.sale_price,'COP','es-CO')}</div>
                    <div className="price">{FormatCurrency(props.product.attributes.discount_price,'COP','es-CO')}</div>
                </div>
            </div>

            <hr className="hr-desktop-info-product-d"></hr>

            <div className="container-info-product">
                <div className="quantity-product">
                    <strong> Disponibles:</strong> <span>5 unidades</span>
                </div>
                <div className="color-product">
                    <strong>Color principal:</strong> <div style={{background:props.product.attributes.color}} className="color-palete"></div>
                </div>
            </div>

            <hr className="hr-desktop-info-product-d"></hr>

            <div className="container-options-desktop">

                <div className="add-cart">
                    <IconCartPlus width="37" height="37" fill={theme.colors.grayB} />
                </div>
                <div className="mercado-libre">
                    <img width="37px" height="35" src={theme.data_domain+'/uploads/icon_ml_c2c95579cc.png'} alt="" />
                </div>
                <div className="whatsapp">
                    <IconWhatsapp width="34" height="34" fill={theme.colors.grayB} />
                </div>

            </div>

            <hr className="hr-desktop-info-product-d"></hr>


            <div className="btn-ver-product-desktop">
                <Button1
                    bgColor={theme.colors.primaryA}
                    minWidth="100%"
                    minHeight="50px"
                    text="Ver producto"
                />
            </div>


        </div>  
    
    </StyleInfoProductDesktop>
}