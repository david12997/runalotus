import React from "react";
import styled from "styled-components";
import ViewMobile from "./view-mobile";
import ViewDesktop from "./view-desktop";


const StyleViewProduct = styled.div`

    grid-area:products;
    width:100%;
    height:100%;
    position:relative;
    margin-top: -2px;


`;

type PropsViewProduct ={

    product:{id:number,attributes:any}


}

export default function ViewProduct(props:PropsViewProduct):JSX.Element {

    const [quantity,setQuantity] = React.useState<number>(1);

    const addQuantity =()=>quantity < props.product.attributes.stock && setQuantity(quantity+1);
    const lessQuantity =()=>quantity > 1 && setQuantity(quantity-1);
    const BuyProduct =()=>{

        const urlPay:string = props.product.attributes.links_marketplace.pay_mercadoshops.replace('%26quantity%3D1%26',`%26quantity%3D${quantity}%26`);
        window.open(urlPay,'_blank');
    };

    return <StyleViewProduct>

        <ViewMobile 
            BuyProduct={BuyProduct}
            product={props.product}
            quantity={quantity}
            addQuantity={addQuantity}
            lessQuantity={lessQuantity}
        />
        <ViewDesktop 
            BuyProduct={BuyProduct}
            product={props.product}
            quantity={quantity}
            addQuantity={addQuantity}
            lessQuantity={lessQuantity}
        />


    </StyleViewProduct>
}