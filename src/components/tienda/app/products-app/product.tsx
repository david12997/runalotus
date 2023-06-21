import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../config";
import FormatCurrency from "../../../../services/format-currency";
import { IconCartPlus, IconWhatsapp } from "../../../../icons/icons";
import Button1 from "../../../common/button-1";
import InfoProductMobile from "./product/info-product-mobile";
import InfoProductDesktop from "./product/info-product-desktop";

const StyleProductApp = styled.div`

    & > .container-app{

        padding:1px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 99%;
        height: 85vh;
        margin-bottom: 30px;
        margin-top: 30px;

        @media(min-width:310px){
            height: 83vh;
        }

        @media(min-width:800px){

            width: 42%;
            height: 80vh;
            left: 25%;
            margin-top: 30px;
            margin-bottom: 30px;
            
        }
        @media(min-width:1200px){
            width: 48%;
        }

    }


    & >  .container-app > .product{

        width:96%;
        height:96%;
        position: relative;
        border-radius: 10px;
        background: ${theme.colors.white};
        box-shadow: 0px 0px 3px rgba(0,0,0,0.5);

       

        &  > .img-product{
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;

            & > img{
                height:82%;
                width: 82%;
                margin-top: 12%;
                object-fit: contain;
                
                @media(min-width:800px){
                    height:100%;
                    margin-top: 0%;
                }
            }
            
        }

    }



`;

type ProductAppProps = {
    product: any
}

export default function ProductApp(props:ProductAppProps): JSX.Element {

    //console.log(props.product);

    return <StyleProductApp>

        <span className="container-app">

    
            <div className="product">
    
    
                <div className="img-product">
                    <img src={theme.data_domain+ props.product.attributes.media.data[0].attributes.url } alt="" />
                </div>
    
            </div>
    
            <InfoProductMobile product={props.product} />
            <InfoProductDesktop product={props.product} />
    

            

        </span>

    </StyleProductApp>

}