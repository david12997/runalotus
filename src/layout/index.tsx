import {  NextPage } from "next";
import styled, {css} from "styled-components";
import GridStyleIndex from "./index/grid-index";
import GridStyleTurismo from "./turismo/grid-turismo";
import GridStyleTienda from "./tienda/grid-tienda";



interface PropsStyleLayout{

    page:string
}

const StyleLayout =  styled.span<PropsStyleLayout>`

    width:100%;
    display:grid;
    font-family: 'Heebo', sans-serif;
    grid-gap:3px;
    ${(props)=>{

        //layout for dynamic routes store categories
        const categories:string[] = ['joyeria','ceramica','piedras','tejidos','jarras','sombreros','bolsos'];

        for(let i:number = 0;i < categories.length;i++){

            if(props.page === '/tienda/productos/'+categories[i])return css`

                grid-template-areas:"nav nav nav nav"
                                    "products products products products"
                ;
                grid-template-columns:1fr 1fr 1fr 1fr;
                grid-template-rows:80px calc(100vh - 88px);
            `
        }

        switch (props.page) {

            case '/': return css `${GridStyleIndex()};`;
            
            case '/turismo': return css`${GridStyleTurismo()}`;

            case '/tienda': return css`${GridStyleTienda()}`;

            case '/rastreador': return css`
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

            case '/turismo/mapa':return css`
                
                grid-template-areas:"map map map map"
                                    "map map map map"
                ;   
                grid-template-columns:25% 25% 25% 25%;
                grid-template-rows:50% 50%;
            `;

            case '/tienda/productos':return css`

                grid-template-areas:"nav nav nav nav"
                                    
                                    "products products products products"
                ;
                grid-template-columns:1fr 1fr 1fr 1fr;
                grid-template-rows:80px calc(100vh - 88px);



               


            `;
            
            default: return css`
            
            `;                
        }


    }}


`;


const Layout:NextPage<{children:JSX.Element[], page:string}> = ({children, page})=>{

    return<StyleLayout page={page}>

        {children}
    
    </StyleLayout>
}

export default Layout;

