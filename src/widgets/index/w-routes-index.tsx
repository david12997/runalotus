import { NextPage } from "next";
import { Player } from "@lottiefiles/react-lottie-player";
import SectionAnimationRoute from "../../components/turismo/animation-routes";
import Button1 from "../../components/common/button-1";
import { theme } from "../../../config";
import { PropsPage } from "../../pages";


export const WidgetIndexRoutes:NextPage<PropsPage> = (props)=>{

    type Sectionroutes = {
        text1:string,
        text2:string,
        description:string,
        animation:string,
        text_button:string
    }

    const dataWidget:Sectionroutes = props.data.attributes.data.inicio.routes;


    return<>

        <SectionAnimationRoute 

            title={dataWidget.text1}
            description={dataWidget.text2}
            text={dataWidget.description}
            player={
                <Player
                    src={theme.data_domain+dataWidget.animation}
                    className="router-tourism"
                    loop
                    autoplay
                    speed={1}
                />
            }

            button={
                <Button1
                    minHeight="65px"
                    minWidth="250px"
                    text={dataWidget.text_button}
                />
            }

            area="routesHome"

        
        />

    </>
}