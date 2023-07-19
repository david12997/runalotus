import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../config";

const StylePromotions = styled.div`
    & > .promotions{
        margin-top: 80px;
        position: relative;
        width: 96%;
        @media(min-width:800px){

            width: 80%;
            margin-left: 20%;
            margin-top: 9px;
          
        }

       
    }

    & > .promotions > .container-promo-1, & > .promotions > .container-promo-2{

        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
       
        @media(min-width:800px){
            width: 89%;
            margin-left: 5%;
        }
        

        & > .pormotion{
            margin-top: 2px;
            margin-bottom: 2px;
            position: relative;
            width:300px;
            height: auto;
            margin-left: 10px;
            margin-right: 10px;
            cursor: pointer;

            @media(min-width:800px){
                width: 340px;
                margin-top: 20px;
                margin-bottom: 20px;
            }

            @media(min-width:1200px){
                width: 400px;
            }
            & > img{
                width: 280px;
                border-radius: 10px;
                margin:3px;
                @media(min-width:330px){
                    width: 300px;
                }
                @media(min-width:800px){
                    width: 350px;
                }
                @media(min-width:1500px){
                    width: 400px;
                }
            }
        }
    }

    & > .promotions > .title-promo{

        width: 100%;
        height: 36px;
        font-size: 19px;
        font-weight: 500;
        display: flex;
        justify-content: flex-start;
        align-items: center;    
        margin-left: 10px;
        color: ${theme.colors.grayB};
        @media(min-width:800px){
            margin-left: 40px;
            font-size: 22px;
            height: 40px;
            
        }
    }


`;


export default function Promotions():JSX.Element {

    return  <StylePromotions>

        <div className="promotions">

            <div className="title-promo">
                Ofertas de la semana
            </div>

            <span className="container-promo-1">

                <div className="pormotion">
                    <img loading="lazy" src={theme.data_domain+'/uploads/10_off_tienda_50db21a15a.webp'} alt="" />
                </div>
                <div className="pormotion">
                    <img loading="lazy" src={theme.data_domain+'/uploads/discount_jarras_139d314b15.webp'} alt="" />
                </div>
                <div className="pormotion">
                    <img loading="lazy" src={theme.data_domain+'/uploads/discount_artesanias_ee50df4512.webp'} alt="" />
                </div>
                <div className="pormotion">
                    <img loading="lazy" src={theme.data_domain+'/uploads/discount_joyeria_659d5be6dd.webp'} alt="" />
                </div>

            </span>




        </div>

    
    </StylePromotions>
}