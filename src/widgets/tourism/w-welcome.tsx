import { NextPage } from "next";
import { IconClimate, IconLocation } from "../../icons/icons";
import { theme } from "../../../config";
import Select from "../../components/common/select";
import Welcome from "../../components/turismo/welcome";
import Button1 from "../../components/common/button-1";
import SearchRoute from "../../components/turismo/search-route";
import { useRouter } from "next/router";
import { PropsTourismPage } from "../../pages/turismo";
  


export const WidgetWelcomeTourism:NextPage<PropsTourismPage> =(props) =>{

    const router = useRouter();
    const dataWidget = props.data.attributes.page.WidgetWelcomeTourism;
   
    
      const iconsSearchRoute: JSX.Element[] = [
    
        <IconLocation width="45" height="45" fill={theme.colors.primaryA} />,
        <IconClimate width="45" height="45" fill={theme.colors.primaryA} />
    
      ];
    


    return<>
    
        <Welcome
            imgCarrousel={dataWidget.carrousel}
            title={dataWidget.text}
            button={
                <Button1
                    minWidth="210px"
                    minHeight="50px"
                    text={dataWidget.button}
                    click={()=>router.push('/turismo/mapa')}
                />
            }
            searchRouter={
                <SearchRoute
                    icons={iconsSearchRoute}
                   
                />
            }
        />
        
    </>
}