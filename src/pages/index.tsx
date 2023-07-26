import { WidgetNav } from "@/widgets/common/w-nav";
import { WidgetWelcomeIndex } from "@/widgets/index/w-welcome-index";

import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { theme } from "../../config";
import { GetData } from "../services/get-data";

import dynamic from "next/dynamic";



const DynamicWidgetStoreIndex = dynamic(()=>import('@/widgets/index/w-store-index').then((mod)=>mod.WidgetStoreIndex));
const DynamicWidgetCategoriesProductIndex = dynamic(()=>import('@/widgets/index/w-categories-index').then((mod)=>mod.WidgetCategoriesProductIndex));
const DynamicWidgetAnimationPayIndex = dynamic(()=>import('@/widgets/index/w-animation-pay').then((mod)=>mod.WidgetAnimationPayIndex));
const DynamicWidgetIndexRoutes = dynamic(()=>import('@/widgets/index/w-routes-index').then((mod)=>mod.WidgetIndexRoutes));
const DynamicWidgetCategoriesTourismIndex = dynamic(()=>import('@/widgets/index/w-categories-tourism').then((mod)=>mod.WidgetCategoriesTourismIndex));
const DynamicWidgetFooter = dynamic(()=>import('@/widgets/common/w-footer').then((mod)=>mod.WidgetFooter));


export type PropsIndexPage = {

  data:{id:number,attributes:any},
  context?:any
}



const Index: NextPage<PropsIndexPage> = (props) => {


  return<>
    <Head>
      <meta charSet="UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="facebook-domain-verification" content="rn36ib6ornm0vhd4n1ldrzzlw0q96s" />
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://runalotus.com/"/>
      <meta property="og:image" content="https://cms.aipus.co/uploads/fondo_runa_1_ee02d63487.png"/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta property="og:image:alt" content="Descubre Colombia y sus maravillas"/>
      <meta property="og:title" content="Runalotus turismo y comercio electronico de productos hechos en Colombia"/>
      <meta property="keywords" content="Artesanas,ecommerce, Colombia, Tienda "/>
      <meta name="description" content="Runalotus Turismo y Artesanias Colombias "/>
      <meta property="og:site_name" content="Runalotus turismo y comercio electronico de productos hechos en Colombia "/>

      <link rel="canonical" href="https://runalotus.com/"/>
      <title>Runalotus | Turismo y Artesanias | | Colombia | Tienda de artesanias y Joyeria | Herramientas turisticas    </title>
    </Head>

    <WidgetNav data={[props.data.attributes,props.context]}/>
    <WidgetWelcomeIndex data={props.data}/>
    <DynamicWidgetStoreIndex data={props.data}/>
    <DynamicWidgetCategoriesProductIndex data={props.data}/>
    <DynamicWidgetAnimationPayIndex data={props.data}/>
    <DynamicWidgetIndexRoutes data={props.data}/>
    <DynamicWidgetCategoriesTourismIndex data={props.data}/>
    <DynamicWidgetFooter/>

  </>
}

export const  getStaticProps:GetStaticProps<PropsIndexPage> = async(context) =>{

  let lang:string; // lang 1 and 2 are index page in cms
  context.locale === 'es' ? lang = '1' : lang = '2';

  const data =  await GetData([`https://cms.aipus.co/api/pages/${lang}?populate[0]=components`],theme.token_cms as string).then(res=>res);
 
  return{

    props:{
      data: data[0].data,
      context:context
    }
  }

}


export default Index;