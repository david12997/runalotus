import { NextPage } from "next";
import SectionAnimationRoute from "../../components/turismo/animation-routes";
import { Player } from "@lottiefiles/react-lottie-player";
import Button1 from "../../components/common/button-1";
import { PropsTourismPage } from "../../pages/turismo";
import { theme } from "../../../config";

export const WidgetAnimationRoutes:NextPage<PropsTourismPage> = (props)=>{

    const dataWidget = props.data.attributes.page.WidgetAnimationRoutes;

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

            area="routes"

        
        />

    </>
}