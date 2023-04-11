import React, { useEffect } from "react";
import styled from "styled-components";
import CardFilter from "../../mapa/card-filter";
import CardProduct from "../card-product";
import { theme } from "../../../../config";
import { IconAngleNext, IconAnglePrevious, IconCartPlus, IconTruck } from "../../../icons/icons";
import { useRouter } from "next/router";

const StyleProductsStore = styled.section`

    grid-area:products;
    position:relative;


    & > .container-categories{

        width:90%;
        margin-left:5%;
        height:70px;
        display:flex;
        align-items:center;
        overflow-y:hidden;
        overflow-x:scroll;
        margin-top:10px;
        
    }


    & > .container-products{

        width:90%;
        margin-left:5%;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        margin-top:5px;
        @media(min-width:800px){
            margin-top: 3px;
        }
    }

    & > .pagination{
        
        width:99.5%;
        height:55px;
        margin-top:20px;
        margin-bottom:40px;
        display:flex;
        justify-content:center;
        align-items:center;

        & > .btn{

            width:50px;
            height:50px;
            margin-left:6px;
            margin-right:6px;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:17px;
            font-weight:700;
            background:${theme.colors.white};
            border-radius:6px;
            box-shadow:0px 0px 6px rgba(0,0,0,0.5);
            cursor:pointer;
        }

        
    }


`;

type PropsProductstore ={
    categories:{data:any[], meta:any},
    products:{data:any[], meta:any}
}

export default function ProductsStore(props:PropsProductstore):JSX.Element {
    
    const router = useRouter();

    //sort categories to get all products category first
    const categoriesSort = (categories:any[]) =>{
        
        return categories.sort((a:any,b:any)=>{
            return a.id - b.id;
        });
    }

    const handleCategoryLink = (name:string) =>{
        
        if(name === 'runalotus-products'){

            router.push(`/tienda/productos`); 
        
        }else{

            router.push(`/tienda/productos/${name.toLocaleLowerCase()}`);
        }

    }

    if (router.isFallback) {
        // If the page is not yet generated, show a loading spinner
        return <div>Loading...</div>;
    }

    return<StyleProductsStore>


        <div className="container-categories">
            {
                categoriesSort(props.categories.data).map((category:any,index:number)=>{

                    let name:string = category.attributes.name.split(" ")[0];
                    let url:string = category.attributes.media.data[0].attributes.url

                    return<span onClick={()=>handleCategoryLink(name)} key={index}>
                        <CardFilter 
                            img={url}
                            text={name === 'runalotus-products' ? 'Todo': name}
                            key={index}
                            font_size="16px" 
                        />
                    </span>
                })
            }

        </div>

        <div className="container-products">
            {
                props.products.data.map((product:any,index:number)=>{

                    return<span key={index} style={{margin:'20px'}}>
                        <CardProduct
                            name={product.attributes.name}
                            img={theme.data_domain+product.attributes.media.data[0].attributes.url}
                            price={`$ ${new Intl.NumberFormat('es-CO').format(Math.ceil(parseInt(product.attributes.sale_price)))} COP`}
                            discount={`$ ${new Intl.NumberFormat('es-CO').format(Math.ceil(parseInt(product.attributes.discount_price)))} COP`}
                            alt={ 'producto '+product.attributes.name}
                            iconAdd={
                                <IconCartPlus 
                                    width="30" 
                                    height="30" 
                                    fill={theme.colors.grayA} 
                                />
                            }
                            iconTruck={
                                <IconTruck
                                    width="22" 
                                    height="22" 
                                    fill={theme.colors.successA} 
                                />
                            }
                            textDelivery="Envío gratis"
                        />
                    </span>
                })
            }
        </div>

        <div className="pagination">
            <div className="btn btn-anterior">
                <IconAnglePrevious width="14" height="14" fill={theme.colors.grayB}/>
            </div>

            <div className="btn btn-page">
                1
            </div>

            <div className="btn btn-page">
                2
            </div>

            <div className="btn btn-siguiente">
                    <IconAngleNext width="14" height="14" fill={theme.colors.grayB}/>
            </div>
        </div>

    </StyleProductsStore>
}