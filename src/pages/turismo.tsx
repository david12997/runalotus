import { GetStaticProps, NextPage } from "next";
import { WidgetNav } from "@/widgets/common/w-nav";
import { WidgetWelcomeTourism } from "@/widgets/tourism/w-welcome";
import { WidgetCategoriesTourism } from "@/widgets/tourism/w-categories";
import { WidgetAnimationRoutes } from "@/widgets/tourism/w-animation-routes";
import { WidgetFooter } from "@/widgets/common/w-footer";
import { theme } from "../../config";
import { GetData } from "../services/get-data";
import { useRouter } from "next/router";

export type PropsTourismPage = {

  data:{id:number,attributes:any},
  context?:any
}

const TourismPage: NextPage<PropsTourismPage> = (props) =>{

  const router = useRouter();
  if(router.isFallback){
      return <div>Loading...</div>
  }

  return<>
    <WidgetNav data={[props.data.attributes, props.context]}/>
    <WidgetWelcomeTourism data={props.data} />
    <WidgetCategoriesTourism data={props.data}/>
    <WidgetAnimationRoutes data={props.data}/>
    <WidgetFooter/>
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