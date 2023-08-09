import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { WidgetNav } from "../../../widgets/common/w-nav";
import { GetData } from "../../../services/get-data";
import { theme } from "../../../../config";
import { PropsAppStore } from "..";
import { WidgetProductsApp } from "../../../widgets/tienda/w-products-store";
import BreadCrumbs from "../../../components/common/breadCrumbs";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";



const StoreAppCategoryPage:NextPage<PropsAppStore> = (props) =>{


    return<>
        <Head>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <meta name="description" content="Runalotus  plataforma de comercio electrónico  COMPRA online rápido y seguro en tu tienda de PRODUCTOS HECHOS EN COLOMBIA en línea, Compras online de Artesanias, Jarras y vasos, Joyas y piedras,  con envío a todo COLOMBIA "/>
            <link rel="canonical" href="https://runalotus.com/es/tienda"/>
            <title>Runalotus | Compras  online | Hecho en Colombia | Made in Colombia |Envío Gratis | Tienda de artesanias y Joyeria | </title>
        </Head>

        <WidgetNav data={[props.data.attributes,props.context]} />
        <BreadCrumbs/>
        <WidgetProductsApp
            context={props.context} 
            products={props.products}
            categories={props.categories}
            id_category={props.id_category}

        />
        
    </>
}

export const getStaticPaths:GetStaticPaths = async (context) =>{

    const paths:(string | {
        params: ParsedUrlQuery;
        locale?: string | undefined;
    })[] =   [];

    const categories:string[] =[
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
        'artesnaias',
        'calzado',
        'accesorios',
        'ropa',
        'muebles',
        'decoracion',
        'hogar',
        'cocina',
        'mascotas',

    ];

    for(let i = 0; i < categories.length; i++){
        
        context.locales?.map((item:string)=>{
            paths.push({
                params:{category:categories[i]},
                locale:item
            });
        });
    }



    return{
        paths:paths,
        fallback:false
    }
}

export const getStaticProps:GetStaticProps<PropsAppStore> = async (context) =>{

    const {params} = context;
    let id_category:number = 1;

    params?.category === 'jarras' ? (id_category = 13) 
    : params?.category === 'joyeria' ? (id_category = 9)
    : params?.category === 'ceramica' ? (id_category = 10) 
    : params?.category === 'piedras' ? (id_category = 11) 
    : params?.category === 'tejidos' ? (id_category = 12) 
    : params?.category === 'sombreros' ? (id_category = 14) 
    : params?.category === 'bolsos' ? (id_category = 15) 
    : params?.category === 'productos' ? (id_category = 1)
    : (id_category = 1);

   
    
    let lang:string; // lang 5 and 6 are store page in cms
    context.locale === 'es' ? lang = '5' : lang = '6';
    
    const response = await GetData([
        'https://cms.aipus.co/api/subcategories?filters[category][id][$eq]=5&populate[0]=media', //return categories of runalotus
        `https://cms.aipus.co/api/products?populate=*&randomSort=true&filters[subcategories][id][$eq]=${id_category}&pagination[page]=1&pagination[pageSize]=9`, //return products of category
        `https://cms.aipus.co/api/pages/${lang}?populate[0]=components` //return components of store page

    ],theme.token_cms as string).then(data=>data);


    return{
        props:{
            products:response[1],
            categories:response[0],
            context:context,
            data:response[2].data,
            id_category:id_category
            
        },

    }
}

export default StoreAppCategoryPage;

