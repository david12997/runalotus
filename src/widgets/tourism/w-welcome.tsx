import { NextPage } from "next";
import { IconClimate, IconLocation } from "../../icons/icons";
import { theme } from "../../../config";
import Select from "../../components/common/select";
import Welcome from "../../components/turismo/welcome";
import Button1 from "../../components/common/button-1";
import SearchRoute from "../../components/turismo/search-route";
import { PropsPage } from "../../pages";
  


export const WidgetWelcomeTourism:NextPage<PropsPage> =(props) =>{

    console.log(props);

    const imgCarrousel: string[] = [

        'assets/img/turismo/playa-1.png',
        'assets/img/turismo/cartago.png',
        'assets/img/turismo/leticia.png',
        'assets/img/turismo/medallo.png',
        'assets/img/turismo/santa.png'
      ];
    
      const iconsSearchRoute: JSX.Element[] = [
    
        <IconLocation width="45" height="45" fill={theme.colors.primaryA} />,
        <IconClimate width="45" height="45" fill={theme.colors.primaryA} />
    
      ];
    
      const SelectsSearchRoute: JSX.Element[] = [
    
        <Select label="Elige un lugar" options={['Cundinamarca', 'Boyacá', 'Meta', 'Amazonas', 'San Andres y Providencia']} message="Elige un departamento" />,
        <Select label="Elige un clima" options={['Frio', 'Templado', 'Calido', 'Humedo']} message="Elige un clima" />
    
      ];
    

    return<>
    
        <Welcome
            imgCarrousel={imgCarrousel}
            title="Los mejores momentos en los mejores lugares"
            button={
                <Button1
                    minWidth="210px"
                    minHeight="50px"
                    text="Descubrir mapa"
                />
            }
            searchRouter={
                <SearchRoute
                    icons={iconsSearchRoute}
                    selects={SelectsSearchRoute}
                />
            }
        />
        
    </>
}