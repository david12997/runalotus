import { css } from "styled-components";

const GridStyleTurismoMapa = () =>{

    return css`
    
                    
        grid-template-areas:"map map map map"
                            "map map map map"
        ;   
        grid-template-columns:25% 25% 25% 25%;
        grid-template-rows:50% 50%;

    `;

}

export default GridStyleTurismoMapa;