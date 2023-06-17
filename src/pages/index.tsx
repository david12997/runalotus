import { WidgetFooter } from "@/widgets/common/w-footer";
import { WidgetNav } from "@/widgets/common/w-nav";
import { WidgetCategoriesProductIndex } from "@/widgets/index/w-categories-index";
import { WidgetCategoriesTourismIndex } from "@/widgets/index/w-categories-tourism";
import { WidgetIndexRoutes } from "@/widgets/index/w-routes-index";
import { WidgetStoreIndex } from "@/widgets/index/w-store-index";
import { WidgetWelcomeIndex } from "@/widgets/index/w-welcome-index";
import { WidgetAnimationPayIndex} from "@/widgets/index/w-animation-pay";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { theme } from "../../config";
import { GetData } from "../services/get-data";
import { useRouter } from "next/router";

export type PropsIndexPage = {

  data:{id:number,attributes:any},
  context?:any
}

const Index: NextPage<PropsIndexPage> = (props) => {

  const router = useRouter();

  if(router.isFallback){
    return <div>Loading...</div>
  }

  return<>
    <Head>
      <title>Runalotus Colombia | Turismo | Tienda de artesanias </title>
    </Head>

    <WidgetNav data={[props.data.attributes,props.context]}/>
    <WidgetWelcomeIndex data={props.data}/>
    <WidgetStoreIndex data={props.data}/>
    <WidgetCategoriesProductIndex data={props.data}/>
    <WidgetAnimationPayIndex data={props.data}/>
    <WidgetIndexRoutes data={props.data}/>
    <WidgetCategoriesTourismIndex data={props.data}/>
    <WidgetFooter/>

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