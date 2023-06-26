import React from "react";
import styled from "styled-components";
import { theme } from "../../../../config";
import FormatCurrency from "../../../services/format-currency";
import Markdown from "markdown-to-jsx";
import Button1 from "../../common/button-1";
import ViewMobile from "./view-mobile";


const StyleViewProduct = styled.div`

    grid-area:products;
    width:100%;
    height:100%;
    height:auto;
    position:relative;

    & > .container-product-desktop{
        display:none;
        @media(min-width:800px){
            display:flex;
            justify-content: space-around;
            align-items: center;
            width:100%;
            height:100%;

            & > .container-product, & > .container-info{
                margin-left: 5%;
                width:46%;
                height:94%;
               
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
                    }

                    & > .container-image{
                        margin-top: 50px;
                        width:100%;
                        height:80%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 50px;
                     


                        & > img{
                            
                            height:100%;
                            width:100%;
                           
                            object-fit: contain;
                        }
                    }

                    & > .container-thubmls{
                        margin-left:1%;
                        width:97%;
                        height:100px;
                        display: flex;
       
                        overflow-x: scroll;
                        overflow-y: hidden;
                        margin-top:10px;
                        position: absolute;
                        top:82%;

                        & > div{
                            width:90px;
                            height:60px;
                            border:1px solid ${theme.colors.grayD};
                            margin:10px;
                            background: ${theme.colors.white};
                            border-radius: 6px;

                            & > img{
                                width:100px;
                                height:100%;
                                object-fit: contain;

                            }
                        }
                    }

                    & > .container-description{
                        
                        width:95%;
                        margin-left:2.5%;
                        min-height: 100px;
                        height:auto;
                        margin-top: 85px;
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

                    & > .container-price{
                        width:90%;
                        margin-left:5%;
                        height:20%;
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
                        padding-top: 10px;
                        width:90%;
                        height:20%;
                        margin-left:5%;
                        

                        & > .opciones-info{
                            display: flex;
                            overflow-x: scroll;
                            overflow-y: hidden;
                            width:100%;
                            height:250px;

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

                        margin-top: 5%;
                        width:90%;
                        margin-left:5%;
                        height:50%;

                        & > .quantity{
                            width:100%;
                            height:20%;
                           

                            & > .available{

                                width:100%;
                                height:100%;
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
                                    width:60px;
                                    height:60px;
                                    border-radius: 5px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    color:${theme.colors.white};
                                
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
                            margin-top:16vh;
                            width:100%;
                           
                        }
                    }

                }

            }


        }
    }



`;

type PropsViewProduct ={

    product:{id:number,attributes:any}


}

export default function ViewProduct(props:PropsViewProduct):JSX.Element {

    console.log(props);

    return <StyleViewProduct>


        <ViewMobile product={props.product} />

        <div className="container-product-desktop">
            <div className="container-product">
                <div className="container">
                    <div className="container-title">
                       <li>{props.product.attributes.name}</li> 
                    </div>
                    <div className="container-image">
                        <img src={theme.data_domain+ props.product.attributes.media.data[0].attributes.url} alt=""/>

                    </div>
                    <div className="container-thubmls">
                        {
                            props.product.attributes.media.data.map((item:any,index:number)=>{
                                return <div key={index} className="container-thumb">
                                    <img src={theme.data_domain+ item.attributes.url} alt=""/>
                                </div>
                            })
                        }

                        <div className="container-thumb">
                                <img src={theme.data_domain+ props.product.attributes.media.data[0].attributes.url} alt=""/>
                        </div>
                        <div className="container-thumb">
                                <img src={theme.data_domain+ props.product.attributes.media.data[0].attributes.url} alt=""/>
                        </div>
                        <div className="container-thumb">
                                <img src={theme.data_domain+ props.product.attributes.media.data[0].attributes.url} alt=""/>
                        </div>
                        <div className="container-thumb">
                                <img src={theme.data_domain+ props.product.attributes.media.data[0].attributes.url} alt=""/>
                        </div>
                        <div className="container-thumb">
                                <img src={theme.data_domain+ props.product.attributes.media.data[0].attributes.url} alt=""/>
                        </div>

                    </div>
                    <div className="container-description">
                        <Markdown>{props.product.attributes.description}</Markdown>

                    </div>
                </div>
                
            </div>
            <div className="container-info">

                <div className="container">

                    <div className="container-price">
                        <div className="price-discount">
                            {FormatCurrency(props.product.attributes.discount_price,"COP",props.product.attributes.locale)}
                        </div>
                        <div className="price-sale">
                            {FormatCurrency(props.product.attributes.sale_price,"COP",props.product.attributes.locale)}
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
                                <div className="btn-less">
                                    -
                                </div>
                                <div className="input-quantity">
                                    1
                                </div>
                                <div className="btn-more">
                                    +
                                </div>
                            </div>
                        </div>
                        <div className="btn-buy">
                            <Button1
                                minWidth="100%"
                                minHeight="60px"
                                text="Comprar ahora"
                                bgColor={theme.colors.secondaryA}
                                
                            />
                        </div>
                    </div>

                </div>
            </div>

            

        </div>

    </StyleViewProduct>
}