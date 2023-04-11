import { NextPage } from "next";
import SectionAnimationRoute from "../../components/turismo/animation-routes";
import { Player } from "@lottiefiles/react-lottie-player";
import Button1 from "../../components/common/button-1";

export const WidgetAnimationRoutes:NextPage = ()=>{

    return<>

        <SectionAnimationRoute

            title="Encuentra rutas turísticas"
            description=" Lugares, monumentos, hoteles y más"
            text=" 
                Las rutas turísticas son una excelente fotma de conocer Colombia,es tan simple como
                elegir el departamento en el que estas ubicado o que quiere conocer y te recomendaremos rutas que incluyen
                paisajes hermosos, atracciones turísticas, hoteles, restaurantes y lugares emblemáticos
            "
            player={
                <Player
                    src='/assets/animations/route-turismo.json'
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
                    text="Ver rutas"
                />
            }

            area="routes"

        
        />

    </>
}