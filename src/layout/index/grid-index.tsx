import { css } from "styled-components";

const GridStyleIndex = () =>{


    return css`
        grid-template-areas:"nav nav nav nav"
                            "welcome welcome welcome welcome" 
                            "store store store store"
                            "categories categories categories categories"
                            "pay pay pay pay"
                            "routesHome routesHome routesHome routesHome"
                            "tourism tourism tourism tourism"
                            "footer footer footer footer"

        ;  
        grid-template-columns:1fr 1fr 1fr 1fr;
        grid-template-rows:80px 750px 850px 650px 780px  760px 650px   1100px;

        @media(min-width:500px){
            grid-template-rows:80px 750px 850px 650px 900px  760px 650px   1100px;
        }
        @media(min-width:800px){
            grid-template-rows:80px 640px 530px 800px 650px  530px 900px   500px;
        }
        @media(min-width:1470px){
            grid-template-rows:80px 740px 730px 800px 650px 560px 1000px  500px;
        }

    `;

    
  
}
export default GridStyleIndex;