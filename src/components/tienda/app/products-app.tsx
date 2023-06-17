import React from "react";
import styled from "styled-components";

import { theme } from "../../../../config";
import Button1 from "../../common/button-1";
import { IconCartPlus, IconCategories, IconFilters, IconWhatsapp } from "../../../icons/icons";
import FormatCurrency from "../../../services/format-currency";
import Select from "react-select";

const StyleProductsStore = styled.section`

    grid-area:products;
    position:relative;

    & > span > .container-app{

        padding:1px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 99%;
        height: 92%;
        margin-bottom: 30px;
        margin-top: 30px;

        @media(min-width:800px){

            width: 50%;
            left: 25%;
            margin-top: 30px;
            margin-bottom: 30px;
            
        }

    }

    & > span > .hr-product{
        width:100%;
        margin-left:0%;
        height:1px;
        border:none;
        background-color:${theme.colors.grayD};
        @media(min-width:800px){
            width: 72%;
            margin-left: 28%;
        }
    }

    &  > .menu-mobile{

        top: 5px;
        position: absolute;
        background: transparent;
        width: 96%;
        height: 60px;
        display: flex;
        align-items: center;
        overflow-x: scroll;
        overflow-y: hidden;
        z-index: 999;
        @media(min-width:800px){

            display: none;
        }

        & > span > .option-menu{

            background: ${theme.colors.white};
            width:160px;
            height: 43px;
            border-radius: 20px;
            box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;

            & > .icon{
                width: 30%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                & > img{
                    max-width: 90%;
                    max-height: 93%;
                    border-radius: 10px;
                }
            }

            & > .text{
                max-width: 65%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    & > .menu-desktop{

        display: none;
        @media(min-width:800px){

            margin-top: 3px;
            display: block;
            width: 20%;
            height: 85%;
            position: fixed;
            background: ${theme.colors.white};
            border-radius: 10px;
            box-shadow: 0px 0px 3px rgba(0,0,0,0.5);

            & > .type-menu{
                padding: 3px;
                width: 100%;
                height: 60px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                cursor: pointer;

            }

            & > .container-type-menu{
                width: 100%;
                height: 84%;
                overflow-y: scroll;

                & > .card-categorie{

                    border-radius: 10px;
                    margin-top: 20px;
                    margin-bottom: 20px;
                    width: 80%;
                    margin-left: 10%;
                    height: 260px;
                    border:4px solid ${theme.colors.grayD};

                    & > .img{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 80%;
                        & > img{
                            margin-left: 2.5%;
                            width: 95%;
                            border-radius: 35px;
                            max-height: 200px;
                            max-width:250px;
                        }
                    }

                    & > .text{
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }

        }
    }

    & > .promotions{
        margin-top: 80px;
        position: relative;
        width: 96%;
        height: 600px;
        @media(min-width:800px){

            width: 80%;
            margin-left: 20%;
            margin-top: 9px;
            height: 510px;
        }

       
    }

    & > .title-category{
        position: relative;
        width: 100%;
        height: 60px;
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;


        @media(min-width:800px){

            width: 80%;
            margin-left: 20%;
        }

        & > #categories-select{
            width:75%;
            margin-left: 5%;
            @media(min-width:800px){
                width: 56%;
                margin-left: 1%;
            }
        }

        & > .icon{
            width: 15%;
            margin-left: 3%;
            @media(min-width:800px){
                width: 5%;
                margin-left: 6%;
            }
        }
    }

    & > .promotions > .container-promo-1, & > .promotions > .container-promo-2{

        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;

        & > .pormotion{
            margin-top: 2px;
            margin-bottom: 2px;
            position: relative;
            width:300px;
            height: auto;
            @media(min-width:800px){
                width: 450px;
                margin-top: 20px;
                margin-bottom: 20px;
            }

            & > img{
                width: 100%;
                border-radius: 10px;
                margin:3px
            }
        }
    }

    & > .promotions > .title-promo{

        width: 100%;
        height: 36px;
        font-size: 19px;
        font-weight: 800;
        display: flex;
        justify-content: flex-start;
        align-items: center;    
        margin-left: 10px;
        color: ${theme.colors.balck};
        @media(min-width:800px){
            margin-left: 40px;
            font-size: 22px;
            height: 40px;
            
        }
    }


    & > span > .container-app > .product{

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

    & > span > .container-app >  .info-product-desktop{

        display: none;
        @media(min-width:800px){

            display: block;
            position: absolute;
            width: 300px;
            height: 95%;
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

    & > span > .container-app > .info-product-mobile{

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

type PropsProductstore ={
    categories:{data:any[], meta:any},
    products:{data:any[], meta:any},
    context:any
}

export default function ProductsStore(props:PropsProductstore):JSX.Element {
    

    console.log(props.products)

    const catgeoriesSelect:any[] = [];

    props.categories.data.forEach((category:any,index:number)=>{
        catgeoriesSelect.push({

            value:category.attributes.name,
            label:category.attributes.name,
            icon:theme.data_domain+ category.attributes.media.data[0].attributes.url

        })

    });

    const customStylesSelect = {

        control: (base:any) => ({
          ...base,
          height: 55,
          minHeight: 55,
          fontSize:24,
          fontWeight:300
        })
      };
      
    
    return<StyleProductsStore>

            <div className="menu-mobile">
                
                {
                    props.categories.data.map((category:any,index:number)=>{

                        const iconFilter  = category.attributes.media.data[0].attributes.url;
                        const nameCategory = category.attributes.name;

                        return<span key={index}><div className="option-menu">
                    
                            <div className="icon">
                                <img  src={theme.data_domain+iconFilter} alt="" />
                            </div>
        
                            <div className="text">
                                {nameCategory}
                            </div>
                        
                        </div></span>
    
                    })
                }





            </div>        
            
            <div className="menu-desktop">

                <div className="type-menu">

                    <div className="categories">
                       <IconCategories width="25" height="25" fill={theme.colors.primaryA} /> 
                    </div>
                    <div className="filters">
                        <IconFilters width="28" height="28" fill={theme.colors.primaryA}/>
                    </div>

                </div>

                <div className="container-type-menu">

                        {
                            props.categories.data.map((category:any,index:number)=>{

                                return<div key={index} className="card-categorie">

                                    <div className="img">
                                        <img src={ theme.data_domain+ category.attributes.media.data[0].attributes.url} alt="" />
                                    </div>
                                    <div className="text">
                                        {props.categories.data[0].attributes.name}
                                    </div>
                                
                                </div>
                            })
                        }

                </div>

            </div>


            <div className="promotions">

                <div className="title-promo">
                    Ofertas de la semana
                </div>

                <span className="container-promo-1">

                    <div className="pormotion">
                        <img src={theme.data_domain+'/uploads/10_off_tienda_50db21a15a.webp'} alt="" />
                    </div>
                    <div className="pormotion">
                        <img src={theme.data_domain+'/uploads/discount_jarras_139d314b15.webp'} alt="" />
                    </div>

                </span>

                <span className="container-promo-2">
                    <div className="pormotion">
                        <img src={theme.data_domain+'/uploads/discount_artesanias_ee50df4512.webp'} alt="" />
                    </div>
                    <div className="pormotion">
                        <img src={theme.data_domain+'/uploads/discount_joyeria_659d5be6dd.webp'} alt="" />
                    </div>
                </span>


            </div>


            <div className="title-category">
                
                <span className="icon">
                    <IconCategories width="43" height="43" fill={theme.colors.primaryA} />
                </span>

                <Select
                    id="categories-select"
                    placeholder="Categorias"
                    options={catgeoriesSelect}
                    formatOptionLabel={(e)=>(
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img style={{width:"30px", marginRight:'10px',marginLeft:'5px'}} src={e.icon}/> {e.label}
                        </div>
                    )}
                    styles={customStylesSelect}
                />
            </div>

        {

            props.products.data.map((product:any,index:number)=>{

                return<span key={index}>
                    
                    <span className="container-app">

              
                        <div className="product">
                
                
                            <div className="img-product">
                                <img src={theme.data_domain+ product.attributes.media.data[0].attributes.url } alt="" />
                            </div>
                
                        </div>
                
                        <div className="info-product-mobile">
                
                            <div className="container-price">
            
                                <div className="prices">
            
                                    <div className="discount">{FormatCurrency(product.attributes.sale_price,'COP','es-CO')}</div>
                                    <div className="price">{FormatCurrency(product.attributes.discount_price,'COP','es-CO')}</div>
            
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
                                    {product.attributes.name}
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
                
                        <div className="info-product-desktop">
                            <div className="title-product">
                                <div className="name">
                                    {product.attributes.name}
                                </div> 
                            </div>

                            <hr className="hr-desktop-info-product-d"></hr>

                            <div className="container-prices">
                                <div className="prices">
                                    <div className="discount">{FormatCurrency(product.attributes.sale_price,'COP','es-CO')}</div>
                                    <div className="price">{FormatCurrency(product.attributes.discount_price,'COP','es-CO')}</div>
                                </div>
                            </div>

                            <hr className="hr-desktop-info-product-d"></hr>

                            <div className="container-info-product">
                                <div className="quantity-product">
                                   <strong> Disponibles:</strong> <span>5 unidades</span>
                                </div>
                                <div className="color-product">
                                    <strong>Color principal:</strong> <div style={{background:product.attributes.color}} className="color-palete"></div>
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
                        

                    </span>

                    <hr className="hr-product"></hr>
                </span>
            })
        }

      
       


    </StyleProductsStore>
}