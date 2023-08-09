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

        //layout dynamic routes store categories
        const categories:string[] = [ 
            'productos',
            'joyeria',
            'ceramica',
            'piedras',
            'tejidos',
            'jarras',
            'sombreros',
            'bolsos',
            'vasos',
            'copas',
            'artesanias',
            'calzado',
            'accesorios',
            'ropa',
            'muebles',
            'decoracion',
            'hogar',
            'cocina',
            'otros'
        ];

        for(let i:number = 0;i < categories.length;i++){    

            if(props.page === '/tienda/'+categories[i])return css`${GridStyleTienda()}`
            if(props.page.includes('/tienda/'+categories[i]+'/'))return css`${GridStyleTienda()}`;
        }

        //layout static routes
        if(props.page.split('?')[0] === '/')return css `${GridStyleIndex()};`;
        else if(props.page.split('?')[0] === '/turismo')return css`${GridStyleTurismo()}`;
        else if(props.page.split('?')[0] === '/tienda')return css`${GridStyleTienda()}`;
        else if(props.page.split('?')[0] === '/rastreador')return css`${GridRastreador()}`;

        else if(props.page.split('?')[0] === '/turismo/mapa')return css`${GridStyleTurismoMapa()}`;
        else if(props.page.split('?')[0] === '/tienda/promos')return css`${GridStylePromotions()}`;
        else return css``;               


    }}


`;


const Layout:NextPage<{children:JSX.Element[], page:string}> = ({children, page})=>{

    return<StyleLayout page={page}>

        {children}
    
    </StyleLayout>
}

export default Layout;

