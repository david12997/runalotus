import { GetStaticProps, NextPage } from "next";
import { WidgetNav } from "@/widgets/common/w-nav";
import { WidgetWelcomeTourism } from "@/widgets/tourism/w-welcome";
import { WidgetCategoriesTourism } from "@/widgets/tourism/w-categories";
import { WidgetAnimationRoutes } from "@/widgets/tourism/w-animation-routes";
import { WidgetFooter } from "@/widgets/common/w-footer";
import { PropsPage } from ".";
import { theme } from "../../config";
import { GetData } from "../services/get-data";
import { useRouter } from "next/router";


const TourismPage: NextPage<PropsPage> = (props) =>{

  const router = useRouter();
  if(router.isFallback){
      return <div>Loading...</div>
  }

  return<>
    <WidgetNav/>
    <WidgetWelcomeTourism data={props.data} />
    <WidgetCategoriesTourism/>
    <WidgetAnimationRoutes/>
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

export default TourismPage;