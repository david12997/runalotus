import { WidgetFooter } from "@/widgets/common/w-footer";
import { WidgetNav } from "@/widgets/common/w-nav";
import { WidgetCategoriesProductStore } from "@/widgets/tienda/promos/w-categories-store";
import { WidgetAnimationCash } from "@/widgets/tienda/promos/w-animation-cash";
import { WidgetAnimationPayStore } from "@/widgets/tienda/promos/w-animation-pay";
import { WidgetSectionAnimationTrack } from "@/widgets/tienda/promos/w-animation-track";
import { WidgetWishListStore } from "@/widgets/tienda/promos/w-animation-wishlist";
import { WidgetCardsInfo } from "@/widgets/tienda/promos/w-cards-info";
import { WidgetFeaturedProducts } from "@/widgets/tienda/promos/w-featured-products";
import { WidgetWelcomeStore } from "@/widgets/tienda/promos/w-welcome-store";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { theme } from "../../../config";
import { GetData } from "../../services/get-data";
import { useRouter } from "next/router";

export type PropsStorePage = {
  data:{id:number,attributes:any}
  products:any[],
  context?:any
}

const StorePage: NextPage<PropsStorePage> = (props) => {

  const router = useRouter();
  if(router.isFallback){
      return <div>Loading...</div>
  }

  return <>
    <Head>
      <title>Tienda | Joyeria | Artesanias</title>
    </Head>
    
    <WidgetNav data={[props.data.attributes, props.context]}/>
    <WidgetWelcomeStore data={props.data}/>
    <WidgetCardsInfo data={props.data}/>
    <WidgetCategoriesProductStore data={props.data}/>
    <WidgetFeaturedProducts products={props.products}/>
    <WidgetAnimationPayStore data={props.data}/>
    <WidgetWishListStore data={props.data} />
    <WidgetAnimationCash data={props.data} />
    <WidgetSectionAnimationTrack data={props.data} />
    <WidgetFooter/>

  </>
}

export const  getStaticProps:GetStaticProps<PropsStorePage> = async(context) =>{

  let lang:string; // lang 5 and 6 are store page in cms
  context.locale === 'es' ? lang = '5' : lang = '6';

  const response = await GetData([
    
    `https://cms.aipus.co/api/pages/${lang}?populate[0]=components`,
    'https://cms.aipus.co/api/products?populate=*&filters[subcategories][id][$eq]=1'

  ],theme.token_cms as string).then(data=>data)

  return{

    props:{
      data: response[0].data,
      context:context,
      products:response[1].data
    }
  }

}



export default StorePage;