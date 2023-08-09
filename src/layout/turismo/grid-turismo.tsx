import { css } from "styled-components";

const GridStyleTurismo = () =>{


    return css`
    
        grid-template-areas:"nav nav nav nav"
                            "navigation navigation navigation navigation"
                            "moments moments moments moments"
                            "categories categories categories categories"
                            "routes routes routes routes"
                            "footer footer footer footer"
            ;  
            grid-template-columns:1fr 1fr 1fr 1fr;
            grid-template-rows:56px 30px 460px 630px  740px 1300px;

            @media(min-width:800px){
                grid-template-rows:56px 30px 560px 850px  500px 500px;
            }
            @media(min-width:1490px){
                grid-template-rows:56px 30px 720px 850px  500px 500px;
            }
    `;

    
  
}
export default GridStyleTurismo;