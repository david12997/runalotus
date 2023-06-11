import { WidgetFooter } from "@/widgets/common/w-footer";
import { WidgetNav } from "@/widgets/common/w-nav";
import { WidgetCategoriesProductStore } from "@/widgets/tienda/w-categories-store";
import { WidgetAnimationCash } from "@/widgets/tienda/w-animation-cash";
import { WidgetAnimationPayStore } from "@/widgets/tienda/w-animation-pay";
import { WidgetSectionAnimationTrack } from "@/widgets/tienda/w-animation-track";
import { WidgetWishListStore } from "@/widgets/tienda/w-animation-wishlist";
import { WidgetCardsInfo } from "@/widgets/tienda/w-cards-info";
import { WidgetFeaturedProducts } from "@/widgets/tienda/w-featured-products";
import { WidgetWelcomeStore } from "@/widgets/tienda/w-welcome-store";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { theme } from "../../config";
import { GetData } from "../services/get-data";
import { useRouter } from "next/router";

type PropsStorePage = {
  data:{id:number,attributes:any}
  products:any[]
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
    
   
    <WidgetWelcomeStore/>
    <WidgetCardsInfo/>
    <WidgetCategoriesProductStore data={props.data}/>
    <WidgetFeaturedProducts products={props.products}/>
    <WidgetAnimationPayStore/>
    <WidgetWishListStore/>
    <WidgetAnimationCash/>
    <WidgetSectionAnimationTrack/>
    <WidgetFooter/>

  </>
}

export const  getStaticProps:GetStaticProps<PropsStorePage> = async(context) =>{

  const response = await GetData([
    
    'https://cms.aipus.co/api/pages/1',
    'https://cms.aipus.co/api/products?populate=*&filters[subcategories][id][$eq]=1'

  ],theme.token_cms as string).then(data=>data)

  return{

    props:{
      data: response[0].data,
      products:response[1].data
    }
  }

}



export default StorePage;