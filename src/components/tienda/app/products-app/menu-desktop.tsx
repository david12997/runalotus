import React  from "react";
import styled from "styled-components";
import { theme } from "../../../../../config";
import { IconCategories, IconFilters } from "../../../../icons/icons";



const StyleMenuDesktop = styled.div`

    & > .menu-desktop{

        display: none;
        @media(min-width:800px){

            margin-top: 0px;
            display: block;
            width: 16%;
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
                    height: 150px;
                    border:2px solid ${theme.colors.grayD};

                    & > .img{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 80%;
                        & > img{
                            margin-left: 2.5%;
                            width: 95%;
                            border-radius: 35px;
                            max-height: 120px;
                            max-width:120px;
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


`;


type PropsMenuDesktop = {
    categories:any,
    products:any,
    setProducts:(currentCategory:number,nameCategory:string,products:any[])=>void,
}

export default function MenuDesktop(props:PropsMenuDesktop):JSX.Element {



    return<StyleMenuDesktop>

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

                        return<div key={index} 
                            className="card-categorie" 
                            onClick={()=>props.setProducts(category.id,category.attributes.name.toLowerCase(),props.products.data)}
                        >

                            <div className="img">
                                <img src={ theme.data_domain+ category.attributes.media.data[0].attributes.url} alt="" />
                            </div>
                            <div className="text">
                                {category.attributes.name}
                            </div>
                        
                        </div>
                    })
                }

            </div>

        </div>
    </StyleMenuDesktop>
}