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
            height: 90%;
            position: fixed;
            background: ${theme.colors.white};
            border-radius: 10px;
            box-shadow: 0px 0px 2px rgba(0,0,0,0.4);

            & > .title-category{
                font-size: 18px;
                color: ${theme.colors.grayB};
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
            }


            & > .container-type-menu{
                width: 100%;
                height: 84%;
                overflow-y: scroll;

                & > .card-categories{

                    border-radius: 10px;
                    margin-top: 20px;
                    margin-bottom: 20px;
                    width: 80%;
                    margin-left: 10%;
                    height: 150px;
                    border:2px solid ${theme.colors.grayD};
                    cursor:pointer;

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
    
    const data = props.categories.data || [];
    const Sortcategories = [...data];

    const index13 = data.findIndex((item: any) => item.id === 13);
    const index1 = data.findIndex((item: any) => item.id === 1);
    if
     (index13 !== -1) {
        
        Sortcategories.splice(0, 0, data[index1]); // Remove the item with id 13 from the original position
        Sortcategories.splice(1, 0, data[index13]); // Insert the item with id 13 in the second position
        Sortcategories.splice(7, 1); // Remove the item with id 13 from the original position
        Sortcategories.splice(3, 1); // Remove the item with id 1 from the original position
    }
    
    return<StyleMenuDesktop>

        <div className="menu-desktop">

            <div className="title-category">
                <IconCategories fill={theme.colors.grayB} width="16" height="16" />
                <span style={{marginLeft:"10px"}}>Categorias</span>
            </div>

            <div className="container-type-menu">

                {
                    Sortcategories.map((category:any,index:number)=>{

                        return<div key={index} 
                            data-id={category.id}
                            id={`category-desktop-${category.id}`}
                            className="card-categories categories-desktop-store" 
                            onClick={()=>{
                                Sortcategories.forEach((item:any)=>{
                                    document.getElementById(`category-desktop-${item.id}`)?.style.setProperty('border','2px solid '+theme.colors.grayD);
                                })
                                document.getElementById(`category-desktop-${category.id}`)?.style.setProperty('border','3px solid '+theme.colors.secondaryA);
                                props.setProducts(category.id,category.attributes.name.toLowerCase(),props.products.data)
                            }}
                        >

                            <div className="img">
                                <img loading="lazy" src={ theme.data_domain+ category.attributes.media.data[0].attributes.url} alt="" />
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