import { WidgetFooter } from "@/widgets/common/w-footer";
import { WidgetNav } from "@/widgets/common/w-nav";
import { WidgetCategoriesProductIndex } from "@/widgets/index/w-categories-index";
import { WidgetCategoriesTourismIndex } from "@/widgets/index/w-categories-tourism";
import { WidgetIndexRoutes } from "@/widgets/index/w-routes-index";
import { WidgetStoreIndex } from "@/widgets/index/w-store-index";
import { WidgetWelcomeIndex } from "@/widgets/index/w-welcome-index";
import { WidgetAnimationPay } from "@/widgets/tienda/w-animation-pay";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { theme } from "../../config";
import { GetData } from "../services/get-data";
import { useRouter } from "next/router";

export type PropsPage = {

  data:{id:number,attributes:any},
}

const Index: NextPage<PropsPage> = (props) => {

  const router = useRouter();
  if(router.isFallback){
    return <div>Loading...</div>
  }

  return<>
    <Head>
      <title>Runalotus Colombia | Turismo | Tienda de artesanias </title>
    </Head>

    <WidgetNav/>
    <WidgetWelcomeIndex data={props.data}/>
    <WidgetStoreIndex data={props.data}/>
    <WidgetCategoriesProductIndex data={props.data}/>
    <WidgetAnimationPay data={props.data}/>
    <WidgetIndexRoutes data={props.data}/>
    <WidgetCategoriesTourismIndex data={props.data}/>
    <WidgetFooter/>

  </>
}

export const  getStaticProps:GetStaticProps<PropsPage> = async(context) =>{

  const data =  await GetData(['https://cms.aipus.co/api/stores/1'],theme.token_cms).then(res=>res);

  return{

    props:{
      data: data[0].data
    }
  }

}


export default Index;