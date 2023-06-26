import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../config";

const StyleMenuMobile = styled.div`

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

`

type PropsMenuMobile ={
    categories:any,
    products:any,
    setProducts:(currentCategory:number,nameCategory:string,products:any[])=>void,
}

export default function MenuMobile(props:PropsMenuMobile):JSX.Element {

    return<StyleMenuMobile>

        <div className="menu-mobile">
                        
            {
                props.categories.data.map((category:any,index:number)=>{

                    const iconFilter  = category.attributes.media.data[0].attributes.url;
                    const nameCategory = category.attributes.name;

                    return<span key={index}>
                        <div className="option-menu" onClick={()=>props.setProducts(category.id,category.attributes.name.toLowerCase(),props.products.data)}>
                
                            <div className="icon">
                                <img  src={theme.data_domain+iconFilter} alt="" />
                            </div>

                            <div className="text">
                                {nameCategory}
                            </div>
                        
                        </div>
                    </span>

                })
            }

        </div>
    </StyleMenuMobile>
}