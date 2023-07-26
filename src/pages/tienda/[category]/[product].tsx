import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { WidgetViewProduct } from "../../../widgets/tienda/w-view-product";
import { GetData } from "../../../services/get-data";
import { theme } from "../../../../config";
import { useRouter } from "next/router";
import { WidgetNav } from "../../../widgets/common/w-nav";
import BreadCrumbs from "../../../components/common/breadCrumbs";
import Head from "next/head";

type PropsViewProduct = {
    id_product:number | string,
    product:{id:number, attributes:any},
    data:{id:number, attributes:any}
    context:any,
}

const StoreViewProductPage:NextPage<PropsViewProduct> = (props) =>{

    const router = useRouter();

    if(router.isFallback){

        return <h1>Loading...</h1>
    }

    return<>
    <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta name="description" content="Runalotus  plataforma de comercio electrónico  COMPRA online rápido y seguro en tu tienda de PRODUCTOS HECHOS EN COLOMBIA en línea, Compras online de Artesanias, Jarras y vasos, Joyas y piedras,  con envío a todo COLOMBIA "/>
        <link rel="canonical" href="https://runalotus.com/es/tienda"/>
        <title> {props.product.attributes.name} | Compras  online | Hecho en Colombia | Made in Colombia |Envío Gratis | Tienda de artesanias y Joyeria | </title>
    </Head>
    <WidgetNav data={[props.data.attributes,props.context]}/>
    <BreadCrumbs/>
    <WidgetViewProduct product={props.product} context={props.context} />
    </>
}

export const getStaticPaths:GetStaticPaths = async () =>{

    return{
        paths:[], //empty array
        fallback:true
    }

}

export const getStaticProps:GetStaticProps<PropsViewProduct> = async (context) =>{

    const {params} = context;
    let id_product:string = '1';

    if(params?.product){

        id_product = params.product.toString().split('@')[1];
    }

    let lang:string; // lang 5 and 6 are store page in cms
    context.locale === 'es' ? lang = '5' : lang = '6';

    const response = await GetData([
        `https://cms.aipus.co/api/products/${id_product}?populate=*`,
        `https://cms.aipus.co/api/pages/${lang}?populate[0]=components` //return components of store page
        
    ],theme.token_cms as string).then(data=>data);
    
    return{
        props:{
            id_product:id_product,
            product:response[0].data,
            data:response[1].data,
            context:context
        }
    }
}

export default StoreViewProductPage;