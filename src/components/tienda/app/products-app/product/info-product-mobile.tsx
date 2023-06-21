import React from "react";
import styled from "styled-components";
import { IconCartPlus, IconWhatsapp } from "../../../../../icons/icons";
import { theme } from "../../../../../../config";
import FormatCurrency from "../../../../../services/format-currency";
import Button1 from "../../../../common/button-1";

const StyleInfoProductMobile = styled.div`

    width: 100%;
    height: 100%;
    position: absolute;
    & > .info-product-mobile{

        display: block;
        position: absolute;
        width: 100%;
        height: 100%;

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
                    font-size: 19px;
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


    return<StyleInfoProductMobile>

                <div className="info-product-mobile">
    
                <div className="container-price">

                    <div className="prices">

                        <div className="discount">{FormatCurrency(props.product.attributes.sale_price,'COP','es-CO')}</div>
                        <div className="price">{FormatCurrency(props.product.attributes.discount_price,'COP','es-CO')}</div>

                    </div>

                    <div className="button">

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

                    <div className="add-cart">
                        <IconCartPlus width="30" height="30" fill={theme.colors.grayB} />
                    </div>
                    <div className="mercado-libre">
                        <img width="33px" src={theme.data_domain+'/uploads/icon_ml_c2c95579cc.png'} alt="" />
                    </div>
                    <div className="whatsapp">
                        <IconWhatsapp width="33" height="30" fill={theme.colors.grayB} />
                    </div>
                </div>


    
            </div>
    </StyleInfoProductMobile>
}