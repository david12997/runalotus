import { css } from "styled-components";

const GridStyleTienda = () =>{


    return css`

        grid-template-areas:"nav nav nav nav"
                        "welcome welcome welcome welcome"
                        "cards cards cards cards"
                        "categories categories categories categories"
                        "products products products products"
                        "pay pay pay pay"
                        "wish wish wish wish"
                        "cash cash cash cash"
                        "track track track track"
                        "footer footer footer footer"
        ;  
        grid-template-columns:1fr 1fr 1fr 1fr;
        grid-template-rows:80px 430px 390px  740px 1100px 780px 780px 780px 780px 1100px;
        @media(min-width:330px){
            grid-template-rows:80px 570px 390px  740px 1100px 780px 760px 780px 860px 1100px;
        }
        @media(min-width:400px){
            grid-template-rows:80px 660px 390px  740px 1100px 780px 600px 780px 860px 1100px;
        }
        @media(min-width:520px){
            grid-template-rows:80px 790px 390px  740px 1100px  800px 650px 880px 960px 1100px;
        }
        @media(min-width:800px){
            grid-template-rows:80px 260px 410px  790px 1100px 630px 600px 630px 610px 500px;
        }
        @media(min-width:1000px){
            grid-template-rows:80px 330px 410px  790px 1100px 630px 600px 630px 610px 500px;
        }
        @media(min-width:1260px){
            grid-template-rows:80px 390px 410px  790px 1100px 630px 540px  630px 610px 500px;
        }
        @media(min-width:1490px){
            grid-template-rows:80px 530px 410px  950px 1100px 630px 550px 630px 630px 500px;
        }

    `;

    
  
}
export default GridStyleTienda;