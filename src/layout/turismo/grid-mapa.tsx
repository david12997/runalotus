import { css } from "styled-components";

const GridStyleTurismoMapa = () =>{

    return css`

        grid-template-areas:"navigation navigation navigation navigation"
                            "map map map map"
        ;
        grid-template-columns:1fr 1fr 1fr 1fr;
        grid-template-rows: 30px calc(100vh - 130px);
     

    `;

}

export default GridStyleTurismoMapa;