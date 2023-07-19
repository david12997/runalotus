import { GetStaticProps, NextPage } from "next";
import { WidgetNav } from "../../widgets/common/w-nav"; 
import { WidgetProductsApp } from "../../widgets/tienda/w-products-store";
import { GetData } from "../../services/get-data";
import { theme } from "../../../config";
import BreadCrumbs from "../../components/common/breadCrumbs";
import Head from "next/head";

export type PropsAppStore ={
    categories:{data:any[], meta:any},
    products:{data:any[], meta:any},
    context:any,
    data:{id:number,attributes:any},
    id_category:number

}

const  StoreAppPage:NextPage<PropsAppStore> =(props) =>{



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

export const getStaticProps:GetStaticProps<PropsAppStore> = async(context) =>{

    let lang:string; // lang 5 and 6 are store page in cms
    context.locale === 'es' ? lang = '5' : lang = '6';

    const response = await GetData([
    
        'https://cms.aipus.co/api/subcategories?filters[category][id][$eq]=5&populate[0]=media', //return categories of runalotus
        'https://cms.aipus.co/api/products?populate=*&filters[subcategories][id][$eq]=1&pagination[page]=1&pagination[pageSize]=6', //return products of runalotus
        `https://cms.aipus.co/api/pages/${lang}?populate[0]=components` //return components of store page
    
    ],theme.token_cms as string).then(data=>data);



    return{
        props:{
            categories:response[0],
            products:response[1],
            context:context,
            data:response[2].data,
            id_category:1
        },
        
    }
}


export default StoreAppPage;