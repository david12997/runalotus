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

      <meta name="description" content="Runalotus es una plataforma de turismo y comercio electrónico que conecta  artesanos  y fabricantes colombianos con personas interesadas en descubrir las maravillas de Colombia. "/>
      <link rel="canonical" href="https://runalotus.com/es/tienda"/>
      <title>Runalotus | Artesanos y Fabricantes | Tienda de artesanias y Joyeria | Herramientas turisticas | Colombia   </title>
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