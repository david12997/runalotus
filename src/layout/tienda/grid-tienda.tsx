import { css } from "styled-components";

const GridStyleTienda = () =>{


    return css`
       grid-template-areas:"nav nav nav nav"
                                    "navigation navigation navigation navigation"
                                    "products products products products"
                ;
                grid-template-columns:1fr 1fr 1fr 1fr;
                grid-template-rows:80px  24px calc(100vh - 112px);
                @media(min-width:800px){

                    grid-template-rows:80px  30px calc(100vh - 118px);
                }

    
    `

       

    
  
}
export default GridStyleTienda;