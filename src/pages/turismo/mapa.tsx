import { GetStaticProps, NextPage } from "next";
import { WidgetMap } from "../../widgets/mapa/w-map";
import { GetData } from "../../services/get-data";
import { theme } from "../../../config";
import { WidgetNav } from "../../widgets/common/w-nav";
import BreadCrumbs from "../../components/common/breadCrumbs";
import Head from "next/head";

export type PropsMapPage = {

    data:{id:number,attributes:any},
    context?:any
}

const  MapsPage:NextPage<PropsMapPage> =(props) =>{

    return<>
      <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta name="description" content="Descubre Colombia y sus maravillas, Paisajes, Lugares increibles y Culturas anestrales. Explora Colmbia turistica con lo mejor de runalotus turismo "/>
        <link rel="canonical" href="https://runalotus.com/es/turismo"/>
        <title>Mapa turistico | Puntos turisticos | Alojamientos | Restaurantes | Gastronomia | Cultura   </title>
      </Head>
        <BreadCrumbs/>
        <WidgetMap/>
    </>
}

export const  getStaticProps:GetStaticProps<PropsMapPage> = async(context) =>{

    let lang:string; // lang 3 and 4 are tourism page in cms
    context.locale === 'es' ? lang = '3' : lang = '4';
  
    const data =  await GetData([`https://cms.aipus.co/api/pages/${lang}?populate[0]=components`],theme.token_cms as string).then(res=>res);
  
    return{
  
      props:{
        data: data[0].data,
        context:context
      }
    }
  
  }
  

export default MapsPage;