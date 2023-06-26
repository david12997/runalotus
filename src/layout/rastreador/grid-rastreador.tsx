import {css} from 'styled-components';

const GridRastreador = () =>{

    return css`
        grid-template-areas:"nav nav nav nav"
                            "tracker tracker tracker tracker"
                            "footer footer footer footer"
        ;  
        grid-template-columns:1fr 1fr 1fr 1fr;
        grid-template-rows:80px 900px  1100px;

        @media(min-width:800px){
            grid-template-rows:80px 660px 500px;
        }
        @media(min-width:1490px){
            grid-template-rows:80px 690px  500px;
        }
    `;
}

export default GridRastreador;