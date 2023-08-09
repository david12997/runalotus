import React from "react";
import styled from "styled-components";
import { theme } from "../../../../config";
import Markdown from "markdown-to-jsx";
import Button1 from "../../common/button-1";
import FormatCurrency from "../../../services/format-currency";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const StyleViewDesktop = styled.div`

    & > .container-product-desktop{
        display:none;
        @media(min-width:800px){
            display:flex;
            justify-content: space-around;
            align-items: center;
            width:100%;
            height:100%;
            position: absolute;
            overflow-y:hidden;


            & > .container-product, & > .container-info{
                margin-left: 5%;
                width:46%;
                height:99%;

               
            }

            & > .container-product{
                    
                & > .container{
                    width:100%;
                    height:100%;
                    
                    background-color:${theme.colors.white};
                    border-radius:10px;
                    border:1px solid ${theme.colors.grayD};
                    overflow-y: scroll;
                    overflow-x: hidden;
                    position: relative;

                    & > .container-title{
                        width:42%;
                        margin-left:1%;
                        height:50px;
                        display: flex;
                        justify-content: start;
                        align-items: center;
                        font-size:22px;
                        font-weight: 500;
                        color:${theme.colors.balck};
                        border-bottom:1px solid ${theme.colors.grayD};
                        position: fixed;
                        background-color:${theme.colors.white};
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        z-index:999;
                    }

                    & > .container-image{
                        margin-top: 50px;
                        width:100%;
                        height:90%;
                        position: relative;


                        &  > .img-product{
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;



                            &  img{
    
                                width: 82%;
                                object-fit: contain;
                                position: relative;
                                z-index: 9;
                                height:70vh;
                                margin-top: 0%;
                                
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

                    & > .container-description{
                        
                        width:95%;
                        margin-left:2.5%;
                        min-height: 100px;
                        height:auto;
                    }
                }
                
            }

            & > .container-info{

                & > .container{
                    margin-left: 10%;
                    width:80%;
                    height:100%;
                    background-color:${theme.colors.white};
                    border-radius:10px;
                    border:1px solid ${theme.colors.grayD};
                    overflow-y: scroll;
                    overflow-x: hidden;

                    & > .container-price{
                        width:90%;
                        margin-left:5%;
                        height:16%;
                        margin-top:10px;
   
                      

                        & > .price-discount{
                            font-size: 19px;
                            font-weight: 500;
                            color:${theme.colors.grayB};
                            text-decoration: line-through;
                            @media(min-width:1400px){
                                font-size: 22px;
                            }
                        }

                        & > .price-sale{
                            font-size:33px;
                            font-weight: 600;
                            color:${theme.colors.balck};
                            @media(min-width:1400px){
                                font-size: 36px;
                            }
                        }
                        

                    }

                    & > .container-info-block{
                        border-top:1px solid ${theme.colors.grayD};
                        border-bottom: 1px solid ${theme.colors.grayD} ;
                        padding-top: 4px;
                        width:90%;
                        height:16%;
                        margin-left:5%;
                        

                        & > .opciones-info{
                            display: flex;
                            overflow-x: scroll;
                            overflow-y: hidden;
                            width:100%;
                            height:91px;

                            & > div{
                                display: block;
                                margin:10px;
                                width:60px;
                                height:60px;
                                box-shadow: inset 1px 1px 3px rgba(0,0,0,0.36);
                                border-radius:5px;
                                background:${theme.colors.background};

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
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    width:100%;
                                  
                                    font-size:17px;
                                    font-weight:600;
                                    color:${theme.colors.secondaryA};
                                }
                            }
                        }
                    }

                    & > .container-buy{

                        margin-top: 3%;
                        width:90%;
                        margin-left:5%;
                        height:50%;

                        & > .quantity{
                            width:100%;
                            height:30px;
                           

                            & > .available{

                                width:100%;
                                height:46px;
                                font-size: 16px;
                                color:${theme.colors.grayA};
                                font-weight: 500;

                                & > span{
                                    font-weight: 600;
                                    color:${theme.colors.balck};
                                    font-size: 18px;
                                }

                            }

                            & > .choose-quantity{
                               
                                width:65%;
                                height:100%;
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
                                    cursor: pointer;
                                
                                }

                                & > .btn-less{
                                    background:${theme.colors.primaryA};
                                    font-size: 30px;
                                    font-weight: 900;
                                }
                                & > .btn-more{
                                    background:${theme.colors.successA};
                                    font-size: 30px;
                                }
                                & > .input-quantity{
                                    background:${theme.colors.background};
                                    box-shadow: inset 1px 1px 3px rgba(0,0,0,0.36);
                                    border:1px solid ${theme.colors.grayC};
                                    color:${theme.colors.balck};
                                    font-size: 25px;
                                    font-weight: 600;
                                }
                            }



                        }

                        & > .btn-buy{
                            margin-top:13vh;
                            width:100%;
                           
                        }
                    }

                }

            }


        }
    }



`;

type PropsViewProduct ={

    product:{id:number,attributes:any},
    quantity:number,
    addQuantity:()=>void,
    lessQuantity:()=>void,
    BuyProduct:()=>void


}

export default function ViewDesktop(props:PropsViewProduct):JSX.Element{


    return<StyleViewDesktop>

        <div className="container-product-desktop">
            <div className="container-product">
                <div className="container">
                    <div className="container-title">
                        <li>{props.product.attributes.name}</li> 
                    </div>
                    <div className="container-image">
                    
                        <div className="img-product">
                            <Carousel 
                                showIndicators
                                dynamicHeight
                                showArrows
                                emulateTouch  
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

                    <div className="container-description">
                        <Markdown options={{forceBlock: true}} >
                            {props.product.attributes.description}
                        </Markdown>

                    </div>
                </div>
                
            </div>
            <div className="container-info">

                <div className="container">

                    <div className="container-price">
                        
                        <div className="price-discount">
                            {
                                props.product.attributes.discount_price !== "0"
                                &&
                                FormatCurrency(props.product.attributes.sale_price,"COP",props.product.attributes.locale)
                            }
                            
                        </div>
                        <div className="price-sale">
                            {
                                props.product.attributes.discount_price !== "0"
                                ?
                                FormatCurrency(props.product.attributes.discount_price,"COP",props.product.attributes.locale)
                                :
                                FormatCurrency(props.product.attributes.sale_price,"COP",props.product.attributes.locale)
                            }
                            
                        </div>
                    
                    </div>

                    <div className="container-info-block">
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
                                height:"30px",
                                marginLeft:"10px"
                                }} 
                                className="property"
                            ></div>
                        </div>

                    
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
                                <div className="btn-more" onClick={props.addQuantity} >
                                    +
                                </div>
                            </div>
                        </div>
                        <div className="btn-buy" onClick={()=>{


                        }}>
                            <p style={{color:theme.colors.grayA,fontWeight:'400',fontSize:'16px',}}>
                                <img style={{position:"relative"}} width={"30px"} loading="lazy" src={theme.data_domain+'/uploads/icon_mercado_libre_eb4daa11bb.png'} /> 
                                {`\u00A0 \u00A0Procesamos tus pagos y envios con tu `}<strong style={{color:theme.colors.warningA}}>cuenta de Mercado Libre</strong>
                            </p>
                            <p style={{color:theme.colors.grayA,fontWeight:'400',fontSize:'16px',}}>
                                <img style={{position:"relative"}} width={"30px"} loading="lazy" src={theme.data_domain+'/uploads/icon_mercadopago_bf1c6deb75.png'} /> 
                                {` \u00A0 \u00A0Con `} 
                                <strong style={{color:theme.colors.secondaryA}}>Mercado Pago</strong>
                                {` puedes comprar usando tu tarjeta de credito`}
                            </p>
                            <p style={{color:theme.colors.grayA,fontWeight:'400',fontSize:'16px'}}>
                                <img style={{position:"relative"}} width={"36px"} loading="lazy" src={theme.data_domain+'/uploads/efectivo_b3b19ee92b.webp'} /> 
                                 
                               {` \u00A0 Agenda un pedido y `} <strong style={{color:theme.colors.successA}}>paga cuando recibas  tu compra</strong>
                            </p>
    
                            <Button1
                                minWidth="100%"
                                minHeight="60px"
                                text="Comprar ahora"
                                bgColor={theme.colors.secondaryA}
                                click={props.BuyProduct}
                                
                            />
                            <br></br>
                            <Button1
                                minWidth="100%"
                                minHeight="60px"
                                text="Agendar pedido"
                                bgColor={theme.colors.successA}
                                click={()=>{
                                    
                                    let data:any;
                                    if(props.product.attributes.discount_price === "0" || props.product.attributes.discount_price === ""){

                                        data = {
                                            id:props.product.id,
                                            name:props.product.attributes.name,
                                            price:props.product.attributes.sale_price,
                                            quantity:props.quantity,

                                        }
                                        
                                    }else{

                                        data = {
                                            id:props.product.id,
                                            name:props.product.attributes.name,
                                            price:props.product.attributes.discount_price,
                                            quantity:props.quantity,

                                        }
                                    }

                                    const message= "Hola, quiero agendar un pedido  (** No modifiques este mensaje **)"
                                    window.open(`https://api.whatsapp.com/send?phone=573172789710&text=${message};cart=false;data=${JSON.stringify(data)};type=product-bot`,'_blank');
                                    window.focus();

                                }}
                                
                            />
                        </div>
                        <br/>
                        <br/>
                    </div>

                </div>
            </div>

            

        </div>
    </StyleViewDesktop>
}
