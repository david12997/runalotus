import {  NextPage } from "next";
import styled, {css} from "styled-components";



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
                                    "footer footer footer footer"
                ;
                grid-template-columns:20% 30% 25% 24.3%;
                grid-template-rows:95px;

                @media(min-width:800px){
                    grid-template-areas:"nav nav nav nav"
                                        "products products products products"
                                        "footer footer footer footer"
                    ;
                }
            `
        }

        switch (props.page) {

            case '/': return css`
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
                grid-template-rows:95px 750px 850px 650px 780px  760px 650px   1100px;

                @media(min-width:500px){
                    grid-template-rows:95px 750px 850px 650px 900px  760px 650px   1100px;
                }
                @media(min-width:800px){
                    grid-template-rows:95px 640px 530px 800px 650px  530px 900px   500px;
                }
                @media(min-width:1470px){
                    grid-template-rows:95px 740px 730px 800px 650px 560px 1000px  500px;
                }

            `;

            case '/turismo': return css`
                grid-template-areas:"nav nav nav nav"
                                    "moments moments moments moments"
                                    "categories categories categories categories"
                                    "routes routes routes routes"
                                    "footer footer footer footer"
                ;  
                grid-template-columns:1fr 1fr 1fr 1fr;
                grid-template-rows:95px 460px 630px  740px 1300px;

                @media(min-width:800px){
                    grid-template-rows:95px 560px 850px  500px 500px;
                }
                @media(min-width:1490px){
                    grid-template-rows:95px 720px 850px  500px 500px;
                }

            `;

            case '/tienda': return css`
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
                grid-template-rows:95px 430px 390px  740px 1100px 780px 780px 780px 780px 1100px;
                @media(min-width:330px){
                    grid-template-rows:95px 570px 390px  740px 1100px 780px 760px 780px 860px 1100px;
                }
                @media(min-width:400px){
                    grid-template-rows:95px 660px 390px  740px 1100px 780px 600px 780px 860px 1100px;
                }
                @media(min-width:520px){
                    grid-template-rows:95px 790px 390px  740px 1100px  800px 650px 880px 960px 1100px;
                }
                @media(min-width:800px){
                    grid-template-rows:95px 260px 410px  790px 1100px 630px 600px 630px 610px 500px;
                }
                @media(min-width:1000px){
                    grid-template-rows:95px 330px 410px  790px 1100px 630px 600px 630px 610px 500px;
                }
                @media(min-width:1260px){
                    grid-template-rows:95px 390px 410px  790px 1100px 630px 540px  630px 610px 500px;
                }
                @media(min-width:1490px){
                    grid-template-rows:95px 530px 410px  950px 1100px 630px 550px 630px 630px 500px;
                }

            `;

            case '/rastreador': return css`
                grid-template-areas:"nav nav nav nav"
                                    "tracker tracker tracker tracker"
                                    "footer footer footer footer"
                ;  
                grid-template-columns:1fr 1fr 1fr 1fr;
                grid-template-rows:95px 900px  1100px;

                @media(min-width:800px){
                    grid-template-rows:95px 660px 500px;
                }
                @media(min-width:1490px){
                    grid-template-rows:95px 690px  500px;
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
                                    "footer footer footer footer"
                ;
                grid-template-columns:20% 30% 25% 24.3%;
                grid-template-rows:95px;

                @media(min-width:800px){
                    grid-template-areas:"nav nav nav nav"
                                        "products products products products"
                                        "footer footer footer footer"
                    ;
                }


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

