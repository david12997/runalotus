import {  NextPage } from "next";
import styled, {css} from "styled-components";
import GridStyleIndex from "./index/grid-index";
import GridStyleTurismo from "./turismo/grid-turismo";
import GridStyleTienda from "./tienda/grid-tienda";
import GridStylePromotions from "./tienda/grid-promos";
import GridStyleTurismoMapa from "./turismo/grid-mapa";
import GridRastreador from "./rastreador/grid-rastreador";




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
        const categories:string[] = [ 'productos','joyeria','ceramica','piedras','tejidos','jarras','sombreros','bolsos'];
        for(let i:number = 0;i < categories.length;i++){    

            if(props.page === '/tienda/'+categories[i])return css`${GridStyleTienda()}`
        }

       // console.log(props.page)
        //layout for dynamic routes view product
        if(props.page.includes('/tienda/productos/'))return css`${GridStyleTienda()}`;
        
        switch (props.page) {

            case '/': return css `${GridStyleIndex()};`;
            
            case '/turismo': return css`${GridStyleTurismo()}`;
            case '/turismo/mapa':return css`${GridStyleTurismoMapa()}`;

            case '/tienda': return css`${GridStyleTienda()}`;
            case '/tienda/promos':return css`${GridStylePromotions()} `;

            case '/rastreador': return css`${GridRastreador()}`;


        
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

