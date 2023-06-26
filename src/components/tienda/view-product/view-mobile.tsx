import React from "react";
import styled from "styled-components";
import Button1 from "../../common/button-1";
import { theme } from "../../../../config";
import Markdown from "markdown-to-jsx";
import FormatCurrency from "../../../services/format-currency";

const StyleViewMobile = styled.div`

    & > .container-product-mobile{
        margin-left: 2.5%;
        margin-top: 2.5%;
        width:95%;
        height:95%;
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

            & > img{
                margin-top: 10%;
                width:80%;
                height:83%;
                object-fit: contain;
            }
        }

        & > .container-thubmls{
            margin-left:1%;
            width:97%;
            height:40px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-x: scroll;
            overflow-y: hidden;
            margin-top: -20px;
            margin-bottom:10px;


            & > div{
                width:16px;
                height:16px;
                border:1px solid ${theme.colors.grayD};
                margin:10px;
                background: ${theme.colors.grayC};
                border-radius: 50%;


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
            height:200px;
            margin-top: 5px;


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
                height:100px;

                & > div{
                    margin-top:20px;
                }
                
            }
        }
    }


`;

type PropsViewProduct ={

    product:{id:number,attributes:any}


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
                <img src={theme.data_domain+ props.product.attributes.media.data[0].attributes.url} alt=""/>
            </div>

            <div className="container-thubmls">
                {
                    props.product.attributes.media.data.map((item:any,index:number)=>{
                        return <div key={index} className="container-thumb">
                           
                        </div>
                    })
                }

                <div className="container-thumb">
                        
                </div>
                <div className="container-thumb">
                        
                </div>


            </div>

            <div className="container-price">
                <div className="price-discount">
                    {FormatCurrency(props.product.attributes.discount_price,"COP",props.product.attributes.locale)}
                </div>
                <div className="price-sale">
                    {FormatCurrency(props.product.attributes.sale_price,"COP",props.product.attributes.locale)}
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

            <div className="container-description">
                <Markdown>
                    {props.product.attributes.description}
                </Markdown>
                
            </div>

        </div>
    </StyleViewMobile>
}