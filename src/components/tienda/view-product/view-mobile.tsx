import React from "react";
import styled from "styled-components";
import Button1 from "../../common/button-1";
import { theme } from "../../../../config";
import Markdown from "markdown-to-jsx";
import FormatCurrency from "../../../services/format-currency";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const StyleViewMobile = styled.div`

    & > .container-product-mobile{
        margin-left: 2.5%;
        margin-top: 2.5%;
        width:95%;
        height:97%;
        overflow-y: scroll;
        overflow-x: hidden;
        border-radius:10px;
        box-shadow: 0px 0px 3px  rgba(0,0,0,0.4) ;
        background:${theme.colors.white};
        position:absolute;
        @media(min-width:800px){
            display:none;
        }

        & > .container-img{

            width:100%;
            height:69vh;
            display:flex;
            justify-content:center;
            align-items:center;
            @media(min-height:550px){
                height:73vh;
            }

            &  > .img-product{
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;

                & > .mybloque{
                    position: absolute;
                    width: 100%;
                    height: 18vh;
                    background: transparent;
                    z-index: 997;
                    top: 57%;
                }


                &  img{

                    width: 94%;
                    object-fit: contain;
                    position: relative;
                    z-index: 9;
                    height:70vh;
                    margin-top: 5%;
                    
                }

                &  div, .slider{
                    height: 100%;
                    position: relative;
                    z-index: 9;
                }

                & .control-dots{
                    z-index: 99;
                    top: 87%;

                
                & .dot{
                        background: ${theme.colors.grayB};
                        width: 22px;
                        height: 22px;
                        margin-top:-140px;

                }
                }

                & .carousel-status{
                    font-weight: 700;
                    color: ${theme.colors.grayB};
                    text-shadow: none;
                    z-index:99;
                    font-size: 13px;
                    top: 0%;
                    left: 90%;
                    border: 0;
                    @media(min-width:800px){

                    }
                }
                
            }
        }


        & > .container-name{
            position: fixed;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width:92%;
            border-radius: 10px;
            height:45px;
            object-fit: contain;
            background: ${theme.colors.white};
            z-index:999;


            & > h4{
                margin-left:2.5%;
                font-size:18px;
                font-weight:500;
                width:100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        & > .container-info-colum{
            left:calc(100% - 60px);
            top:10%;
            width:55px;
            height:80%;
            max-height:400px;
            position: absolute;
            z-index: 99;
            @media(min-width:310px){
                left:calc(100% - 70px);
                width:65px;
            }


            & > .opciones-info{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width:100%;
                height:100%;

                & > div{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    height:16%;
                    box-shadow: inset 1px 1px 3px rgba(0,0,0,0.36);
                    border-radius:5px;
                    background: rgba(255, 255, 255, 0.6);

                    & > .title{
                       
                        width:90%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color:${theme.colors.grayA};
                        font-size:15px;
                        font-weight:400;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    & > .property{
                        
                        font-size:17px;
                        font-weight:600;
                        color:${theme.colors.secondaryA};
                    }
                }
            }

        }

        & > .container-price{
            width:90%;
            margin-left:5%;
            height:70px;


            & > .price-discount{
                font-size:16px;
                font-weight: 500;
                text-decoration: line-through;
                color:${theme.colors.grayA};
            }

            & > .price-sale{
                font-size:28px;
                font-weight: 800;
            }

        }

        & > .container-description{
            margin-top: 5px;
            margin-bottom: 5px;
            width:90%;
            margin-left:5%;
            border-top:1px solid ${theme.colors.grayC};
            border-bottom:1px solid ${theme.colors.grayC};
        }

        & > .container-buy{
            width:90%;
            margin-left:5%;
            height:400px;
            margin-top: 5px;
            @media(min-width:310px){
                height:360px;
            }


            & > .quantity{
                width:100%;
                height:100px;
               
                & > .available{
                    width:100%;
                    height:30%;
                    font-size: 14px;
                    color:${theme.colors.grayA};
                    font-weight: 500;

                    & > span{
                        font-weight: 600;
                        color:${theme.colors.balck};
                        font-size: 16px;
                    }

                }

                & > .choose-quantity{
                    width:100%;
                    height:70%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    & > .btn-less, .btn-more, .input-quantity{
                        width:50px;
                        height:50px;
                        border-radius: 5px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color:${theme.colors.white};
                       
                    }

                    & > .btn-less{
                        background:${theme.colors.primaryA};
                        font-size: 25px;
                        font-weight: 900;
                    }
                    & > .btn-more{
                        background:${theme.colors.successA};
                        font-size: 25px;
                    }
                    & > .input-quantity{
                        background:${theme.colors.background};
                        box-shadow: inset 1px 1px 3px rgba(0,0,0,0.36);
                        border:1px solid ${theme.colors.grayC};
                        color:${theme.colors.balck};
                        font-size: 19px;
                        font-weight: 600;
                    }
                }

            }

            & > .btn-buy{
                width:100%;
              

                & > div{
                    margin-top:20px;
                }
                
            }
        }
    }


`;

type PropsViewProduct ={

    product:{id:number,attributes:any}
    quantity:number,
    addQuantity:()=>void,
    lessQuantity:()=>void,
    BuyProduct:()=>void


}
export default function ViewMobile(props:PropsViewProduct):JSX.Element{

    return<StyleViewMobile>
                <div className="container-product-mobile">

            <div className="container-name">
                <h4>{props.product.attributes.name}</h4>
            </div>

            <div className="container-info-colum">
                <div className="opciones-info">
                    <div className="disponibles">
                        <div className="title">
                            Stock
                        </div>
                        <div className="property">
                            {props.product.attributes.stock}
                        </div>
                    </div>
                    <div className="width"> 
                        <div className="title">
                            Ancho
                        </div>
                        <div className="property">
                            {props.product.attributes.width}
                        </div>    
                    </div>
                    
                    <div className="height">
                        <div className="title">
                            Alto
                        </div>
                        <div className="property">
                            {props.product.attributes.height}
                        </div>
                    </div>

                    <div className="color">
                        <div className="title">
                            Color
                        </div>
                        <div style={{
                            color:props.product.attributes.color,
                            background:props.product.attributes.color,
                            borderRadius:"3px",
                            width:"40px",
                            height:"20px"
                            }} 
                            className="property"
                        ></div>
                    </div>

                   
                </div>

            </div>

            <div className="container-img">
                <div className="img-product">
                    <div className="mybloque"></div>
                    <Carousel 
                        showIndicators
                        dynamicHeight
                        showArrows  
                        showThumbs={false}
                        className="carousel"
                        
                    >

                        {
                            props.product.attributes.media.data.map((item:any, index:number) => {
                                return <img loading="lazy" key={index} src={theme.data_domain+ item.attributes.url } alt="" />
                            })
                        }
                        <img loading="lazy" src={theme.data_domain+'/uploads/lee_description_runalotus_88aee30265.png' } alt="" />
                        
                    </Carousel>
                    
                </div>
            </div>

            <div className="container-price">
                <div className="price-discount">
                    {
                        props.product.attributes.discount_price !== "0"
                        &&
                        FormatCurrency(props.product.attributes.sale_price,'COP','es-CO')
                    }
                </div>
                <div className="price-sale">
                    {
                        props.product.attributes.discount_price !== "0"
                        ?
                        FormatCurrency(props.product.attributes.discount_price,'COP','es-CO')
                        :
                        FormatCurrency(props.product.attributes.sale_price,'COP','es-CO')
                    }
                </div>
               
            </div>

            <div className="container-buy">
                <div className="quantity">
                    <div className="available">
                        <span>Cantidad </span>
                        <small>( Disponibles : {props.product.attributes.stock} )</small>
                    </div>
                    <div className="choose-quantity">
                        <div className="btn-less" onClick={props.lessQuantity}>
                            -
                        </div>
                        <div className="input-quantity">
                           {props.quantity}
                        </div>
                        <div className="btn-more" onClick={props.addQuantity}>
                            +
                        </div>
                    </div>
                </div>
                <div className="btn-buy">
                    <p style={{color:theme.colors.grayA,fontWeight:'400',fontSize:'16px',}}>
                        <img style={{position:"absolute"}} width={"30px"} loading="lazy" src={theme.data_domain+'/uploads/icon_mercado_libre_eb4daa11bb.png'} /> 
                        {`\u00A0 \u00A0 \u00A0 \u00A0 \u00A0Procesamos tus pagos y envios con tu `}<strong style={{color:theme.colors.warningA}}>cuenta de Mercado Libre</strong>
                    </p>
                    <p style={{color:theme.colors.grayA,fontWeight:'400',fontSize:'16px',}}>
                        <img style={{position:"absolute"}} width={"30px"} loading="lazy" src={theme.data_domain+'/uploads/icon_mercadopago_bf1c6deb75.png'} /> 
                        {`\u00A0 \u00A0 \u00A0 \u00A0 \u00A0Con `} 
                        <strong style={{color:theme.colors.secondaryA}}>Mercado Pago</strong>
                        {` puedes comprar usando tu tarjeta de credito`}
                    </p>
                    <Button1
                        minWidth="100%"
                        minHeight="70px"
                        text="Comprar ahora"
                        bgColor={theme.colors.secondaryA}
                        click={props.BuyProduct}
                        
                    />
                </div>
            </div>

            <div className="container-description">
                <Markdown>
                    {props.product.attributes.description}
                </Markdown>
                
            </div>

        </div>
    </StyleViewMobile>
}