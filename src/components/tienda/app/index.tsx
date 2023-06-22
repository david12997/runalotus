import React from "react";
import styled from "styled-components";

import { theme } from "../../../../config";
import { useRouter } from "next/router";


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



    menuMobile:JSX.Element,
    menuDesktop:JSX.Element,
    promotions:JSX.Element,
    titleCategory:JSX.Element,
    infiniteScroll:any,
}

export default function ProductsStore(props:PropsProductstore):JSX.Element {
    

    const router = useRouter();


    return<StyleProductsStore>


        {props.menuMobile}
        {props.menuDesktop}
        {(router.asPath === '/tienda') && props.promotions }
        {props.titleCategory}
        <span className="container-products">

           {props.infiniteScroll}

        </span>

    

    </StyleProductsStore>
}