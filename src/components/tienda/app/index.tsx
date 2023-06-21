import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { theme } from "../../../../config";
import Promotions from "./products-app/promotions";
import ProductApp from "./products-app/product";
import MenuMobile from "./products-app/menu-mobile";
import MenuDesktop from "./products-app/menu-desktop";
import TitleCategory from "./products-app/title-category";
import { GetData } from "../../../services/get-data";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";


const StyleProductsStore = styled.section`

    grid-area:products;
    position:relative;

    .hr-product{
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

    .loader-app-products{
        font-weight: 800;
        color: ${theme.colors.grayB}; ;
        width:100%;
        height:100px;
        display:flex;
        align-items:center;
        justify-content: center;
    }

`;

type PropsProductstore ={
    categories:{data:any[], meta:any},
    products:{data:any[], meta:any},
    context:any
}

export default function ProductsStore(props:PropsProductstore):JSX.Element {
    

    const router = useRouter();
    const containerProductsRef = useRef<HTMLSpanElement>(null);
    const [products, setProducts] = useState<any[]>([...props.products.data]);
    const [page, setPage] = useState<number>(2);

    const fetchProducts = ()=>{

        GetData(
            [`https://cms.aipus.co/api/products?populate=*&filters[subcategories][id][$eq]=1&pagination[page]=${page}&pagination[pageSize]=4`], 
            theme.token_cms as string
        ).then(response=>{
          
            setProducts((prevProducts)=>[...prevProducts, ...response[0].data]);
    
        });

        setPage(page+1);
    }

    return<StyleProductsStore>

        
        <MenuMobile categories={props.categories}/>
        <MenuDesktop categories={props.categories}/>
        {(router.asPath === '/tienda/productos') && <Promotions /> }
        <TitleCategory categories={props.categories}/>



        <span ref={containerProductsRef} className="container-products">

            <InfiniteScroll
                dataLength={products.length}
                next={()=>fetchProducts()}
                hasMore={true}
                loader={<h4 className="loader-app-products">Loading...</h4>}
            >

                {
                    products.map((product:any,index:number)=>{

                        return<span key={index}>
                            
                            <ProductApp product={product} />
                            <hr className="hr-product"></hr>

                        </span>
                    })
                }
            </InfiniteScroll>

        </span>

      
       


    </StyleProductsStore>
}