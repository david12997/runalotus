import { GetStaticProps, NextPage } from "next";
import { WidgetNav } from "@/widgets/common/w-nav";
import { WidgetWelcomeTourism } from "@/widgets/tourism/w-welcome";
import BreadCrumbs from "../../components/common/breadCrumbs";
import { theme } from "../../../config";
import { GetData } from "../../services/get-data";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicWidgetCategoriesTourism = dynamic(() => import("@/widgets/tourism/w-categories").then((mod) => mod.WidgetCategoriesTourism));
const DynamicWidgetAnimationRoutes = dynamic(() => import("@/widgets/tourism/w-animation-routes").then((mod) => mod.WidgetAnimationRoutes));
const DynamicWidgetFooter = dynamic(() => import("@/widgets/common/w-footer").then((mod) => mod.WidgetFooter));

export type PropsTourismPage = {

  data:{id:number,attributes:any},
  context?:any
}

const TourismPage: NextPage<PropsTourismPage> = (props) =>{

  const router = useRouter();


  return<>
    <Head>
    <meta charSet="UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <meta name="description" content="Descubre Colombia y sus maravillas, Paisajes, Lugares increibles y Culturas anestrales. Explora Colmbia turistica con lo mejor de runalotus turismo "/>
      <link rel="canonical" href="https://runalotus.com/es/turismo"/>
      <title>Turismo Colombia | Mapa turistico | Rutas turisticas | Colombia   </title>
    </Head>
    <WidgetNav data={[props.data.attributes, props.context]}/>
    <BreadCrumbs/>
    <WidgetWelcomeTourism data={props.data} />
    <DynamicWidgetCategoriesTourism data={props.data}/>
    <DynamicWidgetAnimationRoutes data={props.data}/>
    <DynamicWidgetFooter/>
  </>
}


export const  getStaticProps:GetStaticProps<PropsTourismPage> = async(context) =>{

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

export default TourismPage;