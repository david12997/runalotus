import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import SectionAnimationTrack from "../../components/tienda/section-animation-track";
import Button1 from "../../components/common/button-1";

export const WidgetSectionAnimationTrack:NextPage = ()=>{

    return<>
        <SectionAnimationTrack

            area="track"
            title="Rastrea todas tus compras en tiempo real"
            description="Siempre informado del estado de tus compras"
            animation={
                <Player
                    src='/assets/animations/tracker.json'
                    className="track"
                    loop
                    autoplay
                    speed={1}
                />
            }
            text="
                Cuando rastreas una compra puedes obtener informacion del estado en que esta se encuentra,
                la ubicación de tu compra y cualquier novedad de la misma, para
                rastrear una compra debe susar el ID de rastreo que aparece en la factura de tu compra
            "
            button={
                <Button1
                    minHeight="65px"
                    minWidth="250px"
                    text="Ver descuentos"
                />
            }       
        />
    </>
}