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
        z-index: 99;
        @media(min-width:800px){

            display: none;
        }

        & > span > .option-menu{

            background: ${theme.colors.white};
            width:160px;
            height: 43px;
            border-radius: 20px;
            box-shadow: 0px 0px 2px rgba(0,0,0,0.4);
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
    const data = props.categories.data || [];
    const Sortcategories = [...data];

    const index13 = data.findIndex((item: any) => item.id === 13);
    const index1 = data.findIndex((item: any) => item.id === 1);
    
    if (index13 !== -1) {
        Sortcategories.splice(0, 0, data[index1]); // Remove the item with id 13 from the original position
        Sortcategories.splice(1, 0, data[index13]); // Insert the item with id 13 in the second position
        Sortcategories.splice(7, 1); // Remove the item with id 13 from the original position
        Sortcategories.splice(3, 1); // Remove the item with id 1 from the original position
    }
    
    return<StyleMenuMobile>

        <div className="menu-mobile">
                        
            {
               Sortcategories.map((category:any,index:number)=>{

                    const iconFilter  = category.attributes.media.data[0].attributes.url;
                    const nameCategory = category.attributes.name;

                    return<span key={index}>
                        <div className="option-menu" onClick={()=>props.setProducts(category.id,category.attributes.name.toLowerCase(),props.products.data)}>
                
                            <div className="icon">
                                <img loading="lazy" src={theme.data_domain+iconFilter} alt="" />
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